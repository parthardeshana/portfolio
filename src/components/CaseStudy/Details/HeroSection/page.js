import Image from "next/image";
const HeroSection = ({
  PrimaryImage,
  title,
  description,
  // stacks,
  indrustyName,
}) => {
  return (
    <div>
      <section id="services-hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
              <div className="service-banner-left">
                <h2>{title}</h2>
                <p>{description}</p>
                <ul className="case-study-ul">
                  <li>
                    <h3>Industry</h3>
                    <span>{indrustyName}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
              <div className="service-banner-right">
                <Image
                  alt=""
                  priority="true"
                  src={PrimaryImage}
                  style={{ width: "100%", height: "100%" }}
                />
                {/* {stacks.length > 0 && (
                  <ul className="text-logos-style">
                    {stacks?.map((tech, index) => (
                      <li key={index}>
                        <img className="img-fluid" alt="" src={tech} />
                      </li>
                    ))}
                  </ul>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
