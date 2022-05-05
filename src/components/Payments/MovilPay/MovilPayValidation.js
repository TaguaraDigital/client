import * as Yup from "yup";

export const DepositSchema = (Monto = 50) =>
  Yup.object().shape({
    // bank_from: Yup.string().required("Required"),
    // bank_to: Yup.string().required("Required"),
    reference: Yup.string()
      .min(6, "Debe tener al menos 6 digitos")
      .max(10, "Maximo 10 digitos")
      .required("Requerido"),
    // date: Yup.date().typeError("fecha invalida").required("Required"),
    // amount: Yup.number()
    //   .max(Monto, `Monto no puede ser superior ${Monto}`)
    //   .typeError("Monto invalido")
    //   .required("Required"),
  });
