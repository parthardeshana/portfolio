"use client";
export default function CustomArrow(props) {
  return (
    <div>
      {props.type === "next" ? (
        <button
          onClick={props.onClick}
          type="button"
          className="slick-next slick-arrow"
          aria-label="arrow-right"
        >
          <i className="bi bi-arrow-right"></i>
        </button>
      ) : (
        <button
          onClick={props.onClick}
          type="button"
          className="slick-prev slick-arrow"
          aria-label="arrow-left"
        >
          <i className="bi bi-arrow-left"></i>
        </button>
      )}
    </div>
  );
}
