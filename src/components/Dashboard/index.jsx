import {
  DashboardCard,
  DashboardContainer,
  DashboardLink,
} from "./Dashboard.Style";

import ChartInvoicesByMonth from "../ChartInvoicesByMonth";
import ChartInvoicesByMethod from "../ChartInvoicesByMethod";

import image1 from "../../assets/image/pictures/dashboard1.jpg";
import image2 from "../../assets/image/pictures/dashboard2.jpg";
import image3 from "../../assets/image/pictures/dashboard3.jpg";
import TasasCambio from "../TasasCambio";
import MainIndicators from "./MainIndicators";
import PastDue from "../invoices/PastDue";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardCard>
        <MainIndicators />
      </DashboardCard>

      <DashboardCard>
        <PastDue />
      </DashboardCard>

      <DashboardCard>
        <ChartInvoicesByMethod year={2021} />
      </DashboardCard>

      <DashboardCard>
        <ChartInvoicesByMonth year={2021} type={1} />
      </DashboardCard>

      <DashboardCard>
        <ChartInvoicesByMonth year={2021} type={2} />
      </DashboardCard>

      <DashboardCard>
        <TasasCambio />
      </DashboardCard>

      <DashboardCard>
        <DashboardLink to="/invoice">
          <img src={image1} alt="image1" />
        </DashboardLink>
      </DashboardCard>

      <DashboardCard>
        <DashboardLink to="/updatecliente">
          <img src={image2} alt="image2" />
        </DashboardLink>
      </DashboardCard>

      <DashboardCard>
        <DashboardLink to="/invoicebalance">
          <img src={image3} alt="image3" />
        </DashboardLink>
      </DashboardCard>
    </DashboardContainer>
  );
};

export default Dashboard;
