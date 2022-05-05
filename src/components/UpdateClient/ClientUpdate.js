import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  FormGroup,
  RowBottons,
  ContainerForm,
  Title,
  FormField,
} from "./Client.Style";

import ClientFinder from "../../services/apis/ClientFinder";
import { AuthContext } from "../../hooks/contexts/AuthContext";

import { ClientSchema } from "./Validations/Client";

const ClientUpdate = () => {
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);
  const [client, setClient] = useState(null);

  const fetchData = async () => {
    try {
      const response = await ClientFinder.byId(currentUser.client_code);

      setClient({
        ...response.data[0],
        client_date: response.data[0].client_date.split("T")[0],
        client_date_birth: response.data[0].client_date_birth.split("T")[0],
      });
    } catch (err) {
      console.log(err);
    }
  };

  const updateData = async (valores) => {
    try {
      const response = await ClientFinder.update(currentUser.user_id, valores);
      if (response.message === "ok") {
        navigate("/invoice");
      } else {
        console.log("error en la actualizacion ", response);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const initialValues = {
    client_code: "",
    client_name: "",
    client_CI: "",
    client_type: "",
    client_date_birth: "",
    client_date: "",
    client_gender: "",
    client_phone1: "",
    client_phone2: "",
    client_phone3: "",
    client_email: "",
    client_address1: "",
    client_address2: "",
    client_country: "",
    client_state: "",
    client_city: "",
    client_zipCode: "",
    client_type_rif: "",
  };

  const onSubmit = (valores, { resetForm }) => {
    valores.isUpdated = true;
    updateData(valores);
    resetForm();
    navigate("/clientes");
  };

  return (
    <ContainerForm>
      <Title>Actualizacion de Datos</Title>
      {client && (
        <Formik
          initialValues={client || initialValues}
          validationSchema={ClientSchema}
          enableReinitialize
          onSubmit={onSubmit}
        >
          {({ errors }) => (
            <Form className="form">
              <FormGroup data-group-name="Datos Basicos">
                <FormField>
                  <label className="form__label">Codigo </label>
                  <Field name="client_code" disabled />
                  <ErrorMessage
                    name="client_code"
                    component={() => (
                      <div className="error">{errors.client_code}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">CI </label>
                  <Field name="client_CI" />
                  <ErrorMessage
                    name="client_CI"
                    component={() => (
                      <div className="error">{errors.client_CI}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Nombre </label>
                  <Field name="client_name" />
                  <ErrorMessage
                    name="client_name"
                    component={() => (
                      <div className="error">{errors.client_name}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Fecha Nacimiennto</label>
                  <Field name="client_date_birth" type="date" />
                  <ErrorMessage
                    name="client_date_birth"
                    component={() => (
                      <div className="error">{errors.client_date_birth}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Fecha</label>
                  <Field name="client_date" type="date" />
                  <ErrorMessage
                    name="client_date"
                    component={() => (
                      <div className="error">{errors.client_date}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Genero</label>
                  <Field name="client_gender" />
                  <ErrorMessage
                    name="client_gender"
                    component={() => (
                      <div className="error">{errors.client_gender}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Tipo Contribuyente </label>
                  <Field name="client_type_rif" />
                  <ErrorMessage
                    name="client_type_rif"
                    component={() => (
                      <div className="error">{errors.client_type_rif}</div>
                    )}
                  />
                </FormField>
              </FormGroup>

              <FormGroup data-group-name="Datos Contacto">
                <FormField>
                  <label className="form__label">Telefono Trabajo </label>
                  <Field name="client_phone1" />
                  <ErrorMessage
                    name="client_phone1"
                    component={() => (
                      <div className="error">{errors.client_phone1}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Telefono Movil </label>
                  <Field name="client_phone2" />
                  <ErrorMessage
                    name="client_phone2"
                    component={() => (
                      <div className="error">{errors.client_phone2}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Telefono Casa </label>
                  <Field name="client_phone3" />
                  <ErrorMessage
                    name="client_phone3"
                    component={() => (
                      <div className="error">{errors.client_phone3}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Correo </label>
                  <Field name="client_email" />
                  <ErrorMessage
                    name="client_email"
                    component={() => (
                      <div className="error">{errors.client_email}</div>
                    )}
                  />
                </FormField>

                <FormField className="long-txt">
                  <label className="form__label">Direccion </label>
                  <Field name="client_address1" />
                  <ErrorMessage
                    name="client_address1"
                    component={() => (
                      <div className="error">{errors.client_address1}</div>
                    )}
                  />
                </FormField>

                <FormField className="long-txt">
                  <label className="form__label">Direccion </label>
                  <Field className="long-txt" name="client_address2" />
                  <ErrorMessage
                    name="client_address2"
                    component={() => (
                      <div className="error">{errors.client_address2}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Pais </label>
                  <Field className="long-txt" name="client_country" />
                  <ErrorMessage
                    name="client_country"
                    component={() => (
                      <div className="error">{errors.client_country}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Estado </label>
                  <Field className="long-txt" name="client_state" />
                  <ErrorMessage
                    name="client_state"
                    component={() => (
                      <div className="error">{errors.client_state}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Ciudad </label>
                  <Field name="client_city" />
                  <ErrorMessage
                    name="client_city"
                    component={() => (
                      <div className="error">{errors.client_city}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Codigo Postal </label>
                  <Field name="client_zipCode" />
                  <ErrorMessage
                    name="client_zipCode"
                    component={() => (
                      <div className="error">{errors.client_zipCode}</div>
                    )}
                  />
                </FormField>
              </FormGroup>

              <RowBottons>
                <button type="submit">Actualizar</button>
                <button type="button" onClick={() => navigate(0)}>
                  Cancelar
                </button>
              </RowBottons>
            </Form>
          )}
        </Formik>
      )}
    </ContainerForm>
  );
};

export default ClientUpdate;
