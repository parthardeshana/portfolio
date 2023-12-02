import Image from "next/image";
//images import
import PlusIcon from "@/assets/images/plus-icon.svg";
import FaqsList from "@/assets/JsonData/Faqs.json";
export default function FAQS() {
  const question = ({ id, question, Ans }) => {
    return (
      <div className="col-lg-12 col-xs-12" key={id}>
        <div className="faq-accordions">
          <div
            className="accordion accordion-flush"
            id={`accordionFlushExample${id}`}
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse${id}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse${id}`}
                >
                  <span>
                    {" "}
                    <em>
                      {" "}
                      <Image priority="true" src={PlusIcon} alt="" />{" "}
                    </em>
                  </span>
                  {question}
                </button>
              </h2>
              <div
                id={`flush-collapse${id}`}
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent={`#accordionFlushExample${id}`}
              >
                <div className="accordion-body">{Ans}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <section id="faq-block-block-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h2>Frequently Asked Questions</h2>
            </div>
          </div>
          <div className="row">{FaqsList.map((faq) => question(faq))}</div>
        </div>
      </section>
    </div>
  );
}
