import { useContext } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import BalanceStatement from "../../components/invoices/BalanceStatement";
import { AuthContext } from "../../hooks/contexts/AuthContext";
import ContactSection from "../../components/layout/ContactSection";

const Invoice = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Header page="home" />
      <h1 className="title-center">Estado de Cuenta: {currentUser.name}</h1>
      <BalanceStatement />
      <ContactSection />

      <Footer />
    </>
  );
};

export default Invoice;
