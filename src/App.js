import { GlobalStyle } from "./globalStyles";
import { useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthContext } from "./hooks/contexts/AuthContext";

// General Views (No Authenticated users)
import Landing from "./views/Landing";
import Login from "./views/Access/Login";

// User Views (Authenticated users with role = "VI")
import User from "./views/users/index";
import InvoicePending from "./views/users/InvoicesPending";
import Balance from "./views/invoices/Balance";

// Clients Views (Authenticated users with role = "AD")
import Dashboard from "./views/Clients/Dashboard";
import Register from "./views/Access/Register";
import CreateUser from "./views/Clients/CreateUsers";
import InvoiceAdmin from "./views/invoices/InvoiceAdmin";
import ExchangeRateAdmin from "./views/exchange_rate";
import InvoicePaymentsConfirm from "./views/invoices/InvoicePaymentsConfirm";

const App = () => {
  const { isAuthenticated, checkAuthenticated, currentUser } =
    useContext(AuthContext);

  useEffect(() => {
    checkAuthenticated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            !isAuthenticated ? (
              <Landing />
            ) : currentUser.user_role === "AD" ? (
              <Dashboard />
            ) : (
              <User />
            )
          }
        />

        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <Login />
            ) : currentUser.user_role === "AD" ? (
              <Dashboard />
            ) : (
              <User />
            )
          }
        />

        <Route
          path="/user"
          element={
            !isAuthenticated ? (
              <Landing />
            ) : currentUser.user_role === "AD" ? (
              <CreateUser />
            ) : (
              <User />
            )
          }
        />

        <Route
          path="/invoice"
          element={
            !isAuthenticated ? (
              <Landing />
            ) : currentUser.user_role === "AD" ? (
              <Dashboard />
            ) : (
              <InvoicePending />
            )
          }
        />

        <Route
          path="/paymentToConfirm"
          element={
            !isAuthenticated ? (
              <Landing />
            ) : currentUser.user_role === "AD" ? (
              <InvoiceAdmin />
            ) : (
              <InvoicePending />
            )
          }
        />

        <Route
          path="/exchange"
          element={
            !isAuthenticated ? (
              <Landing />
            ) : currentUser.user_role === "AD" ? (
              <ExchangeRateAdmin />
            ) : (
              <InvoicePending />
            )
          }
        />

        <Route
          path="/statements"
          element={
            !isAuthenticated ? (
              <Landing />
            ) : currentUser.user_role === "AD" ? (
              <Dashboard />
            ) : (
              <Balance />
            )
          }
        />

        <Route
          path="/dashboard"
          element={
            !isAuthenticated ? (
              <Landing />
            ) : currentUser.user_role === "AD" ? (
              <Dashboard />
            ) : (
              <User />
            )
          }
        />

        <Route
          path="/paymentconfirm"
          element={
            !isAuthenticated ? (
              <Landing />
            ) : currentUser.user_role === "AD" ? (
              <InvoicePaymentsConfirm />
            ) : (
              <User />
            )
          }
        />

        <Route
          path="/register"
          element={
            !isAuthenticated ? (
              <Landing />
            ) : currentUser.user_role === "AD" ? (
              <CreateUser />
            ) : (
              <User />
            )
          }
        />
        <Route path="/createuser" element={<CreateUser />} />

        <Route path="/*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
