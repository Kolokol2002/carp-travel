import React from "react";
// import env from "react-dotenv";
import {
  ButtonForm,
  CustomCheckBox,
  ErrorMessageText,
  FormStyled,
  InputCheckboxStyled,
  InputStyled,
  LabelCheckboxStyled,
  LabelCheckboxText,
  LabelStyled,
  LabelText,
  SubTitle,
  TextAreaStyled,
} from "./Form.styled";
import { object, string } from "yup";
import { useFormik } from "formik";
import axios from "axios";

const ChoseUsSchema = object().shape({
  name: string()
    .min(2, "This name must contain at least 2 characters")
    .max(50, "This name must contain a maximum of 50 characters")
    .required("Incorrect name"),
  email: string().email("Invalid email").required("Invalid email"),
  position: string(),
  phone: string().required("Incorrect phone"),
  message: string().required("Incorrect message"),
});
const ContactSchema = object().shape({
  name: string()
    .min(2, "This name must contain at least 2 characters")
    .max(50, "This name must contain a maximum of 50 characters")
    .required("Incorrect name"),
  email: string().email("Invalid email").required("Invalid email"),
  message: string().required("Incorrect message"),
});

const URL_API_TG = `https://api.telegram.org/bot${process.env.REACT_APP_TOKEN_BOT}/sendMessage`;

const initialValues = {
  name: "",
  email: "",
  position: "",
  phone: "",
  message: "",
};

const initialValuesContacts = {
  name: "",
  email: "",
  message: "",
};

const Form = ({ contact }) => {
  const {
    values,
    errors,
    touched,
    resetForm,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: contact ? initialValuesContacts : initialValues,
    validationSchema: contact ? ContactSchema : ChoseUsSchema,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  async function onSubmit(data) {
    console.log(process.env);
    const text = Object.keys(data).reduce(
      (acc, key) => {
        const res = `${key} - ${data[key]}\n`;
        acc += res;
        return acc;
      },
      `${contact ? "ContactUs:\n" : "ChouseUs:\n"}`,
    );
    await axios.post(URL_API_TG, {
      chat_id: process.env.REACT_APP_CHAT_ID,
      parse_mode: "html",
      text,
    });
    resetForm();
  }

  return (
    <div>
      {!contact && (
        <SubTitle>
          Don't miss your opportunity! Fill out the form right now and join our
          team!
        </SubTitle>
      )}
      <FormStyled contact={contact} onSubmit={handleSubmit}>
        <LabelStyled>
          <LabelText>Full name</LabelText>
          <InputStyled
            type="text"
            placeholder="John Smith"
            name="name"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
            errors={errors.name}
            touched={touched.name}
          />
          {touched.name && errors.name && (
            <ErrorMessageText>{errors.name}</ErrorMessageText>
          )}
        </LabelStyled>
        <LabelStyled>
          <LabelText>E-mail</LabelText>
          <InputStyled
            type="email"
            placeholder="johnsmith@email.com"
            name="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            errors={errors.email}
            touched={touched.email}
          />
          {touched.email && errors.email && (
            <ErrorMessageText>{errors.email}</ErrorMessageText>
          )}
        </LabelStyled>
        {!contact && (
          <LabelStyled>
            <LabelText>Position</LabelText>
            <InputStyled
              type="text"
              placeholder="Movie maker"
              name="position"
              value={values.position}
              onBlur={handleBlur}
              onChange={handleChange}
              errors={errors.position}
              touched={touched.position}
            />
            {touched.position && errors.position && (
              <ErrorMessageText>{errors.position}</ErrorMessageText>
            )}
          </LabelStyled>
        )}
        {!contact && (
          <LabelStyled>
            <LabelText>Phone</LabelText>
            <InputStyled
              type="text"
              name="phone"
              value={values.phone}
              onBlur={handleBlur}
              onChange={handleChange}
              errors={errors.phone}
              touched={touched.phone}
            />
            {touched.phone && errors.phone && (
              <ErrorMessageText>{errors.phone}</ErrorMessageText>
            )}
          </LabelStyled>
        )}
        <LabelStyled>
          <LabelText>Message</LabelText>
          <TextAreaStyled
            type="textarea"
            name="message"
            value={values.message}
            onBlur={handleBlur}
            onChange={handleChange}
            errors={errors.message}
            touched={touched.message}
            contact={contact}
          />
          {touched.message && errors.message && (
            <ErrorMessageText>{errors.message}</ErrorMessageText>
          )}
        </LabelStyled>
        {!contact && (
          <LabelCheckboxStyled>
            <InputCheckboxStyled type="checkbox" />
            <CustomCheckBox>
              <span></span>
            </CustomCheckBox>

            <LabelCheckboxText>
              I confirm my consent to the processing of personal data.
            </LabelCheckboxText>
          </LabelCheckboxStyled>
        )}

        <ButtonForm type="submit">SEND</ButtonForm>
      </FormStyled>
    </div>
  );
};

export default Form;
