"use client";
import Image from "next/image";

//import images
import WEB_DEVELOPMENT_IMG from "@/assets/images/Portfolio/Bossalabs/Group4.png";
import ILLIMAGE4 from "@/assets/images/ill-04.svg";
import ILLIMAGE1 from "@/assets/images/ill-01.svg";

//contant data import
import { web_development_process, what_block_section } from "@/helper/contant";
import FAQS from "@/components/FAQuestion/page";
import OtherServices from "@/components/OtherServices/page";
import PricingPlan from "@/components/Pricing Plan/page";
import ProcessFlow from "@/components/ProcessFlow/page";
import Count from "@/components/Count/page";
import IndustryVerticle from "@/components/IndustryVerticle/page";

export default function WebDevelopment() {
  return (
    <div>
      <section id="services-banner-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-xs-12">
              <div className="services-banner-header">
                <p>Enabling Faster Growth for Businesses</p>
                <h1>With High-performing Custom Web Apps</h1>
              </div>
            </div>
          </div>
          <div className="row services-banner-cnt-main">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
              <p>
                We are a web development company offering full-scale web
                development services that not only get you more customers but
                guarantee growth, faster.
              </p>
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
                <Image
                  priority="true"
                  alt=""
                  className="img-fluid"
                  src={WEB_DEVELOPMENT_IMG}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-block-section">
        <div className="container">
          <div className="row what-block-header">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12">
              <span>We are an expert team who is</span>
              <h2>Your Trusted Web App Development Partner</h2>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12 ">
              <div className="what-block-header-text">
                <p>
                  Web development solutions designed to understand your users,
                  eliminate compatibility issues, give wider accessibility and
                  scale your business faster.
                </p>
              </div>
            </div>
          </div>
          <div className="row what-block-item-row">
            {what_block_section.map((item, index) => {
              return (
                <div
                  className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-12"
                  key={index}
                >
                  <div className="what-block-item">
                    <Image
                      priority="true"
                      alt=""
                      src={item.img}
                      style={{ color: "red" }}
                    />
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="ill-block-block-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="ill-block-head">
                <h2>Why Hire TechniThunder for Your Web App Development</h2>
              </div>
            </div>
          </div>
          <div className="row ill-block-items">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 ill-block-items-col-one">
              <div className="ill-block-item-box">
                <span>
                  <Image
                    priority="true"
                    alt=""
                    className="img-fluid"
                    src={ILLIMAGE1}
                  />
                </span>
                <h4>User-centric approach</h4>
                <p>
                  We keep in mind each stage of your user journey to build
                  smart, immersive &amp; seamless UX, giving your web app a
                  headstart in the market.
                </p>
              </div>

              <div className="ill-block-item-box">
                <span>
                  <Image
                    alt=""
                    className="img-fluid"
                    src={ILLIMAGE4}
                    priority="true"
                  />
                </span>
                <h4>Complete transparency</h4>
                <p>
                  Engage anytime with our developers through our open and 100%
                  transparent communication loop that lets you keep all your
                  worries at bay.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 ill-block-items-col-two">
              <div className="ill-block-item-box">
                <span>
                  <Image
                    alt=""
                    className="img-fluid"
                    src={ILLIMAGE1}
                    priority="true"
                  />
                </span>
                <h4>User-centric approach</h4>
                <p>
                  We keep in mind each stage of your user journey to build
                  smart, immersive &amp; seamless UX, giving your web app a
                  headstart in the market.
                </p>
              </div>
              <div className="ill-block-item-box">
                <span>
                  <Image
                    alt=""
                    className="img-fluid"
                    src={ILLIMAGE4}
                    priority="true"
                  />
                </span>
                <h4>Complete transparency</h4>
                <p>
                  Engage anytime with our developers through our open and 100%
                  transparent communication loop that lets you keep all your
                  worries at bay.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 ill-block-items-col-three">
              <div className="ill-block-item-box">
                <span>
                  <Image
                    alt=""
                    className="img-fluid"
                    src={ILLIMAGE1}
                    priority="true"
                  />
                </span>
                <h4>User-centric approach</h4>
                <p>
                  We keep in mind each stage of your user journey to build
                  smart, immersive &amp; seamless UX, giving your web app a
                  headstart in the market.
                </p>
              </div>

              <div className="ill-block-item-box">
                <span>
                  <Image
                    alt=""
                    className="img-fluid"
                    src={ILLIMAGE4}
                    priority="true"
                  />
                </span>
                <h4>Complete transparency</h4>
                <p>
                  Engage anytime with our developers through our open and 100%
                  transparent communication loop that lets you keep all your
                  worries at bay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <Count />
        <IndustryVerticle />
        <section id="services-content-block">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 text-center">
                <h2>The Secret Sauce of Web App Development Team</h2>
                <p>
                  {`“It's no secret at all! We assemble a mixed pool of talents -
                    a go-getter project manager, a bunch of master designers, a
                    handful of passionate developers and nerdy testers! – That's
                    all it takes to create your web app!”`}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="service-process">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 col-12">
                <div className="service-process-head">
                  <h2>
                    Web Development
                    <strong> The TechniThunder Process</strong>
                  </h2>
                  <p>
                    We devise agile development strategies to create your web
                    app from scratch.
                  </p>
                </div>
              </div>
            </div>
            <section id="process-block-section-area">
              <ProcessFlow data={web_development_process} />
            </section>
            {/* <div>

            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                <div className="service-process-item-in services-process-item-left">
                  <h5>01</h5>
                  <h3>Requirement Gathering And Research</h3>
                  <p>
                    Our team digs deep into your mind to get all the software
                    requirements of your project and ensure we are on the same
                    page.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12" />
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12" />
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                <div className="service-process-item-in services-process-item-right">
                  <h5>02</h5>
                  <h3>Defining Tech Architecture</h3>
                  <p>
                    We talk through the technical side to choose the best tech
                    that suits your project.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                <div className="service-process-item-in services-process-item-left">
                  <h5>03</h5>
                  <h3>UI design Phase</h3>
                  <p>
                    Our UI team put their brains &amp; creativity in action to
                    give your product the best user experience.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12" />
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12" />
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                <div className="service-process-item-in services-process-item-right">
                  <h5>04</h5>
                  <h3>Assemble The Team (Dev And QA)</h3>
                  <p>
                    We set up a development and QA team to give life to your
                    great product idea.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                <div className="service-process-item-in services-process-item-left">
                  <h5>05</h5>
                  <h3>Sprint-based Development and QA</h3>
                  <p>
                    We create an actionable sprint roadmap with a strategic
                    vision to plan out your project and its delivery.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12" />
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12" />
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                <div className="service-process-item-in services-process-item-right">
                  <h5>06</h5>
                  <h3>Sprint &amp; Code Review</h3>
                  <p>
                    We set up a development and QA team to give life to your
                    great product idea.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                <div className="service-process-item-in services-process-item-left">
                  <h5>07</h5>
                  <h3>Release Plan</h3>
                  <p>
                    We schedule the release of your product to the market and
                    plan the features of each updated release in the future.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12" />
            </div>
            </div> */}
          </div>
        </section>
        <PricingPlan />
        <FAQS />
        <OtherServices />
      </div>
    </div>
  );
}
