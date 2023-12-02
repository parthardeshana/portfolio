import Image from "next/image";
export default function CaseStudySlideA({ name, image, description, to }) {
  return (
    <div className="slide">
      <div className="casestudies-card">
        <h3>{name}</h3>
        <div
          className="casestudies-card-cnt"
          style={{
            background: "#f41946",
            borderRadius: "12px 60px 12px 60px",
          }}
        >
          <Image className="img-fluid" priority="true" alt="" src={image} />
          <div className="casestudies-card-text">
            <p>{description}</p>
            <a href={to}>
              <span>Read More</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
