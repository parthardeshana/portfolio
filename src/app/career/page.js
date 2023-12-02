"use client";
import Image from "next/image";

//import images
import CAREERILL from "@/assets/images/career-ill.svg";

//constant data import
import { active_job_openings, career_attraction } from "@/helper/contant";

export default function Career() {
  return (
    <div>
      <section id="services-hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12 col-12">
              <div className="service-banner-left">
                <h1>
                  Work@
                  <br />
                  TECHNITHUNDER
                </h1>
                <p>
                  {`At TECHNITHUNDER, you'll be surrounded by PASSIONATE people
                  who help to build products that shape the future—and having a
                  heck of a time doing it TOGETHER.`}
                </p>
                <button className="big-primary-btn" id="view-jobs">
                  View Jobs
                </button>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 col-12">
              <div className="service-banner-right">
                <Image
                  priority="true"
                  alt=""
                  className="img-fluid"
                  src={CAREERILL}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="career-ww">
        <svg
          width={1439}
          height={478}
          viewBox="0 0 1439 478"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          preserveAspectRatio="none"
          className="lgd:hidden"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            fill="#E7F1F7"
            d="M-2 0H1439V367.527C1439 430.374 1386.44 480.447 1323.66 477.397L102.663 418.084C44.0553 415.237 -2 366.89 -2 308.214V0Z"
          />
        </svg>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-xs-12 text-center">
              <h3>We Want You @ TECHNITHUNDER</h3>
              <p>
                {`At TECHNITHUNDER, you'll be collaborating with some amazing
                people in solving complex problems and building ground-breaking
                products that revolutionize industries. We love working with
                go-getters who actively contribute to our team with great ideas
                and help us build our energetic and fun work culture.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="jobs-listing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h2>Active Openings</h2>
            </div>
          </div>
          <div className="row">
            {active_job_openings.map((item, index) => {
              return (
                <div className="col-lg-12 col-12" key={index}>
                  <div className="jobs-list-card">
                    <div className="row jobs-list-cnt m-0">
                      <div className="col-lg-9 col-md-8 col-sm-8 col-xs-12 col-12">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                      {/* <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 col-12">
                        <button className="btn jobs-apply-btn">
                          Apply Now
                        </button>
                      </div> */}
                    </div>
                    <div className="jobs-list-card-footer">
                      <span>Permanent</span>
                      <h6>
                        <i className="fa fa-map-marker" aria-hidden="true" />{" "}
                        Ahmedabad, Gujarat
                      </h6>
                    </div>
                  </div>
                  {/*jobs-list-card*/}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="career-attractions">
        <div className="container">
          <div className="row">
            {career_attraction.map((item, index) => {
              return (
                <div
                  className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12"
                  key={index}
                >
                  <div className="career-attaractions-card">
                    <span>
                      <Image priority="true" src={item.img} alt="" />
                    </span>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
