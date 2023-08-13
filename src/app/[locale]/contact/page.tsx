import React from "react";
import OurInputs from "./components/OurInputs";
import bgimg from "./bgimg.png";
import Image from "next/image";
import letter from "./letter.png";

function page() {
  return (
    <div className="overflow-hidden">
      <div className="form flex flex-col items-center my-20 overflow-hidden">
        <div className="hero flex flex-col max-h-96 overflow-hidden w-full">
          <Image
            src={bgimg}
            alt=""
            className="w-[98%] md:w-[90%] mx-auto mt-20 rounded-3xl
          "
          />
        </div>
        <h1 className="text-center text-2xl font-medium m-5 mt-10">
          اكتب استفسارك او طلبك
        </h1>
        <section className="flex justify-center items-center w-4/5 h-auto">
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
            <div className="flex flex-col w-10/12 items-end justify-center">
              <label htmlFor="msg" className="text-sm mb-2">
                الرسالة
              </label>
              <textarea
                name="msg"
                id="msg"
                className="border-t-2 border-black p-2 focus:outline-none focus:shadow-md transition-shadow duration-300 resize-none text-right w-full h-24"
                placeholder="اكتب رسالتك "
                rows={3}
              />
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
        </section>

        {/* <div className="map flex flex-col max-h-96  w-full">
          <img src={mapimg} alt="" />
        </div> */}
      </div>
    </div>
  );
}

export default page;
