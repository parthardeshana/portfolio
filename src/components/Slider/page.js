"use client";
import Image from "next/image";
import Slider from "react-slick";
//constant data import
import { slider_logo } from "@/helper/contant";

export default function SliderComponent() {
  const settingsSliderComponent = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div>
      <Slider className="constant-simple-slider" {...settingsSliderComponent}>
        {slider_logo.map((item, index) => {
          return (
            <div key={index}>
              <Image
                alt=""
                src={item.img}
                priority="true"
                style={{
                  backgroundSize: "cover",
                  height: "80px",
                  width: "auto",
                }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
