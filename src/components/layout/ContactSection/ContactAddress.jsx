import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import {
  ContactAddressContainer,
  ContactInfo,
  ContactMap,
} from "./Contat.Styles";
import logo from "../../../assets/image/logos/emall.png";
import GoogleMaps from "../../GoogleMap/GoogleMaps";

const ContactAddress = ({ data }) => {
  return (
    <ContactAddressContainer>
      <ContactInfo>
        <div className="flex__container">
          <img src={logo} alt="Emall Logo" className="logo" />
          <img src={data.flag} alt={`${data.country} flag`} className="flag" />
        </div>
        <h2>{data.title}</h2>
        <p>
          <b> {data.subtitle}</b>
          <br />
          <b> Representante :</b> {data.representative}
          <br />
          <b>Dirección :</b> {data.address}
          <br />
          <b>
            <FaPhone />
          </b>{" "}
          {data.phone}
          <br />
          <b>
            <FaEnvelope />
          </b>{" "}
          {data.email}
          <br />
        </p>
        {data.whaptsapp ? (
          <p>
            <b>
              <FaWhatsapp /> :
            </b>
            {data.whaptsapp}
          </p>
        ) : (
          ""
        )}
      </ContactInfo>

      <ContactMap>
        <GoogleMaps location={data.location} />
      </ContactMap>
    </ContactAddressContainer>
  );
};

export default ContactAddress;
