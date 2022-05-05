import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { userValidationSchema as schema } from "../../services/utils/loginValidation";

import logo from "../../assets/image/logos/emall.png";
import RegisterFinder from "../../services/apis/Register";
import { AuthContext } from "../../hooks/contexts/AuthContext";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import {
  Container,
  Card,
  CardMsgs,
  Title,
  FormField,
  MuteLink,
  BoldLink,
  Button,
  CardBody,
  Logo,
  Form,
  Input,
} from "./Access.Styles";

const Login = () => {
  const { setCurrentUser, setAuth } = useContext(AuthContext);
  const [isError, setIsError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const LoginUser = async (values) => {
    try {
      const data = await RegisterFinder.login(values);
      if (data.success) {
        localStorage.setItem("token", data.token);
        setCurrentUser((p) => data.data);
        setAuth(true);
      } else {
        setAuth(false);
        setIsError((prev) => data.msg);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const onSubmit = (valores) => {
    valores.isUpdated = true;
    LoginUser(valores);
  };

  return (
    <>
      <Header page="login" />
      <Container>
        <Card>
          <CardMsgs>
            <Logo src={logo} alt="emall-logo"></Logo>
            {/* <Title> Bienvenido </Title> */}
            <Title>Gracias por volver</Title>
            {isError && <p className="error">{isError}</p>}
          </CardMsgs>
          <CardBody>
            <Form className="form" onSubmit={handleSubmit(onSubmit)}>
              <FormField>
                <label htmlFor="identification">Identificación</label>
                <Input
                  {...register("identification")}
                  placeholder="Identificación"
                />
                <p className="error">{errors?.identification?.message}</p>
              </FormField>

              <FormField>
                <label htmlFor="password">Clave</label>
                <Input {...register("password")} placeholder="Clave" />
                <p className="error">{errors?.password?.message}</p>
              </FormField>

              <Button type="submit">Ingresar</Button>
            </Form>
          </CardBody>
          <MuteLink>
            <BoldLink to="/register">
              ¿No tienes una cuenta aun? <span>Registrarse</span>
            </BoldLink>
          </MuteLink>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
