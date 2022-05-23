// version con formik

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { countries } from "../../data/typesCont";

import {
  FormGroup,
  RowBottons,
  ContainerForm,
  Title,
  FormField,
} from "./Client.Style";

import ClientFinder from "../../services/apis/ClientFinder";
import statesFinder from "../../services/apis/statesFinder";
import { AuthContext } from "../../hooks/contexts/AuthContext";

import { ClientesSchema } from "./Validations/Clientes";

const ClientUpdate = () => {
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);
  const [client, setClient] = useState(null);
  const [states, setStates] = useState([]);

  const fetchData = async () => {
    try {
      const response = await ClientFinder.byId(currentUser.cod_clie);

      setClient({
        ...response.data[0],
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchStates = async (country) => {
    try {
      const response = await statesFinder.byCountry(country);

      setStates(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateData = async (valores) => {
    try {
      const response = await ClientFinder.update(currentUser.cod_cli, valores);
      if (response.message === "ok") {
        toast.success("Actualización Exitosa", {
          duration: 5000,
          position: "bottom-center",
        });
        // navigate("/invoice");
      } else {
        toast.error("Error en la actualización", {
          duration: 5000,
          position: "bottom-center",
        });
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
    cod_clie: "",
    identification: "",
    name: "",
    represent_name: "",
    email: "",
    address: "",
    country: "",
    state: "",
    city: "",
    municipality: "",
    zip_code: "",
    phone1: "",
    phone2: "",
    phone3: "",
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
          validationSchema={ClientesSchema}
          enableReinitialize
          onSubmit={onSubmit}
        >
          {({ errors, values }) => (
            <Form className="form">
              <FormGroup data-group-name="Datos Básicos">
                <FormField>
                  <label className="form__label">Código </label>
                  <Field name="cod_clie" disabled />
                  <ErrorMessage
                    name="cod_clie"
                    component={() => (
                      <div className="error">{errors.cod_clie}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">RIF / CI </label>
                  <Field name="identification" />
                  <ErrorMessage
                    name="identification"
                    component={() => (
                      <div className="error">{errors.identification}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Nombre / Descripción </label>
                  <Field name="name" />
                  <ErrorMessage
                    name="name"
                    component={() => <div className="error">{errors.name}</div>}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Representante</label>
                  <Field name="represent_name" />
                  <ErrorMessage
                    name="represent_name"
                    component={() => (
                      <div className="error">{errors.represent_name}</div>
                    )}
                  />
                </FormField>
              </FormGroup>

              <FormGroup data-group-name="Datos Contacto">
                <FormField>
                  <label className="form__label">Email </label>
                  <Field name="email" />
                  <ErrorMessage
                    name="email"
                    component={() => (
                      <div className="error">{errors.email}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Teléfono 1 </label>
                  <Field name="phone1" />
                  <ErrorMessage
                    name="phone1"
                    component={() => (
                      <div className="error">{errors.phone1}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Teléfono 2 </label>
                  <Field name="phone2" />
                  <ErrorMessage
                    name="phone2"
                    component={() => (
                      <div className="error">{errors.phone2}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Teléfono 3</label>
                  <Field name="phone3" />
                  <ErrorMessage
                    name="phone3"
                    component={() => (
                      <div className="error">{errors.phone3}</div>
                    )}
                  />
                </FormField>

                <FormField className="long-txt">
                  <label className="form__label">Dirección</label>
                  <Field name="address" />
                  <ErrorMessage
                    name="address"
                    component={() => (
                      <div className="error">{errors.address}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">País </label>
                  <Field
                    name="country"
                    as="select"
                    label="Seleccione el país"
                    // onChange={fetchStates(values.country)}
                  >
                    {countries.map((pais) => {
                      return (
                        <option key={pais.pais_id} value={pais.pais_id}>
                          {pais.name}
                        </option>
                      );
                    })}
                  </Field>
                  <ErrorMessage
                    name="country"
                    component={() => (
                      <div className="error">{errors.country}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Estado </label>
                  <Field name="state" as="select">
                    {states.map((estado) => {
                      return (
                        <option key={estado.estado_id} value={estado.estado_id}>
                          {estado.estado_name}
                        </option>
                      );
                    })}
                  </Field>
                  <ErrorMessage
                    name="state"
                    component={() => (
                      <div className="error">{errors.state}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Ciudad </label>
                  <Field name="city" />
                  <ErrorMessage
                    name="city"
                    component={() => <div className="error">{errors.city}</div>}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Municipio </label>
                  <Field name="municipality" />
                  <ErrorMessage
                    name="municipality"
                    component={() => (
                      <div className="error">{errors.municipality}</div>
                    )}
                  />
                </FormField>

                <FormField>
                  <label className="form__label">Codigo Postal </label>
                  <Field name="zip_code" />
                  <ErrorMessage
                    name="zip_code"
                    component={() => (
                      <div className="error">{errors.zip_code}</div>
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
