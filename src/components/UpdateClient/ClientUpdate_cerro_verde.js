import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { typesCont } from "../../data/typesCont";

import {
  FormGroup,
  RowBottons,
  ContainerForm,
  Title,
  FormField,
} from "./Client.Style";

import ClientFinder from "../../services/apis/ClientFinder";
import { AuthContext } from "../../hooks/contexts/AuthContext";

import { ClientCVSchema } from "./Validations/ClientCV";

const ClientUpdate = () => {
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);
  const [client, setClient] = useState(null);

  const fetchData = async () => {
    try {
      const response = await ClientFinder.byId(currentUser.client_code);

      console.log("la respuesta de buscar clientes", response.data[0]);

      setClient({
        ...response.data[0],
        client_date: response.data[0].client_date.split("T")[0],
      });
    } catch (err) {
      console.log(err);
    }
  };

  const updateData = async (valores) => {
    try {
      const response = await ClientFinder.update(
        currentUser.client_code,
        valores
      );
      if (response.message === "ok") {
        toast.success("Actualización Exitosa", {
          duration: 5000,
          position: "bottom-center",
        });
        // navigate("/invoice");
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
    client_CI: "",
    client_name: "",
    client_rep: "",
    client_address: "",
    client_country: "",
    client_state: "",
    client_city: "",
    client_municipality: "",
    client_zipCode: "",
    client_phone1: "",
    client_phone2: "",
    client_phone3: "",
    client_email: "",
    client_date: "",
    client_type_rif: "",
  };

  const onSubmit = (valores, { resetForm }) => {
    valores.isUpdated = true;
    updateData(valores);
    // resetForm();
    // navigate("/clientes");
  };

  return (
    <ContainerForm>
      <Title>Actualizacion de Datos</Title>
      {client && (
        <Formik
          initialValues={client || initialValues}
          validationSchema={ClientCVSchema}
          enableReinitialize
          onSubmit={onSubmit}
        >
          {({ errors }) => (
            <Form className="form">
              <FormGroup data-group-name="Datos Básicos">
                <FormField>
                  <label className="form__label">Código </label>
                  <Field name="client_code" disabled />
                  <ErrorMessage
                    name="client_code"
                    component={() => (
                      <div className="error">{errors.client_code}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">RIF / CI </label>
                  <Field name="client_CI" />
                  <ErrorMessage
                    name="client_CI"
                    component={() => (
                      <div className="error">{errors.client_CI}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Nombre / Descripción </label>
                  <Field name="client_name" />
                  <ErrorMessage
                    name="client_name"
                    component={() => (
                      <div className="error">{errors.client_name}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Representante</label>
                  <Field name="client_rep" />
                  <ErrorMessage
                    name="client_rep"
                    component={() => (
                      <div className="error">{errors.client_rep}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Fec. Registro</label>
                  <Field name="client_date" type="date" />
                  <ErrorMessage
                    name="client_date"
                    component={() => (
                      <div className="error">{errors.client_date}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Tipo Contribuyente </label>
                  <Field
                    name="client_type_rif"
                    as="select"
                    label="Seleccione tipo Contribuyente"
                  >
                    {typesCont.map((type) => {
                      return (
                        <option key={type.codigo} value={type.codigo}>
                          {type.name}
                        </option>
                      );
                    })}
                  </Field>

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
                  <label className="form__label">Telf Trabajo </label>
                  <Field name="client_phone1" />
                  <ErrorMessage
                    name="client_phone1"
                    component={() => (
                      <div className="error">{errors.client_phone1}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Telf Movil </label>
                  <Field name="client_phone2" />
                  <ErrorMessage
                    name="client_phone2"
                    component={() => (
                      <div className="error">{errors.client_phone2}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Telf Hogar </label>
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
                  <label className="form__label">Dirección</label>
                  <Field name="client_address" />
                  <ErrorMessage
                    name="client_address"
                    component={() => (
                      <div className="error">{errors.client_address}</div>
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
                  <label className="form__label">Municipio </label>
                  <Field name="client_municipality" />
                  <ErrorMessage
                    name="client_municipality"
                    component={() => (
                      <div className="error">{errors.client_municipality}</div>
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
                <Toaster />
                <button
                  type="button"
                  onClick={() => {
                    toast.error("Actualización Cancelada", {
                      duration: 5000,
                      position: "bottom-center",
                    });

                    navigate("/invoice");
                  }}
                >
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
