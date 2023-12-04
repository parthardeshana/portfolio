export default function CaseStudyHome({ title, description, img }) {
  return (
    <div
      className="case-study-banner rocket-lazyload lazyloaded case-study-banner-img"
      style={{
        background: `url(${img ?? "/assets/images/banner.jpg"})`,
        backgroundSize: "contain",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-12 banner-content">
            <div className="case-study-banner-left-box">
              <h2>{title}</h2>
              <p>{description} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
