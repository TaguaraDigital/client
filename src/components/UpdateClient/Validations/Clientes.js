import * as Yup from "yup";
import { regExp } from "../../../services/utils/regExp";

export const ClientesSchema = Yup.object().shape({
  identification: Yup.string()
    .matches(regExp.VesIdent, "Identificación invalida")
    .required("Requerido"),
  name: Yup.string()
    .min(3, "Debe tener más de 3 letras")
    .max(50, "Muy largo, máximo 50 caracteres")
    .required("Obligatorio"),
  represent_name: Yup.string().max(50, "Muy largo, máximo 50 caracteres"),
  address: Yup.string()
    .min(3, "Debe tener más de 3 letras")
    .required("Obligatorio"),
  zip_code: Yup.string().required("Requerido"),
  phone1: Yup.string()
    .min(10, "Debe tener 10 digitos")
    .matches(regExp.phone1, "Teléfono invalido")
    .required("Requerido"),
  phone2: Yup.string()
    .min(10, "Debe tener 10 digitos")
    .matches(regExp.phone2, "Teléfono invalido")
    .required("Requerido"),
  phone3: Yup.string()
    .min(10, "Debe tener 10 digitos")
    .matches(regExp.phone3, "Teléfono invalido")
    .required("Requerido"),
  email: Yup.string()
    .email("Email invalido")
    .typeError("Email invalido")
    .required("Requerido"),
});
