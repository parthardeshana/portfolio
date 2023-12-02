"use client";
import Image from "next/image";

//import images

import CHRISTOFER_IMAGE from "@/assets/images/client-images/Nextgen_client_img.png";
import WEB_DEVELOPMENT_IMG from "@/assets/images/Portfolio/Bossalabs/Group4.png";
import N1 from "@/assets/images/Portfolio/Nextgen/n1.png";

//constant data import
import { development_tools, web_development_process } from "@/helper/contant";

//relative path import
import RangeOfService from "@/components/RangeOfServices/page";

import IndustryVerticles from "@/components/IndustryVerticles/page";
import ProcessFlow from "@/components/ProcessFlow/page";

export default function Service() {
  return (
    <div>
      <section id="services-hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12 col-12">
              <div className="service-banner-left">
                <span>
                  We build <strong>innovative products</strong> that
                </span>
                <h1>Transform Your Business</h1>
                <span>
                  <svg
                    className="path-anim drawsvg-initialized "
                    data-aos-parent="service-banner-left"
                    width={363}
                    height={23}
                    viewBox="0 0 363 23"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    preserveAspectRatio="xMinYMin"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="#F36D45"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M51 6.88273C128 3.21606 290.6 -2.51727 325 3.88273C282.667 0.382715 158.6 -1.01731 1 21.3827C98.1667 16.0494 306.3 7.88269 361.5 17.8827"
                      style={{
                        strokeDasharray: "960.065, 960.065",
                        strokeDashoffset: 0,
                      }}
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 col-12">
              <div className="service-banner-right">
                <Image
                  priority="true"
                  alt=""
                  className="img-fluid"
                  src={WEB_DEVELOPMENT_IMG}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 text-center">
              <button
                onClick={() =>
                  window.open("https://calendly.com/ppatel-0xm", "_blank")
                }
                className="btn big-button"
              >
                Talk to our experts
              </button>
            </div>
          </div>
        </div>
      </section>
      <div>
        <section id="service-work">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="service-work-left">
                  <h2> End to End Product Development</h2>
                  <h4>Digitalization</h4>
                  <h4>Data &amp; AI</h4>
                  <h4>Cloud Services</h4>
                  <p>
                    As a complete product development partner, we build
                    enterprise-grade solutions that suit all your business
                    needs. We will help you accelerate from ideation to product
                    launch and beyond!
                  </p>
                  <h5>For startups, enterprises &amp; scaleups</h5>
                  <ul>
                    {development_tools.map((item, index) => {
                      return (
                        <li key={index}>
                          {" "}
                          <Image priority="true" alt="" src={item.img} />{" "}
                          {item.title}
                        </li>
                      );
                    })}
                  </ul>
                  ;
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="service-work-right">
                  <div className="service-work-right-item-img">
                    <Image
                      priority="true"
                      alt=""
                      className="img-fluid"
                      src={N1}
                    />
                  </div>
                  <div className="client-mesage">
                    <p>
                      {`TechniThunder's e-learning platform is a game-changer! The
                        courses are comprehensive, well-structured, and delivered
                        in an engaging manner. Highly recommended!.`}
                    </p>
                    <div className="client-mesage-foot">
                      <Image
                        priority="true"
                        alt=""
                        style={{ width: "55px", height: "auto" }}
                        src={CHRISTOFER_IMAGE}
                      />
                      <div className="client-mesage-foot-in">
                        <h4>Tarang p.</h4>
                        <span>CTO at Nextgen Tutorial</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="service-rth">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12">
                <div className="service-rth-head">
                  <h2>
                    We are <span>ready to help</span> {`if you're a`}
                  </h2>
                  <p>
                    Founder, Entrepreneur, Product Manager, CTO, or Anyone who
                    is
                  </p>
                </div>
              </div>
            </div>
            <div className="row service-rth-items">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12">
                <div className="service-rth-item-in">
                  <h4>01</h4>
                  <p>
                    Planning to augment your development team for a new,
                    challenging project
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12">
                <div className="service-rth-item-in">
                  <h4>02</h4>
                  <p>
                    Looking to replace your existing vendor with a reliable
                    &amp; more experienced tech partner
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12">
                <div className="service-rth-item-in">
                  <h4>03</h4>
                  <p>
                    Seeking a top-tier development team to boost your growth
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                <div className="service-rth-item-in">
                  <h4>04</h4>
                  <p>
                    Finding it hard to hire a team who understands your long
                    term goals
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                <div className="service-rth-item-in">
                  <h4>05</h4>
                  <p>
                    Bent out of shape over lack of transparency &amp; poor
                    communication skills of your existing vendor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                        <li>Angular</li>
                        <li>Vue</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                    <div className="service-exp-item">
                      <h3>Mobile</h3>
                      <ul>
                        <li>Flutter</li>
                        <li>React Native</li>
                        <li>ionic</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                    <div className="service-exp-item">
                      <h3>AI</h3>
                      <ul>
                        <li>PyTorch</li>
                        <li>Tensor flow</li>
                        <li>Open cv</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                    <div className="service-exp-item">
                      <h3>Cloud</h3>
                      <ul>
                        <li>AWS</li>
                        <li>Azure</li>
                        <li>Google Cloud</li>
                        <li>Digital ocean</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                    <div className="service-exp-item">
                      <h3>Database</h3>
                      <ul>
                        <li>Mongo DB</li>
                        <li>My Sql</li>
                        <li>PostgreSQL</li>
                        <li>firebase</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                    <div className="service-exp-item">
                      <h3>Back end</h3>
                      <ul>
                        <li>Node.js</li>
                        <li>python</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                    <div className="service-exp-item">
                      <h3>Project Mangement</h3>
                      <ul>
                        <li>Jira</li>
                        <li>slack</li>
                        <li>discord</li>
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
        <RangeOfService />
        <section id="service-process">
          <div className="container">
            <section id="process-block-section-area">
              <ProcessFlow data={web_development_process} />
            </section>
          </div>
        </section>

        <IndustryVerticles />
      </div>
    </div>
  );
}
