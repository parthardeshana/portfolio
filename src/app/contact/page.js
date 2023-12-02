"use client";
//import images
import NEXTGENCLIENT from "@/assets/images/client-images/Nextgen_client_img.png";

//relative path import
import FAQS from "@/components/FAQuestion/page";
import CTAForm from "@/components/CTAForm/page";
import ClientCTAReview from "@/components/ClientReview/page";

export default function Contact() {
  return (
    <>
      <div style={{ backgroundColor: "#e7f1f7" }}>
        <section style={{ paddingTop: 200 }}>
          <CTAForm
            title1="PARTNER FOR YOUR PROJECT?"
            title2="WE ARE READY!"
            subtitle="GET QUAOTE"
          />
        </section>
        <section id="contact-next">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12">
                <div className="contact-next-header text-center">
                  <h2>What happens next?</h2>
                  <p>
                    You are a step closer to developing your digital product!
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-12">
                <div className="contact-next-col-cnt">
                  <h3>Consult</h3>
                  <p>
                    We sit with you to discuss the tech stack, architecture,
                    budget and timeline of your project through a free
                    consultation call.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-12">
                <div className="contact-next-col-cnt">
                  <h3>Connect</h3>
                  <p>
                    Our tech team will connect with you & walk you through the
                    tech stack used to transform your vision into an amazing
                    product.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-12">
                <div className="contact-next-col-cnt">
                  <h3>Onboard</h3>
                  <p>
                    After we sign up, our team will be onboard to kickstart your
                    project & deliver it with the highest quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ClientCTAReview
        review="TechniThunder's e-learning platform is a game-changer! The
                    courses are comprehensive, well-structured, and delivered in
                    an engaging manner. Highly recommended!"
        image={NEXTGENCLIENT}
        name="Tarang P."
        designation="CTO at Nextgen Tutorial"
      />
      <FAQS />
    </>
  );
}
