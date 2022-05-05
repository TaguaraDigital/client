import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import ClientTable from "../../components/UpdateClient/ClientTable";
import ContactSection from "../../components/layout/ContactSection";

const ClientAdmin = () => {
  return (
    <>
      <Header page="homeAdmin" />
      <ClientTable />
      <ContactSection />
      <Footer />
    </>
  );
};

export default ClientAdmin;
