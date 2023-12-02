import Image from "next/image";
export default function Development({ heading, data }) {
  console.log("data", data);
  return (
    <section id="ill-block-block-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="ill-block-head">
              <h2>{heading}</h2>
            </div>
          </div>
        </div>
        <div className="row ill-block-items">
          {data?.map((item, index) => {
            return (
              <div
                key={index}
                className={`col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 ${item?.class}`}
              >
                {item?.group?.map((e, index) => {
                  return (
                    <div className="ill-block-item-box" key={index}>
                      <span>
                        <Image
                          priority="true"
                          alt=""
                          className="img-fluid"
                          src={e?.image}
                        />
                      </span>
                      <h4>{e?.title}</h4>
                      <p>{e?.description}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
