import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import ContactSection from "../../components/layout/ContactSection";
import PaidInvoices from "../../components/invoices/PaidInvoices";
import SearchDate from "../../components/invoices/SearchDate";
const InvoicesBetweenDates = () => {
  return (
    <>
      <Header page="homeAdmin" />
      <SearchDate />
      <PaidInvoices />
      <ContactSection />
      <Footer />
    </>
  );
};

export default InvoicesBetweenDates;
