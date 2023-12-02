import Image from "next/image";
export default function CaseStudySlideB({ name, image, description, to }) {
  return (
    <div className="slide">
      <div className="casestudies-card">
        <div
          className="casestudies-card-cnt"
          style={{
            background: "#196cf3",
            borderRadius: "60px 12px 60px 12px",
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
        <h4>{name}</h4>
      </div>
    </div>
  );
}
