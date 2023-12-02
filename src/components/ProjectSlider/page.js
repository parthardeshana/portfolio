"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

//constant data import
import { case_study_data } from "@/helper/contant";
import { useRouter } from "next/navigation";

export default function Project() {
  const [data, setData] = useState(case_study_data);
  const router = useRouter();

  const handleProjectIndustry = (cindex) => {
    let tempArray = [...data];
    tempArray.forEach((ele, index) => {
      if (index === cindex) {
        tempArray[cindex].isSelected = true;
      } else {
        tempArray[index].isSelected = false;
      }
    });
    setData(tempArray);
  };

  return (
    <section>
      <div className="project-section-1">
        <div className="section.our-partners.industry-expertise-home-page-sec">
          <div className="container">
            <div className="row justify-content-center">
              <div>
                <p className="section-title">INDUSTRIES & PROJECTS</p>
                <p className="page-heading center mb-5">
                  Software Solutions for SMEs and Enterprises
                </p>
              </div>
            </div>
            <div className="row">
              <div className="container">
                <div className="row mt-50 industry-expertise-full-width industryExpertise">
                  <div className="col-12 col-lg-3 col-sm-4 mt-20">
                    <div className="nav flex-column nav-pills">
                      {data.map((item, index) => {
                        return (
                          <span
                            key={index}
                            onClick={() => handleProjectIndustry(index)}
                            style={{
                              color: item.isSelected ? "#ff6c23" : "#666",
                              cursor: "pointer",
                              padding: "0 0 21px",
                              width: "100%",
                              textTransform: "uppercase",
                              fontWeight: 500,
                              fontSize: 20,
                            }}
                          >
                            {item.name}
                          </span>
                        );
                      })}
                      <span
                        onClick={() => router.push("/case-studies")}
                        style={{
                          color: "#ff6c23",
                          cursor: "pointer",
                        }}
                      >
                        EXPLORE MORE
                      </span>
                    </div>
                  </div>
                  {data.map((item, index) => {
                    return (
                      <>
                        {item.isSelected && (
                          <div className="col-12 col-lg-9 col-sm-8" key={index}>
                            <section className="industry-expertise-sec-row">
                              <div className="row">
                                <div className="col-lg-5">
                                  <h2 className="title-industry-expe">
                                    {item.details.title}
                                  </h2>
                                  <p>
                                    {item.details.description}
                                    <button
                                      onClick={() =>
                                        router.push(
                                          `/case-studies/${item.details.pathname}`
                                        )
                                      }
                                      className="read-more-industry-expertise m-1"
                                    >
                                      Read More
                                    </button>
                                  </p>
                                  <div className="organiceme-row">
                                    <div className="organiceme-right">
                                      {item.details.tech_tag?.map(
                                        (e, index) => (
                                          <span key={index}>{e}</span>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-7">
                                  <div className="industry-expertise-right-img industryExpertiseMobileHide">
                                    <Image
                                      priority="true"
                                      src={item.details.img}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
