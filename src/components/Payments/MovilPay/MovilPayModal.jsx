import { useState } from "react";
import { useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import { bankData } from "../../../data/bankData";

import InvoicesFinder from "../../../services/apis/invoicesFinder";
import {
  MovilPayModal,
  Form,
  FormField,
  RowBottons,
  Title,
} from "./MovilPay.Style";

// import { DepositSchema as schema } from "./DepositValidation";

const DepositPayment = ({ invoicesToPay, amount, show }) => {
  const navigate = useNavigate();

  const [isActButton, setIsActButton] = useState(true);

  const intialValues = {
    payerId: "",
    phoneNumber: "",
    bank_from: "",
    reference: "",
    date: "",
    amount: amount,
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: intialValues,
    mode: "onBlur",
  });

  const RegisterPagoMovil = async (valores, invoicesToPay) => {
    try {
      const response = await InvoicesFinder.pagoMovil(
        invoicesToPay,
        valores.payerId,
        valores.phoneNumber,
        valores.bank_from,
        valores.reference,
        valores.date,
        valores.amount,
        "pago-movil"
      );

      if (response.success) {
        toast.success("Pago registrado exitosamente", {
          duration: 5000,
          position: "bottom-center",
        });
        setIsActButton(false);
      } else {
        alert("error" + response.message);
        console.log("error", response.message);
      }
    } catch (err) {}
  };

  const onSubmit = (valores) => {
    setIsActButton(false);
    RegisterPagoMovil(valores, invoicesToPay);
  };

  return (
    <MovilPayModal>
      <Form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Title> Introduzca los datos del pago Movil</Title>
        <FormField>
          <label className="form__label">
            <span>Cedula / RIF:</span>
            <input
              {...register("payerId")}
              placeholder="Indique la identificacion del pagador"
            />
          </label>

          <p className="error">{errors.payerId?.message}</p>
        </FormField>

        <FormField>
          <label className="form__label">
            <span>Nro. Telefonico:</span>
            <input
              {...register("phoneNumber")}
              placeholder="Nro. Telefono del pagador"
            />
          </label>

          <p className="error">{errors.phoneNumber?.message}</p>
        </FormField>

        <FormField>
          <label className="form__label">
            <span>Banco Cliente :</span>
            <select {...register("bank_from")}>
              {bankData.map((bank) => {
                return (
                  <option key={bank.codigo} value={bank.codigo}>
                    {bank.nombre}
                  </option>
                );
              })}
            </select>
          </label>
          <p className="error">{errors.bank_from?.message}</p>
        </FormField>

        <FormField>
          <label className="form__label">
            <span>Referencia:</span>
            <input
              {...register("reference", {
                required: {
                  value: true,
                  message:
                    "Debe indicar el numero o referencia de la transferencia o deposito",
                },
                minLength: {
                  value: 6,
                  message: "debe indicar al menos los ultimos 6 digitos",
                },
                maxLength: {
                  value: 10,
                  message: "Maximo 10 digitos",
                },
              })}
            />
          </label>
          <p className="error">{errors.reference?.message}</p>
        </FormField>

        <FormField>
          <label className="form__label">
            <span>Fecha:</span>
            <input
              type="date"
              {...register("date", {
                required: {
                  value: true,
                  message: "Debe indicar la fecha la transferencia",
                },
              })}
            />
          </label>
          <p className="error">{errors.date?.message}</p>
        </FormField>

        <FormField>
          <label className="form__label">
            <span>Monto:</span>
            <input
              {...register("amount", {
                required: {
                  value: true,
                  message: "Debe indicar el monto de la transferencia",
                },
                min: {
                  value: 1,
                  message: `el monto debe ser mayor a 1`,
                },
                max: {
                  value: amount,
                  message: `el monto maximo no puede mayor a ${amount}`,
                },
              })}
            />
          </label>
          <p className="error">{errors.amount?.message}</p>
        </FormField>

        <RowBottons>
          {isValid && isActButton && <button type="submit">Enviar</button>}
          <Toaster />
          <button type="button" onClick={() => show(false)}>
            Regresar
          </button>
        </RowBottons>
      </Form>
    </MovilPayModal>
  );
};

export default DepositPayment;
