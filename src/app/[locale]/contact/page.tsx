import React from "react";
import bgimg from "./bgimg.png";
import Image from "next/image";
import MyForm from "./components/MyForm";

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
        <MyForm />
        </section>
      </div>
    </div>
  );
}

export default page;
