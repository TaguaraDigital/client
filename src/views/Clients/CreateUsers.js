import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import CreateUser from "../../components/User/CreateUser";
import ContactSection from "../../components/layout/ContactSection";

const CreateUsers = () => {
  return (
    <>
      <Header page={"homeAdmin"} />
      <CreateUser />
      <ContactSection />
      <Footer />
    </>
  );
};

export default CreateUsers;
