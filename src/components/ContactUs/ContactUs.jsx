import React from "react";
import MainTitle from "../../common/MainTitle/MainTitle";
import Form from "../ChooseUs/Form/Form";
import {
  ContactContainer,
  ContactInfo,
  ContactListInfo,
  ContactListInfoItem,
} from "./ContactUs.styled";

const ContactUs = () => {
  return (
    <section>
      <MainTitle className="mb-[36px] desktop:mb-[71px]">
        Contact <span>Us</span>
      </MainTitle>
      <ContactContainer>
        <ContactInfo>
          <ContactListInfo>
            <ContactListInfoItem>
              <span>Phone number</span>
              <div>
                <span>+38 (098) 12 34 567</span>
                <span>+38 (073) 12 34 567</span>
              </div>
            </ContactListInfoItem>
            <ContactListInfoItem>
              <span>E-mail</span>
              <div>
                <span>support@carptravel.com</span>
              </div>
            </ContactListInfoItem>
            <ContactListInfoItem>
              <span>Follow us</span>
              <div>
                <span>facebook</span>
                <span>instagram</span>
                <span>youtube</span>
                <span>tiktok</span>
              </div>
            </ContactListInfoItem>
          </ContactListInfo>
        </ContactInfo>
        <Form contact />
      </ContactContainer>
    </section>
  );
};

export default ContactUs;
