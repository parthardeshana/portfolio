"use client";
//relative path import
import HeroSection from "@/components/CaseStudy/Details/HeroSection/page";
import Alpha from "@/components/CaseStudy/Details/Alpha/page";
import Beta from "@/components/CaseStudy/Details/Beta/page";

//constant data import
import { caseStudy_list, case_study_data } from "@/helper/constant";
import CaseStudyHome from "@/components/CaseStudy/CaseStudyHome";
import CaseStudyHeader from "@/components/Header/CaseStudy/page";
import { useEffect, useState } from "react";
import { getSingleCaseStudy } from "@/api";

export default function CaseStudyDetails({ params }) {
  const [caseData, setCaseData] = useState(null);
  const decodedPathname = params?.studiesdetails?.replace(/-/g, " ");

  useEffect(() => {
    fetchSingleCaseStudy();
  }, [decodedPathname]);

  const fetchSingleCaseStudy = () => {
    console.log("decodedpathname", decodedPathname);

    getSingleCaseStudy(decodedPathname)
      .then((res) => {
        console.log("34><><>", res?.data?.data);
        if (res) {
          console.log("37useeefectlog", res?.data?.data);
          setCaseData(res?.data?.data);
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      {caseData && (
        <>
          <CaseStudyHeader />
          <section className="case-study-home-banner">
            <CaseStudyHome
              img={caseData?.coverImage}
              title={caseData?.introduction?.title}
              techStack={caseData?.techStack}
            />
          </section>

          <HeroSection
            title={caseData?.introduction?.title}
            description={caseData?.introduction?.descriptions}
            PrimaryImage={caseData?.introduction.image}
            indrustyName={caseData?.introduction?.industry}
          />

          <Alpha
            name={caseData?.backstory.title}
            image={caseData?.backstory?.image}
            description={caseData?.backstory?.descriptions}
          />

          <Beta
            image={caseData?.challenge?.image}
            description={caseData?.challenge.descriptions}
          />

          <Alpha
            image={caseData?.solution?.image}
            description={caseData?.solution?.descriptions}
          />

          <Beta
            image={caseData?.result?.image}
            description={caseData?.result?.descriptions}
          />
        </>
      )}
    </>
  );
}
