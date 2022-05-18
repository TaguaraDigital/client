import styles from "../../pages/travels/Travel.module.scss";
import { FaCheck, FaSquare } from "react-icons/fa";

const ExchangeRateRowSelect = ({ exchangeRate, handleSelect }) => {
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
            onClick={(e) => handleSelect(e, travel)}
          >
            {travel.selected ? <FaCheck /> : <FaSquare />}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ExchangeRateRowSelect;
