import { useContext } from "react";

import { AuthContext } from "../../hooks/contexts/AuthContext";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import DepositPayment from "../../components/Payments/DepositPayment/DepositModal";
import ZellePayment from "../../components/Payments/ZellePayments";

const Payments = () => {
  const { invoices, payments } = useContext(AuthContext);

  const invoicesToPay = invoices.filter(
    (invoice) => invoice.invoice_status === 1
  );

  return (
    <>
      <Header page="home" />
      <div className="pago-container">
        {payments.paymentMethod === "transfer" ? (
          <>
            <DepositPayment
              invoicesToPay={invoicesToPay}
              amount={payments.payment_amount_Bs}
            />
          </>
        ) : payments.paymentMethod === "zelle" ? (
          <>
            <ZellePayment
              invoicesToPay={invoicesToPay}
              amount={payments.payment_amount_USD}
            />
          </>
        ) : (
          <></>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Payments;
