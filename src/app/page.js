"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Slider from "react-slick";
//relative path import
import VideoPlayer from "@/components/VideoPlayer/page";
import SliderComponent from "@/components/Slider/page";
import Project from "@/components/ProjectSlider/page";
import CustomArrow from "@/components/CustomArrow/page";
//constant data import
import clientReviews from "../assets/JsonData/ClientReviews.json";
import Header from "@/components/Header/page";
import CaseStudyHome from "@/components/CaseStudy/CaseStudyHome";
import { case_study_data } from "@/helper/contant";
import CTAForm from "@/components/CTAForm/page";

export default function Home() {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (pathname == "/") {
      function toggleScrollTop() {
        let solution1 = document.querySelector(".home-solutions-item.one");
        let solution2 = document.querySelector(".home-solutions-item.two");
        let solution3 = document.querySelector(".home-solutions-item.three");
        if (window.scrollY > 500) {
          solution1?.classList?.add("active");
        } else {
          solution1?.classList?.remove("active");
        }
        if (window.scrollY > 900) {
          solution2?.classList?.add("active");
        } else {
          solution2?.classList?.remove("active");
        }
        if (window.scrollY > 1300) {
          solution3?.classList?.add("active");
        } else {
          solution3?.classList?.remove("active");
        }
      }
      document.addEventListener("scroll", toggleScrollTop);
    }
  }, [pathname]);

  const handleBlog = (pathname) => {
    router.push(`/case-studies/${pathname}`);
  };

  return (
    <div>
      <Header />
      <div style={{ marginTop: 50 }}>
        <CaseStudyHome
          title="Parth Patel"
          description="I'm frontend developer"
        />
      </div>

      <section id="service-exp">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 col-12">
              <div className="service-exp-head">
                <h2>Technology Expertise</h2>
                <p>
                  We are proficient in handling emerging technologies to help
                  you build innovative enterprise-grade products and take your
                  business to profitability 2x faster.
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 col-12">
              <div className="row carousel-main">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                  <div className="service-exp-item">
                    <h3>Front end</h3>
                    <ul>
                      <li>React</li>
                      <li>Next JS</li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                  <div className="service-exp-item">
                    <h3>Database</h3>
                    <ul>
                      <li>Mongo DB</li>
                      <li>My Sql</li>

                      <li>firebase</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                  <div className="service-exp-item">
                    <h3>Back end</h3>
                    <ul>
                      <li>Node.js</li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                  <div className="service-exp-item">
                    <h3>Project Mangement</h3>
                    <ul>
                      <li>Jira</li>
                      <li>slack</li>
                      <li>github</li>
                      <li>Gitlab</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case-study-section">
        <h2 className="text-center mt-5 text-uppercase fs-1">Portfolio</h2>
        <div className="text-work-portfolio" />
        <div className="container mt-5">
          <div className="row">
            {case_study_data.map((item, index) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-xs-6 col-12"
                  key={index}
                  onClick={() => handleBlog(item.details.pathname)}
                >
                  <div className="case-study-bx">
                    <div className="case-study-img">
                      <Image
                        priority="true"
                        className="img-fluid"
                        src={item.details.img}
                        alt=""
                      />
                      <span>{item.details.tag}</span>
                    </div>
                    <div className="case-study-bx-title">
                      <a href="#" className="text-decoration-none">
                        <span>{item.details.title}</span>
                      </a>
                      <ul className="tech-tags">
                        {item.details.tech_tag.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div id="contact-us" style={{ backgroundColor: "#e7f1f7", padding: 30 }}>
        <section style={{ paddingTop: 50 }}>
          <CTAForm
            title1="PARTNER FOR YOUR PROJECT?"
            title2="WE ARE READY!"
            subtitle="GET IN TOUCH"
          />
        </section>
      </div>
    </div>
  );
}
