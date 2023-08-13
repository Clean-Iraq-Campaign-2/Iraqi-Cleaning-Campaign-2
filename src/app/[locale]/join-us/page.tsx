import React from "react";
import OurInputs from "./components/OurInputs";
import bgimg from "./girl.jpeg";
import letter from "./letter.png";
import Image from "next/image";
function page() {
  return (
    <div className="mt-20 mb-56">
        <div className="relative flex justify-center items-center h-screen mt-20">
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

        <Image
          src={bgimg}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-2/3 h-full p-10">
        <div className="content flex flex-row-reverse justify-center items-center my-6 mb-12">
          <div className="w-1/2">
            <h1 className="text-right text-2xl font-bold">
              {" "}
              اكتب المعلومات المطلوبة
            </h1>
            <p className="text-right">
              <span className="text-blue-400 text-right">ملاحظة</span> ذا ما تحب
              تشاركنا معلوماتك، ممكن تحضر بدون ما تملي الاستمارة،{" "}
              <span className="text-blue-400 text-right">
                بس ما راح تحصل على اي وحدة من مطبوعات الحملة
              </span>{" "}
              (مثلا تيشيرت، مطارة مي، ميدالية، وغيرها)
            </p>
          </div>
          <div className="w-1/2"></div>
        </div>
        <form className="flex flex-col w-full justify-center items-center">
          <div className="rOne flex flex-col lg:flex-row m-5 w-full justify-center items-center">
            <div className="flex flex-col w-full max-w-md justify-center items-end">
              <label htmlFor="input1" className="text-sm mb-2">
                الاسم
              </label>
              <OurInputs id="input1" />
            </div>
            <div className="flex flex-col w-full max-w-md justify-center items-end">
              <label htmlFor="input2" className="text-sm mb-2">
                العمر
              </label>
              <OurInputs id="input2" />
            </div>
          </div>
          <div className="rTwo flex flex-col lg:flex-row m-5 w-full justify-center items-center">
            <div className="flex flex-col w-full max-w-md justify-center items-end">
              <label htmlFor="input1" className="text-sm mb-2">
                الرقم الشخصي
              </label>
              <OurInputs id="input3" />
            </div>
            <div className="flex flex-col w-full max-w-md justify-center items-end">
              <label htmlFor="input2" className="text-sm mb-2">
                معرف التلكرام
              </label>
              <OurInputs id="input4" />
            </div>
          </div>
          <div className="rThree flex flex-col lg:flex-row m-5 w-full justify-center items-center">
            <div className="flex flex-col w-full max-w-md justify-center items-end">
              <label htmlFor="input1" className="text-sm mb-2">
                الجنس
              </label>
              <OurInputs id="input3" />
            </div>
            <div className="flex flex-col w-full max-w-md justify-center items-end">
              <label htmlFor="input2" className="text-sm mb-2">
                المهنة{" "}
              </label>
              <OurInputs id="input4" />
            </div>
          </div>
          <div className="rThree flex flex-col lg:flex-row m-5 w-full justify-center items-center">
            <div className="flex flex-col w-full max-w-md justify-center items-end"></div>
            <div className="flex flex-col w-full max-w-md justify-center items-end">
              <p className="text-right text-xs my-10">
                المحافظة الي راح تشارك بتنظيفها هذا الاسبوع (مو شرط نفسها محافظة
                السكن)
              </p>
              <label htmlFor="input2" className="text-sm mb-2">
                المحافظة{" "}
              </label>
              <OurInputs id="input4" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
              <input
                type="submit"
                className="w-20 bg-green-600 rounded-sm text-white"
              />
              <Image
                src={letter}
                alt=""
                className="w-72 -rotate-45 mt-20 mr-36"
              />
            </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default page