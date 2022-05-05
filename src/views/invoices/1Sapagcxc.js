import { useContext } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Sapagcxc from "../../components/invoices/Sapagcxc";
import { AuthContext } from "../../hooks/contexts/AuthContext";
import ContactSection from "../../components/layout/ContactSection";

const Invoice = () => {
  const { currentUser } = useContext(AuthContext);

  console.log("current User en Invoice All (safact)", currentUser);

  return (
    <>
      <Header page="home" />
      <h2 className="title-center">Sapagcxc of {currentUser.name}</h2>
      <Sapagcxc />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Invoice;
