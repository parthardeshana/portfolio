import Image from "next/image";

export default function ClientCTAReview({ review, image, name, designation }) {
  return (
    <div>
      <section id="case-study-testi">
        <svg
          width="100%"
          height={460}
          viewBox="0 0 1439 597"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          preserveAspectRatio="none"
          className="lgd:hidden"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            fill="#282A37"
            d="M-2 0H1439V486.724C1439 549.871 1385.95 600.055 1322.9 596.555L101.903 528.768C43.6099 525.532 -2 477.32 -2 418.938V0Z"
          />
        </svg>
        <section id="contact-testimonials">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 text-center ">
                <div className="contact-testimonials-cnt">
                  <p>{review}</p>
                  <div className="contact-tsti-aurthor">
                    <Image
                      alt=""
                      priority="true"
                      className="rounded-circle"
                      width={100}
                      height={80}
                      src={image}
                    />
                    <h2>
                      {name}
                      <span> {designation}</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
