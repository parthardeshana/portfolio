"use client";
import Image from "next/image";
import Link from "next/link";
//images import
import NEXTGEN from "@/assets/images/Portfolio/Nextgen/n5.png";
//realtive path import
import CaseStudyHome from "@/components/CaseStudy/CaseStudyHome";

const passionate = [
  "ENGINEERS",
  "LEADERS",
  "STRATEGISTS",
  "DESIGNERS",
  "PRODUCT OWNERS",
];

export default function AboutUs() {
  return (
    <div>
      <section className="case-study-home-banner">
        <CaseStudyHome
          title="About US"
          description="Reduce development costs to increase profits without compromise. With a huge pool of talented and experienced technology experts."
        />
      </section>
      <section id="services-hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12 col-12">
              <div className="service-banner-left">
                <h2>
                  A <span style={{ color: "#f36d45" }}>passionate team</span>
                  that makes
                </h2>
                <h1>Technology Work for Your Business</h1>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 col-12">
              <div className="service-banner-right">
                <p>
                  We are as enthusiastic as you to create tech-enabled solutions
                  that could not only grow your business but change the world.
                  Over the years, we have helped 100+ businesses impact millions
                  of people across the globe.
                </p>
                <button
                  onClick={() =>
                    window.open("https://calendly.com/ppatel-0xm", "_blank")
                  }
                  className="btn big-button"
                >
                  Schedule A Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-purpose">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12 col-12">
              <div className="about-purpose-title  text-right">
                <h2>
                  Our
                  <br />
                  Purpose
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12 col-12">
              <div className="about-purpose-cnt">
                <p>
                  {`We exist to help people transform their ideas into technology
                  that creates a positive impact on people's lives`}
                </p>
              </div>
            </div>
          </div>
          <div className="row  about-purpose-mobile">
            <div className="col-lg-6 col-sm-6 col-xs-12 col-12">
              <div className="about-purpose-cnt text-right">
                <p>
                  To be the go-to technology partner for entrepreneurs, where
                  they can unleash the potential of their ideas and positively
                  shape the future we live in
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12 col-12">
              <div className="about-purpose-title  text-left">
                <h2>
                  Our
                  <br />
                  Vision
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12 col-12">
              <div className="about-purpose-title  text-right">
                <h2>
                  Our
                  <br />
                  Mission
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12 col-12">
              <div className="about-purpose-cnt">
                <p>
                  We make enterprise-grade product development more accessible
                  to entrepreneurs, helping them compete on a bigger scale while
                  still staying nimble
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-gloabl">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <h2>
                <span>We are Global</span>
                and Have Done More Than 100 Projects Across 4 Continents
              </h2>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <Image
                alt=""
                priority="true"
                className="img-fluid"
                src={NEXTGEN}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="about-we-are">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
              <div className="about-we-are-head">
                <h3>
                  <span>We</span>
                  Are
                </h3>
                <p>
                  A team who accelerates your idea-to-product journey, helping
                  you win more customers and scale your business.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 col-12">
              <h4>
                {" "}
                Beyond Everything, People Who Are As{" "}
                <span>Passionate As You!</span>
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
              <div className="abt-text-blink">
                {passionate.map((item, index) => {
                  return (
                    <div key={index}>
                      {Array.from({ length: 8 }).map((i, index) => (
                        <span key={index}>{item}</span>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
              <div className="about-footer-contact">
                <h3>Go Idea to Product Now!</h3>
                <p>
                  Every great business was once a small [crazy] idea.
                  <br />
                  {`Let's bring life to your idea, lightning fast! Book a Free
                  technology consultation with our experts now!`}
                </p>
                <button className="btn animated-btn">
                  <Link
                    href="/contact"
                    className="text-decoration-none text-dark"
                  >
                    <strong>Start My </strong>
                    <span>Project</span>
                  </Link>
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
              <div className="about-footer-contact">
                <h3>
                  Career<sup>@</sup> TECHNITHUNDER
                </h3>
                <p>
                  {`Kill your Monday blues by being a part of TECHNITHUNDER's
                    fun-loving & passionate team.`}
                  <br />
                  Want to explore the career opportunities at TECHNITHUNDER?
                </p>
                <button className="btn animated-btn">
                  <Link
                    href="/career"
                    className="text-decoration-none text-dark"
                  >
                    <strong>Explore </strong>
                    <span>Careers</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
