import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";

import InvoicesFinder from "../../../services/apis/invoicesFinder";
import {
  FormField,
  ImgSelected,
  InputFile,
  RowBottons,
  Title,
  ZelleSection,
} from "./ZellePaymen.Style";
import { ZelleSchema as schema } from "./ZelleValidation";
import { Form } from "../../../views/Access/Access.Styles";

const ZellePayment = ({ invoicesToPay, amount }) => {
  const navigate = useNavigate();
  const [isActButton, setIsActButton] = useState(true);
  const [previewSource, setPreviewSource] = useState(null);
  const initialValues = {
    reference: "",
    date: "",
    amount,
    photo: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const RegisterZelle = async (reference, invoicesToPay, amount) => {
    try {
      // const response = await InvoicesFinder.zelle(
      const response = await InvoicesFinder.transfer(
        invoicesToPay,
        reference,
        "zelle"
      );

      if (response.success) {
        toast.success("Pago registrado exitosamente", {
          duration: 5000,
          position: "bottom-center",
        });
        setIsActButton(false);
      } else {
        alert("Error");
        // console.log('error', response.message)
      }
    } catch (err) {}
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const onSubmit = (values, { resetForm }) => {
    previewFile(values.photo);

    RegisterZelle(values, invoicesToPay, amount);

    document.getElementById("photo").value = null;
    setPreviewSource();
    resetForm();
  };

  return (
    <ZelleSection>
      <>
        <Title> Introduzca los datos del Zelle</Title>
        <Form className="form" onSubmit={handleSubmit(onSubmit)}>
          <FormField>
            <label className="form__label">Referencia </label>
            <input
              {...register("reference")}
              placeholder="Referencia del Zelle"
            />
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

          {/* <FormField>
            <label className="form__label" htmlFor="photo">
              Subir Capture
            </label>
            <InputFile
              name="photo"
              type="file"
              id="photo"
              placeholder="Subir Capture"
              onChange={(e) => {
                setFieldValue("photo", e.target.files[0]);
                previewFile(e.target.files[0]);
              }}
            />
            <ErrorMessage
              name="photo"
              component={() => <div className="error">{errors.photo}</div>}
            />
          </FormField> */}

          <RowBottons>
            {isActButton && <button type="submit"> Enviar</button>}
            <Toaster />
            {/* <button type="button" onClick={() => navigate("/invoice/")}>
              Regresar
            </button> */}
          </RowBottons>
        </Form>

        {isActButton && previewSource && (
          <ImgSelected src={previewSource} alt="" srcset="" />
        )}
      </>
    </ZelleSection>
  );
};

export default ZellePayment;
