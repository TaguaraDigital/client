import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Users from "../../components/User/Update";
import ContactSection from "../../components/layout/ContactSection";

const ClientUpdate = () => {
  return (
    <>
      <Header page="home" />
      <Users />
      <ContactSection />
      <Footer />
    </>
  );
};

export default ClientUpdate;
