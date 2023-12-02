import CaseStudyHome from "@/components/CaseStudy/CaseStudyHome";
import Link from "next/link";

const Sitemap = () => {
  return (
    <div>
      <section className="case-study-home-banner">
        <CaseStudyHome
          title="Sitemap"
          description="Reduce development costs to increase profits without compromise. With a huge pool of talented and experienced technology experts."
        />
      </section>
      <section id="services-hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 col-12">
              <div className="footer-col-cnt">
                <h3 className="mt-4">Technithunder Info</h3>
                <ul className="footer-nav sitemap">
                  <li>
                    <Link href="/about-us">About us</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/case-studies">Case Studies</Link>
                  </li>
                  <li>
                    <Link href="/career">Careers</Link>
                  </li>
                  <li>
                    <Link href="/sitemap">Sitemap</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 col-12">
              <div className="footer-col-cnt">
                <h3 className="mt-4">Build Your Team</h3>
                <ul className="footer-nav sitemap">
                  <li>
                    <Link href="/services/web-development">
                      Hire Web Developer
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/web-development">
                      Hire Software Developer
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/web-development">
                      Hire Frontend Developer
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/web-development">
                      Hire Full Stack Developer
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/web-development">
                      Hire Backend Developer
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/web-development">
                      Hire React Developer
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/web-development">
                      Hire Django Developer
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <h3 className="mt-4">Portfolio</h3>
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 col-12">
              <div className="footer-col-cnt">
                <ul className="footer-nav sitemap">
                  <li>
                    <Link href="/case-studies/planet">Planet Fitness</Link>
                  </li>
                  <li>
                    <Link href="/case-studies/nextgen-tutorial">
                      Nextgen Tutorial
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 col-12">
              <div className="footer-col-cnt">
                <ul className="footer-nav sitemap">
                  <li>
                    <Link href="/case-studies/d-kare">D-kare</Link>
                  </li>
                  <li>
                    <Link href="#"> Shakti corporations</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 col-12">
              <div className="footer-col-cnt">
                <ul className="footer-nav sitemap">
                  <li>
                    <Link href="#">Physiocafe - Management system</Link>
                  </li>
                  <li>
                    <Link href="#">Expense Management system</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <h3 className="mt-4">Services</h3>
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 col-12">
              <div className="footer-col-cnt">
                <ul className="footer-nav sitemap">
                  <li>
                    <Link href="/services/startup-products">
                      Startup Product Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/web-development">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">Mobile App Development</Link>
                  </li>
                  <li>
                    <Link href="/services">Saas Development</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 col-12">
              <div className="footer-col-cnt">
                <ul className="footer-nav sitemap">
                  <li>
                    <Link href="/services">Saas Development</Link>
                  </li>
                  <li>
                    <Link href="/services">Custom Web Development</Link>
                  </li>
                  <li>
                    <Link href="/services">UI/UX Design</Link>
                  </li>
                  <li>
                    <Link href="/services">E-Commerce web Development</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 col-12">
              <div className="footer-col-cnt">
                <ul className="footer-nav sitemap">
                  <li>
                    <Link href="/services/web-development">
                      Hire Web Developer
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/web-development">
                      Hire Software Developer
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/web-development">
                      Hire Frontend Developer
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/web-development">
                      Hire Full Stack Developer
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/web-development">
                      Hire Backend Developer
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;
