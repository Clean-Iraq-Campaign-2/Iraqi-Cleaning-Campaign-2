"use client";
import React, { useState, useEffect } from "react";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import Image, { StaticImageData } from "next/image";
import morethan1000volunteer from "../BlogAssets/morethan1000volunteer.jpg";
import more15thousand from "../BlogAssets/more15thousand.jpg";
import collectingover10000 from "../BlogAssets/collectingover10000.jpg";
interface Article {
  id: number;
  lastestUpdate: string;
  paragraph: string;
  Image: string | StaticImageData;
  Importance: string;
  month: string;
  day: number;
}
interface Articles {
  query: string;
  list: Article[] | undefined;
}
const LatestUpdates = () => {
  const posts: Article[] = [
    {
      id: 1,
      lastestUpdate: "شاركونا اكثر من 1000 متطوع! ",
      paragraph:
        "اجعل فرقًا حقيقيًا وانضم إلى أكثر من 1000 متطوع في حملة تنظيف قد، فرصتك لتحقيق التغيير الإيجابي وترك بصمة رائعة!",
      Image: morethan1000volunteer,
      Importance: "مهم جدا",
      month: "Jun",
      day: 23,
    },
    {
      id: 2,
      lastestUpdate: "وصلنا 15,000 سفير!",
      paragraph:
        "مليئة بالفخر والامتنان، حملتنا لتنظيف قد وصلت إلى 15,000 سفيرًا، دعونا نستمر معًا في صناعة التغيير الإيجابي!",
      Image: more15thousand,
      Importance: "مهم",
      month: "May",
      day: 5,
    },
    {
      id: 3,
      lastestUpdate: "جمعنا اكثر من 10,000 كيس نفايات!",
      paragraph:
        "تهانينا لنا جميعًا! جمعنا أكثر من 10,000 كيس نفايات في حملة تنظيف قد، وهذا هو ة قوتنا عندما نكون معًا نحقق التغيير!",
      Image: collectingover10000,
      Importance: "غير مهم",
      month: "Dec",
      day: 11,
    },
  ];
  const [sortType, setSortType] = useState<"ascending" | "descending">(
    "ascending"
  );
  const [sortByField, setSortByField] = useState<"lastestUpdate" | "paragraph">(
    "lastestUpdate"
  );
  const [result, setResult] = useState<Article[]>([]);
  const [article, setarticle] = useState<Articles>({
    query: "",
    list: posts,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    const results = posts.filter((post) => {
      if (query === "") return true;
      return post[sortByField].toLowerCase().includes(query.toLowerCase());
    });

    setResult(results);

    setarticle({
      query: query,
      list: query
        ? sortFunc(results, sortType, sortByField)
        : sortFunc(posts, sortType, sortByField),
    });
  };

  function sortFunc(
    results: Article[],
    sortType: "ascending" | "descending",
    sortByField: "lastestUpdate" | "paragraph"
  ) {
    if (sortType === "ascending") {
      results.sort((a, b) => (a[sortByField] < b[sortByField] ? -1 : 1));
    } else if (sortType === "descending") {
      results.sort((a, b) => (b[sortByField] > a[sortByField] ? 1 : -1));
    }
    return results;
  }

  function updatePosts(e: "ascending" | "descending") {
    setSortType(e);
    setarticle({
      query: article.query,
      list: !article.query
        ? sortFunc(posts, e, sortByField)
        : sortFunc(result, e, sortByField),
    });
  }

  function sortBy(e: "lastestUpdate" | "paragraph") {
    setSortByField(e);
    setarticle({
      query: article.query,
      list: !result
        ? sortFunc(posts, sortType, e)
        : sortFunc(result, sortType, e),
    });
  }
  return (
    <section className="min-h-screen  flex flex-col items-center  p-8 pl-9 pr-9 w-[98%] md:w-[90%]  mx-auto mt-5 rounded-3xl bg-[#f6f6f6]">
      <div className=" w-11/12 h-1/6 flex flex-row justify-between items-center  ">
        <div>
          <form>
            <span>Search</span>
            <input
              onChange={handleChange}
              value={article.query}
              placeholder="اسم المقالة"
              type="search"
              className="h-[2.5rem] w-[9rem] ml-[1rem]  "
            />

            <span className="ml-[2rem]">فرز حسب</span>
            <select
              className="ml-[1rem] h-[2.5rem] w-[9rem]"
              defaultValue={"DEFAULT"}
              onChange={(e) =>
                updatePosts(e.target.value as "ascending" | "descending")
              }
            >
              <option value="DEFAULT" disabled>
                ترتيب حسب
              </option>
              <option value="ascending">تصاعديا</option>
              <option value="descending">تنازليا</option>
            </select>
          </form>
        </div>
        <h1 className="text-[2.5rem] mr-[1rem] font-bold">اخر الاحداث</h1>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-full"></hr>
      {article.list?.map((post) => {
        return (
          <div className="w-full h-5/6  flex justify-end items-end mt-[3rem]">
            <div className="h-[18rem] w-11/12  flex flex-row">
              <div className="w-6/12 flex  ">
                <div className="flex flex-col h-full w-3/12 ">
                  <h1 className="text-[2rem]">{post.month}</h1>
                  <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700 w-[2rem]"></hr>
                  <h1 className="text-[3rem]">{post.day}</h1>
                </div>
                <div className=" w-full h-full  ">
                  <Image
                    src={post.Image}
                    alt="morethan1000volunteer"
                    className="w-full h-full rounded-[1rem]"
                  />
                </div>
              </div>
              <div className="w-6/12 h-full flex flex-col justify-end items-end   relative">
                <div className=" h-3/6 mt-[1.5rem] flex flex-col  items-center	">
                  <h1 className="text-[#8b8b8b] font-bold mr-[1rem]  text-[1.5rem] text-right ">
                    {post.lastestUpdate}
                  </h1>
                  <p className="text-[#c7c7c7] font-bold text-[1rem] mr-[0.5rem] mt-[1rem] text-right">
                    {post.paragraph}
                  </p>
                  <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700 w-9/12 mt-[2rem]	"></hr>
                </div>
                <div className="flex flex-row justify-center w-full h-3/6	">
                  <div className="flex  justify-center  w-full h-full mt-[1rem]">
                    <div className="flex ml-[5rem] h-full w-full ">
                      <a href="https://www.facebook.com/AzizAhsaan2/">
                        <BiLogoTwitter className="text-[2rem] mr-[0.5rem] text-black" />
                      </a>
                      <h1 className=" text-[1.1rem]">clean_iraq</h1>
                    </div>
                    <div className="flex h-full w-full  ">
                      <a href="https://www.facebook.com/AzizAhsaan2/">
                        <BiLogoFacebook className=" text-[2rem] mr-[0.5rem] text-black  " />
                      </a>
                      <h1 className=" text-[1.1rem]">clean_iraq</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default LatestUpdates;
