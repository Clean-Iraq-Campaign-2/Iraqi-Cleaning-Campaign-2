import React from "react";
import Slider from "react-slick";
import BlogCard from "./BlogCard";

function SampleNextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
       style={{
        ...style,
        background: "rgba(0, 0, 0, 0.5)",
        width: "40px",
        height: "40px", 
        borderRadius: "50%",
        color: "white", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        background: "rgba(0, 0, 0, 0.5)",
        padding:0,
        width: "40px",
        height: "40px", 
        borderRadius: "50%",
        color: "white", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex:1,
        cursor: "pointer",}}
      onClick={onClick}
    />
  );
}

export const BlogList = ({blogs}:{blogs:{}[]}) => {
      var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 5,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    };

    return (
      <div >
        <Slider {...settings}>
        {blogs.map((item,index)=>(<BlogCard key={index}/>))}
        </Slider>
      </div>
    );
  }
