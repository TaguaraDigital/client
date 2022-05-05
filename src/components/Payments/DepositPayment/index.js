import { useState } from "react";
import { useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bankData, bankData2 } from "../../../data/bankData";

import InvoicesFinder from "../../../services/apis/invoicesFinder";
import {
  DepositSection,
  FormField,
  RowBottons,
  Title,
} from "./DepositPayment.Style";

import { DepositSchema as schema } from "./DepositValidation";
import { Form } from "../../../views/Access/Access.Styles";

const DepositPayment = ({ invoicesToPay, amount }) => {
  const navigate = useNavigate();
  const [isActButton, setIsActButton] = useState(true);

  const intialValues = {
    bank_from: "",
    bank_to: "",
    date: "",
    reference: "",
    amount: amount,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: intialValues,
    resolver: yupResolver(schema),
  });
  const RegisterTransfer = async (reference, invoicesToPay) => {
    setIsActButton(false);
    try {
      const response = await InvoicesFinder.transfer(
        invoicesToPay,
        reference,
        "transfer"
      );

      if (response.success) {
        toast.success("Pago registrado exitosamente", {
          duration: 5000,
          position: "bottom-center",
        });
        setIsActButton(false);
        navigate("/");
      } else {
        alert("error" + response.message);
        console.log("error", response.message);
      }
    } catch (err) {}
  };

  const onSubmit = (valores) => {
    setIsActButton(false);
    console.log("datos validos");
    RegisterTransfer(valores, invoicesToPay, amount);
  };

  return (
    <DepositSection>
      <>
        <Title> Introduzca los datos del deposito o transferencia</Title>
        <Form className="form" onSubmit={handleSubmit(onSubmit)}>
          <FormField>
            <label className="form__label">Banco Origen :</label>
            <select {...register("bank_from")}>
              {bankData.map((bank) => {
                return (
                  <option key={bank.codigo} value={bank.codigo}>
                    {bank.nombre}
                  </option>
                );
              })}
            </select>
            <p className="error">{errors.bank_from?.message}</p>
          </FormField>

          <FormField>
            <label className="form__label">Banco Destino :</label>
            <select {...register("bank_to")}>
              {bankData2.map((bank) => {
                return (
                  <option key={bank.codigo} value={bank.codigo}>
                    {bank.nombre}
                  </option>
                );
              })}
            </select>
            <p className="error">{errors.bank_to?.message}</p>
          </FormField>

          <FormField>
            <label className="form__label">Referencia </label>
            <input {...register("reference")} />
            <p className="error">{errors.reference?.message}</p>
          </FormField>

          <FormField>
            <label className="form__label">Fecha </label>
            <input type="date" {...register("date")} />
            <p className="error">{errors.date?.message}</p>
          </FormField>

          <FormField>
            <label className="form__label">Monto </label>
            <input {...register("amount")} />
            <p className="error">{errors.amount?.message}</p>
          </FormField>

          <RowBottons>
            <button type="submit" disabled={isActButton}>
              Enviar
            </button>
            <Toaster />
            <button type="button" onClick={() => navigate("/invoice/")}>
              Regresar
            </button>
          </RowBottons>
        </Form>
      </>
    </DepositSection>
  );
};

export default DepositPayment;
