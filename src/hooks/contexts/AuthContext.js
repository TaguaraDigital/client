import React, { createContext, useState } from "react";
import HomeFinder from "../../services/apis/Home";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [dates, setDates] = useState({ date1: "", date2: "" });
  const [invoices, setInvoices] = useState(null);
  const [invoicesAll, setInvoicesAll] = useState(null);
  const [client, setClient] = useState({});
  const [monto, setMonto] = useState(0);
  const [payments, setPayments] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  const checkAuthenticated = async () => {
    try {
      const data = await HomeFinder.home();

      if (data.success) {
        setCurrentUser((p) => data.data);

        setIsAuthenticated(true);
      } else {
        setCurrentUser({});
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
  };

  const value = {
    currentUser,
    setCurrentUser,
    client,
    setClient,
    invoices,
    setInvoices,
    monto,
    setMonto,
    payments,
    setPayments,
    dates,
    setDates,
    invoicesAll,
    setInvoicesAll,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthenticated,
    setAuth,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
