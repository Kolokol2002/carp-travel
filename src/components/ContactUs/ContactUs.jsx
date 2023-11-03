import React from "react";
import MainTitle from "../../common/MainTitle/MainTitle";
import Form from "../ChooseUs/Form/Form";

const ContactUs = () => {
  return (
    <section>
      <MainTitle className="mb-[36px] tablet:mb-[71px]">
        Contact <span>Us</span>
      </MainTitle>
      <div>
        <ul>
          <li>
            <span>+38 (098) 12 34 567</span>
            <span>+38 (073) 12 34 567</span>
          </li>
          <li>
            <span>support@carptravel.com</span>
          </li>
          <li>
            <span>facebook</span>
            <span>instagram</span>
            <span>youtube</span>
            <span>tiktok</span>
          </li>
        </ul>
        <ul>
          <li>Phone number</li>
          <li>E-mail</li>
          <li>Follow us</li>
        </ul>
      </div>
      <Form contact />
    </section>
  );
};

export default ContactUs;
