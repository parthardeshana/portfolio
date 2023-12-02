import Image from "next/image";
//constant data import
import { service_verticles } from "@/helper/contant";

export default function IndustryVerticles() {
  return (
    <section id="service-verticals">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-xs-12">
            <div className="service-verticals-head">
              <h2>Key Industry Verticals</h2>
              <p>
                We help businesses in different industries make an impact with
                our cutting-edge, result-driven and industry-specific solutions
                built using the latest technologies.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {service_verticles.map((item, index) => {
            return (
              <div
                className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12"
                key={index}
              >
                <div className="service-verticals-item-in">
                  <span>
                    <Image priority="true" src={item.img} alt="" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
