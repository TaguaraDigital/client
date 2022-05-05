import * as Yup from "yup";

export const ZelleSchema = Yup.object().shape({
  reference: Yup.string().required("Requerido"),
  photo: Yup.string().required("Requerido"),
  date: Yup.date().typeError("fecha invalida").required("Required"),
  amount: Yup.number().typeError("Monto invalido").required("Required"),
});
