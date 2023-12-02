import Image from "next/image";
import Link from "next/link";
// images import
import TRAIL_STRIP from "@/assets/images/trial-strip.svg";
//constant data import
import { pricing_plan } from "@/helper/contant";

export default function PricingPlan() {
  return (
    <section className="my-5">
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h4 className="text-pricing-plan">PRICING PLAN</h4>
            <h2 className="my-5">
              Our pricing plans, alongwith a <br />
              free trial of 2 weeks
            </h2>
          </div>
        </div>
        <div className="row">
          {pricing_plan.map((item, index) => {
            return (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 g-4">
                <div className="pricingTable">
                  <div className="pricing-man-title">
                    <Image
                      priority="true"
                      src={TRAIL_STRIP}
                      className="pricing-free-trial-strip lazyloaded"
                      width="99"
                      height="100"
                      alt=""
                    />
                    <h2>{item.plan}</h2>
                    <p>{item.description}</p>
                    <div className="start-from">STARTS FROM</div>
                    <div className="price-value">
                      <span className="currency">$</span>
                      <span className="amount">{item.price}</span>
                      <span className="month">USD</span>
                    </div>
                    <Link href="/inquire-now" className="pricingTable-signup">
                      GET STARTED
                    </Link>
                    <div className="free-trial">
                      Free Trial For 2 Weeks Available*
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
