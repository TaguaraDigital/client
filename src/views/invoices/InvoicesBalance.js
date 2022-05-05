import { useContext } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
// import InvoicesAll from "../../components/invoices/InvoicesAll";
import InvoicesAll from "../../components/invoices/safactAll";
import { AuthContext } from "../../hooks/contexts/AuthContext";
import ContactSection from "../../components/layout/ContactSection";

const Invoice = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Header page="home" />
      <h2 className="title-center">Estado DE Cuenta {currentUser.name}</h2>
      <InvoicesAll />
      <ContactSection />

      <Footer />
    </>
  );
};

export default Invoice;
