import React from "react";
import { contactData } from "../../../data/contactData";
import ContactAddress from "./ContactAddress";

import {
  ContactContainer,
  ContactContent,
  ContactTitle,
} from "./Contat.Styles";

const ContactSection = ({
  id = "contact",
  title = "Contacto",
  classes,
  bgClr = "var(--lightClr)",
}) => {
  return (
    <ContactContainer id={id} bgClr={bgClr}>
      <ContactContent>
        <ContactTitle className={classes}> {title} </ContactTitle>
        <ContactAddress data={contactData[0]} />
        <br />
        <br />
        <hr width="300px" />
        <hr width="300px" />
        <br />
        <br />
        <ContactAddress data={contactData[1]} />
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactSection;
