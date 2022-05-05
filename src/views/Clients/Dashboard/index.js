import { useContext, useEffect } from "react";
import Header from "../../../components/layout/Header";
import { AuthContext } from "../../../hooks/contexts/AuthContext";

import DashboardSection from "../../../components/Dashboard";
import ContactSection from "../../../components/layout/ContactSection";
import Footer from "../../../components/layout/Footer";
const Dashboard = () => {
  const { checkAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    checkAuthenticated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header page={"homeAdmin"} />
      <DashboardSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Dashboard;
