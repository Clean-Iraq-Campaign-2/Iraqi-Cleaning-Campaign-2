"use client";
import React from "react";
import bgimg from "./girl.jpeg";
import letter from "./letter.png";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function page() {
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
    gender: "",
    job: "",
    governorate: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("الاسم مطلوب"),
    age: Yup.string().required("العمر مطلوب"),
    personalNumber: Yup.string().required("الرقم الشخصي مطلوب"),
    telegram: Yup.string().required("معرف التلكرام مطلوب"),
    gender: Yup.string().required("الجنس مطلوب"),
    job: Yup.string().required("المهنة مطلوبة"),
    governorate: Yup.string().required("المحافظة مطلوبة"),
  });
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="mt-20 mb-80">
      <div className=" flex justify-center items-center h-screen mt-20">
        <div className="w-1/3 h-full relative">
          <div className="words absolute top-0 left-0 flex flex-col justify-around h-full items-end text-overlay w-full p-4">
            <div className="flex w-full">
              <div className="w-1/2"></div>
              <h1 className="text-2xl font-bold text-right mb-4 text-white  w-1/2">
                خليك ويانا
              </h1>
            </div>
            <div className="flex w-full">
              <div className="w-1/2">
                <div className="socials flex flex-col items-start justify-between">
                  <p className="text-white">email@gmail.com</p>
                  <p className="text-white"> +964 123 456 789</p>
                </div>
                <div className="w-1/2"></div>
              </div>
            </div>
            <div className="flex">
              <div className="qr w-1/5"></div>
              <div className="w-4/5">
                <p className="text-white text-right">
                  بعد ان تملي الاستمارة ستحصل على الباركود الخاص بيك لتستخرمه
                  بكل تجمعات سفراء النظافة.
                </p>
              </div>
            </div>
          </div>

          <Image src={bgimg} alt="" className="h-full w-full object-cover" />
        </div>

        <div className="w-2/3 h-full p-10">
          <div className="content flex flex-row-reverse justify-center items-center my-6 mb-12">
            <div className="lg:w-1/2">
              <h1 className="text-right text-2xl font-bold">
                {" "}
                اكتب المعلومات المطلوبة
              </h1>
              <p className="text-right">
                <span className="text-blue-400 text-right">ملاحظة</span> اذا ما
                تحب تشاركنا معلوماتك، ممكن تحضر بدون ما تملي الاستمارة،{" "}
                <span className="text-blue-400 text-right">
                  بس ما راح تحصل على اي وحدة من مطبوعات الحملة
                </span>{" "}
                (مثلا تيشيرت، مطارة مي، ميدالية، وغيرها)
              </p>
            </div>
            <div className="w-1/2"></div>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
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
                  <Field
                    name="personalNumber"
                    type="text"
                    className="text-right border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md transition-shadow duration-300  m-5 w-72 lg:w-96 bg-transparent"
                  />
                  <ErrorMessage
                    name="personalNumber"
                    render={renderErrorMessage}
                  />
                </div>
                <div className="flex flex-col w-full max-w-md justify-center items-end">
                  <label htmlFor="input2" className="text-sm mb-2">
                    معرف التلكرام
                  </label>
                  <Field
                    name="telegram"
                    type="text"
                    className="text-right border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md transition-shadow duration-300  m-5 w-72 lg:w-96 bg-transparent"
                  />
                  <ErrorMessage name="telegram" render={renderErrorMessage} />
                </div>
              </div>
              <div className="rThree flex flex-col lg:flex-row m-5 w-full justify-center items-center">
                <div className="flex flex-col w-full max-w-md justify-center items-end">
                  <label htmlFor="input1" className="text-sm mb-2">
                    الجنس
                  </label>
                  <Field
                    as="select"
                    name="gender"
                    className="text-right border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md transition-shadow duration-300  m-5 w-72 lg:w-96 bg-transparent"
                  >
                    <option disabled value="">
                      اختر
                    </option>
                    <option value="male">ذكر</option>
                    <option value="female">انثى</option>
                  </Field>
                </div>
                <div className="flex flex-col w-full max-w-md justify-center items-end">
                  <label htmlFor="input2" className="text-sm mb-2">
                    المهنة{" "}
                  </label>
                  <Field
                    name="job"
                    as="select"
                    className="text-right border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md transition-shadow duration-300  m-5 w-72 lg:w-96 bg-transparent"
                  >
                    <option disabled value="">
                      اختر
                    </option>
                    <option value="student">طالب</option>
                    <option value="employee">موظف</option>
                    <option value="unemployed">عاطل عن العمل</option>
                    <option value="other">اخرى</option>
                  </Field>
                </div>
              </div>
              <div className="rThree flex flex-col lg:flex-row m-5 w-full justify-center items-center">
                <div className="flex flex-col w-full max-w-md justify-center items-end"></div>
                <div className="flex flex-col w-full max-w-md justify-center items-end">
                  <p className="text-right text-xs my-10">
                    المحافظة الي راح تشارك بتنظيفها هذا الاسبوع (مو شرط نفسها
                    محافظة السكن)
                  </p>
                  <label htmlFor="input2" className="text-sm mb-2">
                    المحافظة{" "}
                  </label>
                  <Field
                    name="governorate"
                    as="select"
                    className="text-right border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md transition-shadow duration-300  m-5 w-72 lg:w-96 bg-transparent"
                  >
                    <option disabled  value="">
                      اختر
                    </option>
                    <option value="Baghdad">بغداد</option>
                    <option value="Erbil">اربيل</option>
                    <option value="Anbar">انبار</option>
                    <option value="Babylon">بابل</option>
                    <option value="Basra">بصرة</option>
                    <option value="Duhoq">دهوك</option>
                    <option value="Diyala">ديالى</option>
                    <option value="Qadisiyyah">قادسية</option>
                    <option value="Dhi Qar">ذي قار</option>
                    <option value="Sulaymaniyah">سليمانية</option>
                    <option value="Salah ad Din">صلاح الدين</option>
                    <option value="Kirkuk">كركوك</option>
                    <option value="Karbala">كربلاء</option>
                    <option value="Maysan">ميسان</option>
                    <option value="Muthanna">مثنى</option>
                    <option value="Najaf">نجف</option>
                    <option value="Ninawa">نينوى</option>
                    <option value="Wasit">واسط</option>
                  </Field>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-full">
                <input
                  type="submit"
                  className="bg-secondary text-light font-bold px-2 my-auto py-1 w-24 rounded-lg mt-5"
                />
                <Image
                  src={letter}
                  alt=""
                  className="w-72 -rotate-45 mt-20 mr-36"
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default page;
