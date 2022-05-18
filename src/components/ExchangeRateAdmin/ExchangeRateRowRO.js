import styles from "../../views/exchange_rate/ExchangeRate.module.scss";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import moment from "moment";

const ExchangeRateRowRO = ({ exchangeRate, handleUpdate, handleDelete }) => {
  return (
    <tr className={styles.tableRow}>
      <td className={styles.tableCell} data-col-title="Id">
        {exchangeRate._id}
      </td>
      <td className={styles.tableCell} data-col-title="Fecha">
        {moment(exchangeRate.date).format("MMM DD, YYYY")}
      </td>

      <td className={styles.tableCell} data-col-title="Tasa">
        {exchangeRate.rate}
      </td>
      <td
        className={`${styles.tableCell} ${styles.tableAccion} `}
        data-col-title="Accion"
      >
        <div className={styles.tableAccionButtons} data-col-title="Accion">
          <button
            className={styles.tableAccion__update}
            type="button"
            onClick={(e) => handleUpdate(e, exchangeRate)}
          >
            <FaPencilAlt />
          </button>
          <button
            className={styles.tableAccion__delete}
            type="button"
            onClick={() => handleDelete(exchangeRate.id)}
          >
            <FaTrash />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ExchangeRateRowRO;
