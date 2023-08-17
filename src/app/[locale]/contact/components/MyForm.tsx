"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import letter from "../letter.png";
// import 'react-phone-input-2/lib/style.css'; // Import the styles
import PhoneInput from 'react-phone-input-2';

function MyForm() {
  const renderErrorMessage = (errormsg: string) => (
    <div className="flex flex-row justify-center items-center border-2 border-gray-400 border-opacity-50 rounded-lg">
      <span className="mx-2">{errormsg}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-red-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
    </div>
  );
  const initialValues = {
    name: "",
    age: "",
    personalNumber: "",
    telegram: "",
    msg: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("الاسم مطلوب"),
    age: Yup.string().required("العمر مطلوب"),
    personalNumber: Yup.string().required("الرقم الشخصي مطلوب"),
    telegram: Yup.string().required("معرف التلكرام مطلوب"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col w-full justify-center items-center">
          <div className="rOne flex flex-col lg:flex-row m-5 w-full justify-center items-center">
            <div className="flex flex-col w-full max-w-md justify-center items-end">
              <label htmlFor="input1" className="text-sm mb-2">
                الاسم
              </label>
              <Field
                name="name"
                type="text"
                id="input1"
                className="text-right border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md transition-shadow duration-300  m-5 w-72 lg:w-96 bg-transparent"
              />
              <ErrorMessage name="name" render={renderErrorMessage} />
            </div>
            <div className="flex flex-col w-full max-w-md justify-center items-end">
              <label htmlFor="input2" className="text-sm mb-2">
                العمر
              </label>
              <Field
                name="age"
                type="text"
                id="input2"
                className="text-right border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md transition-shadow duration-300  m-5 w-72 lg:w-96 bg-transparent"
              />
              <ErrorMessage name="age" render={renderErrorMessage} />
            </div>
          </div>
          <div className="rTwo flex flex-col lg:flex-row m-5 w-full justify-center items-center">
            <div className="flex flex-col w-full max-w-md justify-center items-end">
              <label htmlFor="input1" className="text-sm mb-2">
                الرقم الشخصي
              </label>
              {/* <PhoneInput
              className="text-right border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md transition-shadow duration-300  m-5 w-72 lg:w-96 bg-transparent"
              country={'iq'}
                value={initialValues.personalNumber}
                onChange={(e) => {
                    initialValues.personalNumber = e;
                }}
                autoFormat={true}
                inputStyle={{width: '100%'}}
                containerStyle={{width: '100%'}}
                countryCodeEditable={true}
                /> */}
                <Field
                name="personalNumber"
                type="text"
                id="input3"
                className="text-right border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md transition-shadow duration-300  m-5 w-72 lg:w-96 bg-transparent"
              />

              <ErrorMessage name="personalNumber" render={renderErrorMessage} />
            </div>
            <div className="flex flex-col w-full max-w-md justify-center items-end">
              <label htmlFor="input2" className="text-sm mb-2">
                معرف التلكرام
              </label>
              <Field
                name="telegram"
                type="text"
                id="input4"
                className="text-right border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md transition-shadow duration-300  m-5 w-72 lg:w-96 bg-transparent"
              />
              <ErrorMessage name="telegram" render={renderErrorMessage} />
            </div>
          </div>
          <div className="flex flex-col w-10/12 items-end justify-center">
            <label htmlFor="msg" className="text-sm mb-2">
              الرسالة
            </label>
            <Field
              name="msg"
              id="msg"
              className="border-t-2 border-black p-2 focus:outline-none focus:shadow-md transition-shadow duration-300 resize-none text-right w-full h-24 bg-transparent"
              placeholder="اكتب رسالتك "
              as="textarea"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <button
              type="submit"
              className="bg-secondary text-light font-bold px-2  my-auto py-1 w-24 rounded-lg mt-5"
            >
              ارسال
            </button>
            <Image
              src={letter}
              alt=""
              className="w-72 -rotate-45 mt-20 mr-36"
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default MyForm;
