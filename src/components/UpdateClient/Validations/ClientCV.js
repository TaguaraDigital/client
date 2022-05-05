import * as Yup from "yup";
import { regExp } from "../../../services/utils/regExp";

export const ClientCVSchema = Yup.object().shape({
  client_CI: Yup.string()
    .matches(regExp.VesIdent, "Identificación invalida")
    .required("Requerido"),
  client_name: Yup.string()
    .min(3, "Debe tener más de 3 letras")
    .max(50, "Muy largo, máximo 50 caracteres")
    .matches(regExp.name, "Nombre invalido")
    .required("Obligatorio"),
  client_address: Yup.string()
    .min(3, "Debe tener más de 3 letras")
    .required("Obligatorio"),
  client_country: Yup.string().required("Obligatorio"),
  client_state: Yup.string().required("Obligatorio"),
  client_city: Yup.string().required("Obligatorio"),
  client_municipality: Yup.string().required("Obligatorio"),
  client_zipCode: Yup.string().required("Obligatorio"),
  client_rep: Yup.string()
    .min(3, "Debe tener más de 3 letras")
    .max(50, "Muy largo, máximo 50 caracteres")
    .matches(regExp.name, "Invalido")
    .required("Obligatorio"),
  client_phone1: Yup.string()
    .matches(regExp.phone, "ej. (0212)1234567")
    .typeError("Teléfono invalido")
    .required("Requerido"),
  client_phone2: Yup.string()
    .matches(regExp.phone, "ej. (0212)1234567")
    .typeError("Teléfono invalido")
    .required("Requerido"),
  client_phone3: Yup.string()
    .matches(regExp.phone, "ej. (0212)1234567")
    .typeError("Teléfono invalido")
    .required("Requerido"),
  client_date: Yup.date().typeError("Fecha Invalida").required("Obligatoria"),
  client_email: Yup.string()
    .email("Email invalido")
    .typeError("Email invalido")
    .required("Requerido"),
});
