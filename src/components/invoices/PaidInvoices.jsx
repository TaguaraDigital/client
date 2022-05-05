import { useEffect, useContext } from "react";
import { AuthContext } from "../../hooks/contexts/AuthContext";
import InvoicesFinder from "../../services/apis/InvoicesFinder";
import { FormatDecimal, FormatDate } from "../../services/utils/formats";

const PaidInvoices = ({ date1, date2 }) => {
  const { invoices, setInvoices, dates } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async (date1, date2) => {
      try {
        const response = await InvoicesFinder.paidBetween(date1, date2);
        setInvoices(response.data.invoices);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData(dates.date1, dates.date2);
  }, [setInvoices, dates]);

  return (
    <div className="list-group">
      <table className="smart-table">
        <caption>Recibos Cobrados</caption>
        <thead>
          <tr>
            <th> Numero </th>
            <th> Factura </th>
            <th> Fecha </th>
            <th> Descripcion </th>
            <th> Monto USD </th>
            <th> Monto Bs. </th>
            <th> Fecha Pago </th>
            <th> Referencia </th>
          </tr>
        </thead>
        <tbody>
          {invoices &&
            invoices.length > 0 &&
            invoices.map((invoice, i) => {
              return (
                <tr
                  // onClick={() => handleInvoicetSelect(invoice.invoice_id)}
                  key={invoice.invoice_id}
                >
                  <td data-col-title="Numero"> {i + 1} </td>
                  <td data-col-title="Factura"> {invoice.invoice_id} </td>
                  <td data-col-title="Fecha">{FormatDate(invoice.due_date)}</td>
                  <td data-col-title="Descripcion">
                    {invoice.invoice_description}
                  </td>
                  <td data-col-title="Monto USD">
                    {FormatDecimal(invoice.invoice_amount)}
                  </td>
                  <td data-col-title="Monto Bs.">
                    {FormatDecimal(invoice.invoice_amount * 4.4)}
                  </td>
                  <td data-col-title="Fecha Pago">
                    {FormatDate(invoice.payment_date)}
                  </td>
                  <td data-col-title="Reference">
                    {invoice.payment_reference}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default PaidInvoices;
