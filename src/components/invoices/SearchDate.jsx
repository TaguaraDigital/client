import { useContext } from "react";
import { AuthContext } from "../../hooks/contexts/AuthContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  FormField,
  ZelleSection,
} from "../Payments/ZellePayments/ZellePaymen.Style";

const DateSchema = Yup.object().shape({
  date1: Yup.date().typeError("fecha invalida").required("Required"),
  date2: Yup.date().typeError("fecha invalida").required("Required"),
});

const ZellePayment = ({ invoicesToPay, amount }) => {
  const { setDates } = useContext(AuthContext);

  const onSubmit = (values, { resetForm }) => {
    setDates({ date1: values.date1, date2: values.date2 });
  };

  return (
    <ZelleSection>
      <Formik
        initialValues={{
          date1: "",
          date2: "",
        }}
        validationSchema={DateSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors }) => (
          <>
            <Form
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <FormField>
                <label className="form__label">Fecha Inicio </label>
                <Field name="date1" type="date" />
                <ErrorMessage
                  name="date1"
                  component={() => <div className="error">{errors.date1}</div>}
                />
              </FormField>
              <FormField>
                <label className="form__label">Fecha Final </label>
                <Field name="date2" type="date" />
                <ErrorMessage
                  name="date2"
                  component={() => <div className="error">{errors.date2}</div>}
                />
              </FormField>

              <button
                style={{
                  margin: 0,
                }}
                type="submit"
              >
                {" "}
                Buscar
              </button>
            </Form>
          </>
        )}
      </Formik>
    </ZelleSection>
  );
};

export default ZellePayment;
