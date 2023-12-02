"use client";
import Image from "next/image";
export default function HeroBanner1({ heading, title, description, image }) {
  return (
    <section id="services-banner-block">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-xs-12">
            <div className="services-banner-header">
              <p>{heading}</p>
              <h1>{title}</h1>
            </div>
          </div>
        </div>
        <div className="row services-banner-cnt-main">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
            <p>{description}</p>
            <button
              onClick={() =>
                window.open("https://calendly.com/ppatel-0xm", "_blank")
              }
              className="btn big-button"
            >
              {" "}
              Schedule A Meeting
            </button>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
            <div className="services-banner-img">
              <Image alt="" priority="true" className="img-fluid" src={image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
