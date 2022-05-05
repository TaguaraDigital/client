import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { userValidationSchema as schema } from "../../services/utils/registerValidation";
import toast, { Toaster } from "react-hot-toast";

import RegisterFinder from "../../services/apis/Register";
import { AuthContext } from "../../hooks/contexts/AuthContext";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import {
  Container,
  Card,
  CardMsgs,
  Title,
  SmallText,
  FormField,
  MuteLink,
  BoldLink,
  Button,
  CardBody,
} from "./Access.Styles";

const Register = () => {
  const { setAuth } = useContext(AuthContext);
  const [isError, setIsError] = useState("");

  const RegisterUser = async (values) => {
    try {
      const data = await RegisterFinder.signup(values);

      if (data.success) {
        toast.success("Usuario registrado exitosamente", {
          duration: 5000,
          position: "bottom-center",
        });
      } else {
        setAuth(false);
        setIsError((prev) => data.msg);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values, { resetForm }) => {
    RegisterUser(values);
  };

  return (
    <>
      <Header page="login" />
      <Container>
        <Card>
          <CardMsgs>
            <Title> Registrarse </Title>
            <SmallText>Ingrese sus datos</SmallText>
            <SmallText>para crear una cuenta</SmallText>
            {isError && <p className="error">{isError}</p>}
          </CardMsgs>
          <CardBody>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <FormField>
                <input
                  {...register("identification")}
                  placeholder="Identificación"
                />
                <p className="error">{errors?.identification?.message}</p>
              </FormField>

              <FormField>
                <input {...register("user_name")} placeholder="Name" />
                <p className="error">{errors?.user_name?.message}</p>
              </FormField>

              <FormField>
                <input {...register("email")} placeholder="Email" />
                <p className="error">{errors?.email?.message}</p>
              </FormField>

              <FormField>
                <input {...register("password")} placeholder="Clave" />
                <p className="error">{errors?.password?.message}</p>
              </FormField>

              <FormField>
                <input
                  {...register("passwordConfirm")}
                  placeholder="Confirmar la Clave"
                />
                <p className="error">{errors?.passwordConfirm?.message}</p>
              </FormField>

              <Button type="submit"> Registrarse </Button>
              <Toaster />
            </form>
          </CardBody>

          <MuteLink>
            <BoldLink to="/login">
              {" "}
              ¿Ya tienes una cuenta? <span>Ingresar</span>{" "}
            </BoldLink>
          </MuteLink>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default Register;
