// import { useContext } from "react";
import Header from "../../components/layout/Header";
import ContactSection from "../../components/layout/ContactSection";
import Footer from "../../components/layout/Footer";
// import { AuthContext } from "../../hooks/contexts/AuthContext";
import InvoicePaymentConfirm from "../../components/invoices/InvoicesPaymentConfirm";

const Invoice = () => {
  // const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Header page="homeAdmin" />
      <InvoicePaymentConfirm />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Invoice;
