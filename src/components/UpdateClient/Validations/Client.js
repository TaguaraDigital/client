import * as Yup from "yup";

const regExp = {
  user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, // 4 a 12 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^[2-9]{2}[0-9]{8}/, // 7 a 14 numeros.
  VesIdent: /^[V|E|J|P][0-9]{3,9}$/, // Identificacion Venezolana CI
  VesBankAccount: /^(\d{5})(\d{15})$/, // Codigo de cuenta venezolano
};

export const ClientSchema = Yup.object().shape({
  client_name: Yup.string()
    .min(3, "Debe tener mas de 3 letras")
    .max(50, "Muy largo, maximo 50 caracteres")
    .matches(regExp.name, "Nombre invalido")
    .required("Obligatorio"),
  client_CI: Yup.string()
    .matches(regExp.VesIdent, "Identificacion invalida")
    .required("Required"),
  client_phone1: Yup.string().required("Requerido"),
  client_phone2: Yup.string().required("Requerido"),
  client_phone3: Yup.string().required("Requerido"),
  client_date_birth: Yup.date()
    .typeError("Fecha Invalida")
    .required("Required"),
  client_date: Yup.date().typeError("Fecha Invalida"),
  client_email: Yup.string().email("Invalid email").required("Required"),
});
