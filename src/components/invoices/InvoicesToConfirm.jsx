import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../hooks/contexts/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import InvoicesFinder from "../../services/apis/invoicesFinder";
import { FormatDecimal, FormatDate } from "../../services/utils/formats";
import { ConfirmButtonContainer, PayButton } from "./InvoicesPayMethod.Styles";

const InvoiceToConfirm = () => {
  const { checkAuthenticated, invoices, setInvoices } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(true);
  const [totalInvoiceToConfirm, setTotalInvoiceToConfirm] = useState(0);

  useEffect(() => {
    checkAuthenticated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await InvoicesFinder.toConfirm();
        setInvoices(response.data.invoices);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [setInvoices]);

  const ConfirmInvoices = async (invoices) => {
    try {
      const response = await InvoicesFinder.confirm(invoices);

      if (response.success) {
        toast.success("Pago confirmado exitosamente", {
          duration: 5000,
          position: "top-center",
        });
      } else {
        // alert("Error");
        console.log("error", response.message);
      }
    } catch (err) {}
  };

  const handlerConfirm = (e) => {
    e.preventDefault();

    ConfirmInvoices(invoices.filter((invoice) => invoice.status === 3));

    setInvoices(invoices.filter((invoice) => invoice.status !== 3));
    setTotalInvoiceToConfirm(0);
  };

  const handleCheckBox = (e, id) => {
    console.log(e.target.checked, " id ", id, invoices);

    setTotalInvoiceToConfirm(0);
    invoices.map((invoice) => {
      if (id === invoice._id) {
        invoice.status = e.target.checked ? 3 : 0;
      }
      if (invoice.status === 3) {
        setTotalInvoiceToConfirm((pre) => pre + 1);
      }
      return totalInvoiceToConfirm;
    });
  };

  return (
    <div className="list-group">
      <Toaster />
      {isLoading && <h1> Buscando Pagos por confirmar .....</h1>}
      {!isLoading && (
        <table className="smart-table">
          <caption>Pagos por Confirmar</caption>
          <thead>
            <tr>
              <th> Numero </th>
              <th> Cliente </th>
              <th> Descripción </th>
              <th> Monto Bs. </th>
              <th> Taq. Vir Bs. </th>
              <th> Total Bs. </th>
              <th> Monto USD </th>
              <th> Taq. Vir USD </th>
              <th> Total USD </th>
              <th> Fecha Pago </th>
              <th> Fecha Registro </th>
              <th> Metodo </th>
              <th> Confirmar </th>
            </tr>
          </thead>
          <tbody>
            {invoices &&
              invoices.length > 0 &&
              invoices.map((invoice, i) => {
                return (
                  <tr key={invoice._id}>
                    <td data-col-title="Numero"> {i + 1} </td>
                    <td data-col-title="Cliente"> {invoice.CodClie} </td>
                    <td data-col-title="Descripción">
                      {" "}
                      {invoice.description}{" "}
                    </td>
                    <td data-col-title="Monto Bs.">
                      {FormatDecimal(invoice.MontoBs)}
                    </td>
                    <td data-col-title="Taq. Vit. Bs.">
                      {FormatDecimal(invoice.MtoTaqVirBs)}
                    </td>
                    <td data-col-title="Total Bs.">
                      {FormatDecimal(invoice.MtoTotalBs)}
                    </td>
                    <td data-col-title="Monto USD">
                      {FormatDecimal(invoice.MontoUSD)}
                    </td>
                    <td data-col-title="Taq. Vit. USD">
                      {FormatDecimal(invoice.MtoTaqVirUSD)}
                    </td>
                    <td data-col-title="Total USD">
                      {FormatDecimal(invoice.MtoTotalUSD)}
                    </td>
                    <td data-col-title="Fecha Pago">
                      {FormatDate(invoice.payment_date)}
                    </td>
                    <td data-col-title="Fecha Registro">
                      {FormatDate(invoice.register_date)}
                    </td>
                    <td data-col-title="Metodo">{invoice.payment_method}</td>
                    <td data-col-title="Confirmar">
                      <input
                        type="checkbox"
                        checked={invoice.status === 3}
                        name={"check" + invoice._id}
                        id={"check" + invoice._id}
                        onChange={(e) => handleCheckBox(e, invoice._id)}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
      {totalInvoiceToConfirm > 0 && (
        <ConfirmButtonContainer>
          <PayButton
            bgClr="var(--saintGreen)"
            type="submit"
            onClick={(e) => {
              handlerConfirm(e);
            }}
          >
            Confirmar
          </PayButton>
        </ConfirmButtonContainer>
      )}
    </div>
  );
};

export default InvoiceToConfirm;
