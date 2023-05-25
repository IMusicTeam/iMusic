import React, { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router";
import FormField from "../../Components/Atoms/FormField/FormField.js";
import LoginButton from "../../Components/Atoms/LoginButton/LoginButton";
import * as Yup from "yup";
import { useFormik } from "formik";

function ContactUs() {
  const navigatTo = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleBack = () => {
    navigatTo("/profile/get-help");
  };

  const informationSchema = Yup.object().shape({
    subject: Yup.string()
      .required("Subject is required")
      .matches(/^[a-zA-Z\s]+$/, "Field should only contain alphabets."),
    description: Yup.string()
      .required("Description is required")
      .matches(/^[a-zA-Z\s]+$/, "Field should only contain alphabets."),
  });

  const formik = useFormik({
    initialValues: {
      subject: "",
      description: "",
    },
    validationSchema: informationSchema,
  });

  return (
    <div className="flex flex-row justify-center items-center my-[58px]">
      <div className="w-[610px] h-[780px] rounded-[20px] bg-iWhite shadow-2xl px-[35px]">
        <button className="pt-[38px]">
          <BiLeftArrowAlt size={38} onClick={handleBack} />
        </button>
        <div className="pt-[10px] text-center text-iBlue text-[28px] font-medium">
          Contact Us
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-[33px]">
            <label
              htmlFor="subjectInput"
              className="block text-iBlue text-[20px] font-medium mb-2"
            >
              Subject
            </label>
            <FormField
              type="text"
              name="subject"
              placeholder="Subject"
              className="border border-iBlue rounded-[10px] w-[540px] h-[56px] px-3 focus:outline-none"
              id="subjectInput"
              value={formik.values.subject}
              error={
                formik.touched.subject && formik.errors.subject
              }
              {...formik.getFieldProps("subject")}
            />
          </div>
          <div className="mb-4 h-[280px]">
            <label
              htmlFor="descriptionInput"
              className="block text-iBlue text-[20px] font-medium mb-2"
            >
              Description
            </label>
            <FormField
              placeholder="Description"
              name="description"
              className="border border-iBlue focus:border-iBlue rounded-[10px] w-[540px] h-[248px] px-3 focus:outline-none"
              id="descriptionInput"
              value={formik.values.description}
              error={
                formik.touched.description && formik.errors.description
              }
              {...formik.getFieldProps("description")}
            />
          </div>
          <LoginButton
            type="submit"
            onClick={formik.handleSubmit}
            disable ={!(formik.dirty && formik.isValid)}
            label="Submit"
            className="w-[280px] h-[54px] text-iWhite py-2 px-4 rounded-[27px] ml-[135px] mt-[130px] text-[20px]"
          >
            Submit
          </LoginButton>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
