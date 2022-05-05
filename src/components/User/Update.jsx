import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { countries } from "../../data/typesCont";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formatPhoneNumber } from "../../services/utils/regExp";

import {
  FormGroup,
  RowBottons,
  ContainerForm,
  Title,
  FormField,
} from "./User.Style";

import UserFinder from "../../services/apis/UsersFinder";
import locationsFinder from "../../services/apis/locationsFinder";
import { AuthContext } from "../../hooks/contexts/AuthContext";

import { ClientesSchema as schema } from "../UpdateClient/Validations/Clientes";

const ClientUpdate = () => {
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);
  const [client, setClient] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [paisInicial, setPaisInicial] = useState(currentUser.country);
  const [estadoInicial, setEstadoInicial] = useState(currentUser.state);
  const [ciudadInicial, setCiudadInicial] = useState(currentUser.city);

  const fetchStates = async (country) => {
    try {
      const response = await locationsFinder.allStates(country);
      setStates(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCities = async (country, state) => {
    try {
      const response = await locationsFinder.allCities(country, state);
      setCities(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateData = async (valores) => {
    try {
      const response = await UserFinder.update(currentUser.cod_clie, valores);
      if (response.message === "ok") {
        toast.success("Actualización Exitosa", {
          duration: 5000,
          position: "bottom-center",
        });
      } else {
        console.log(response.message);
        toast.error("Error en la actualización", {
          duration: 5000,
          position: "bottom-center",
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: client,
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (value.country !== paisInicial) {
        fetchStates(value.country);
        setPaisInicial(value.country);
        setEstadoInicial(-1);
        setCiudadInicial(-1);
      } else {
        if (value.state !== estadoInicial) {
          setEstadoInicial(value.state);
          fetchCities(value.country, value.state);
          setCiudadInicial(-1);
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, paisInicial, estadoInicial]);

  useEffect(() => {
    const fetchData = async () => {
      reset({
        country: paisInicial,
        state: estadoInicial,
        city: ciudadInicial,
      });
    };

    fetchData();
  }, [reset, paisInicial, estadoInicial, ciudadInicial]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await fetchStates(currentUser.country);
      await fetchCities(currentUser.country, currentUser.state);
      setClient(currentUser);
      setIsLoading(false);
      reset({ ...currentUser });
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (valores) => {
    valores.isUpdated = true;
    updateData(valores);
  };

  return (
    <ContainerForm>
      <Title>Actualizacion de Datos</Title>
      {isLoading && <h1> Buscando los datos del cliente .....</h1>}
      {!isLoading && client && (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <FormGroup data-group-name="Datos Básicos">
            <FormField>
              <label htmlFor="cod_clie" className="form__label">
                Código
              </label>
              <input {...register("cod_clie")} disabled />
              <p className="error">{errors?.cod_clie?.message}</p>
            </FormField>

            <FormField>
              <label htmlFor="identification" className="form__label">
                RIF / CI
              </label>
              <input {...register("identification")} />
              <p className="error">{errors?.identification?.message}</p>
            </FormField>

            <FormField className="long-txt">
              <label htmlFor="name" className="form__label">
                Nombre / Descripción
              </label>
              <input {...register("name")} />
              <p className="error">{errors.name?.message}</p>
            </FormField>

            <FormField className="long-txt">
              <label htmlFor="represent_name" className="form__label">
                Representante
              </label>
              <input {...register("represent_name")} />
              <p className="error">{errors.represent_name?.message}</p>
            </FormField>
          </FormGroup>

          <FormGroup data-group-name="Datos Contacto">
            <FormField className="long-txt">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input {...register("email")} />
              <p className="error">{errors.email?.message}</p>
            </FormField>

            <FormField>
              <label htmlFor="phone1" className="form__label">
                Teléfono 1
              </label>
              <input
                {...register("phone1")}
                placeholder="Ej. (212) 123-4567"
                onChange={(event) => {
                  const { value } = event.target;
                  event.target.value = formatPhoneNumber(value);
                }}
              />
              <p className="error">{errors.phone1?.message}</p>
            </FormField>

            <FormField>
              <label htmlFor="phone2" className="form__label">
                Teléfono 2
              </label>
              <input
                {...register("phone2")}
                placeholder="Ej. (412) 123-4567"
                onChange={(event) => {
                  const { value } = event.target;
                  event.target.value = formatPhoneNumber(value);
                }}
              />
              <p className="error">{errors.phone2?.message}</p>
            </FormField>

            <FormField>
              <label htmlFor="phone3" className="form__label">
                Teléfono 3
              </label>
              <input
                {...register("phone3")}
                placeholder="Ej. (416) 123-4567"
                onChange={(event) => {
                  const { value } = event.target;
                  event.target.value = formatPhoneNumber(value);
                }}
              />
              <p className="error">{errors.phone3?.message}</p>
            </FormField>

            <FormField className="long-txt">
              <label htmlFor="address" className="form__label">
                Dirección
              </label>
              <input {...register("address")} />
              <p className="error">{errors.address?.message}</p>
            </FormField>

            <FormField>
              <label htmlFor="county" className="form__label">
                Pais{"        "}
              </label>
              <select {...register("country")}>
                {countries.map((pais) => {
                  return (
                    <option key={pais.pais_id} value={pais.pais_id}>
                      {pais.name}
                    </option>
                  );
                })}
              </select>
              <p className="error">{errors.country?.message}</p>
            </FormField>

            <FormField>
              <label htmlFor="state" className="form__label">
                Estado
              </label>
              <select {...register("state")}>
                {states.map((estado) => {
                  return (
                    <option key={estado.estado_id} value={estado.estado_id}>
                      {estado.estado_name}
                    </option>
                  );
                })}
              </select>
              <p className="error">{errors.state?.message}</p>
            </FormField>

            <FormField>
              <label htmlFor="city" className="form__label">
                Ciudad
              </label>
              <select {...register("city")}>
                {cities.map((ciudad) => {
                  return (
                    <option key={ciudad.ciudad_id} value={ciudad.ciudad_id}>
                      {ciudad.ciudad_name}
                    </option>
                  );
                })}
              </select>
              <p className="error">{errors.city?.message}</p>
            </FormField>

            <FormField>
              <label htmlFor="municipality" className="form__label">
                Municipio
              </label>
              <input {...register("municipality")} />
              <p className="error">{errors.municipality?.message}</p>
            </FormField>

            <FormField>
              <label htmlFor="zip_code" className="form__label">
                Codigo Postal
              </label>
              <input {...register("zip_code")} />
              <p className="error">{errors.zip_code?.message}</p>
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
        </form>
      )}
    </ContainerForm>
  );
};

export default ClientUpdate;
