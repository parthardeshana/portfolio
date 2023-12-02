import Image from "next/image";
export default function ProcessFlow({ data }) {
  return (
    <div className="process-block-items-main">
      <svg
        className="path-svg xld:hidden"
        width={1350}
        height={1151}
        viewBox="0 0 1350 1151"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#F36D45"
          strokeWidth={5}
          d="M-20 121C26.6667 198.667 164.4 357.8 342 373C564 392 693 226 773 154C853 82.0002 988 -10.9998 1136 5.00016C1284 21.0002 1356 113 1346 249C1336 385 1201 452 1136 466C1071 480 296 610 390 976C465.2 1268.8 813.667 1119.83 1035 1026.5"
        />
      </svg>
      <div className="process-block-items">
        {data.map((item, index) => {
          return (
            <div className="process-block-item" key={index}>
              <div className="process-block-item-in">
                <span>
                  <Image
                    priority="true"
                    className="ls-is-cached lazyloaded"
                    src={item.img}
                    alt=""
                  />
                </span>
                <h4 style={{ whiteSpace: "pre-line" }}>{item.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
