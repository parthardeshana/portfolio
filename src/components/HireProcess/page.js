import Image from "next/image";
//images import
import ILL1 from "@/assets/images/Services/startup/ill-001.svg";
import ILL2 from "@/assets/images/Services/startup/ill-002.svg";
import ILL3 from "@/assets/images/Services/startup/ill-003.svg";
import ILL4 from "@/assets/images/Services/startup/ill-04.svg";

export default function HireProcess({ title }) {
  return (
    <section id="hire-block-block-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 text-center">
            <h2>
              Need {title} experts?
              <br />
              Hire ours in just 4 steps
            </h2>
          </div>
        </div>
        <div className="row hire-block-item-row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-12 p-0">
            <div className="hire-block-item-in">
              <h4>01</h4>
              <p>Send us your project requirements</p>
              <Image priority="true" alt="" className="img-fluid" src={ILL1} />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-12 p-0">
            <div className="hire-block-item-in">
              <h4>02</h4>
              <p>Select candidates with relevant domain expertise</p>
              <Image priority="true" alt="" className="img-fluid" src={ILL2} />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-12 p-0">
            <div className="hire-block-item-in">
              <h4>03</h4>
              <p>Interview candidates to ensure best fit</p>
              <Image priority="true" alt="" className="img-fluid" src={ILL3} />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-12 p-0">
            <div className="hire-block-item-in">
              <h4>04</h4>
              <p>Get them on &amp; speed up development</p>
              <Image priority="true" alt="" className="img-fluid" src={ILL4} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
