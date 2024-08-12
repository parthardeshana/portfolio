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
  // console.log("params:::", params);
  // const data =
  //   caseData.length &&
  //   caseData?.filter((e) => e.brand === params.studiesdetails);
  // const banner =
  //   caseData.length &&
  //   caseData?.filter((e) => e.details.pathname === params.studiesdetails);
  // console.log("17<><>", data);

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
            {/* <CaseStudyHome
              img={banner[0].details.img.src}
              title={banner[0].details.title}
              techStack={banner[0].details.tech_tag}
              // description="Reduce development costs to increase profits without compromise. With a huge pool of talented and experienced technology experts."
            /> */}
            <CaseStudyHome
              img={caseData?.introduction?.image}
              title={caseData?.introduction?.title}
              techStack={caseData?.techStack}
            />
          </section>
          {/* <HeroSection
            title={data[0].hero.title}
            description={data[0].hero.description}
            PrimaryImage={data[0].hero.img}
            stacks={[]}
            indrustyName={data[0].hero.industry_type}
          /> */}

          <HeroSection
            title={caseData?.introduction?.title}
            description={caseData?.introduction?.descriptions}
            PrimaryImage={caseData?.introduction.image}
            indrustyName={caseData?.introduction?.industry}
          />

          {/* backstory  */}
          {/* <Alpha
            id={data[0].backStory?.id}
            name={data[0].backStory?.title}
            image={data[0].backStory?.img}
            description={data[0].backStory?.description}
          /> */}
          <Alpha
            name={caseData?.backstory.title}
            image={caseData?.backstory?.image}
            description={caseData?.backstory?.descriptions}
          />
          {/* challange */}
          {/* <Beta
            id={data[0].challange?.id}
            name={data[0].challange?.title}
            image={data[0].challange?.img}
            description={data[0].challange?.description}
          /> */}
          {/* <HomeBanner /> */}
          {/* solution */}
          {/* <Alpha
            id={data[0].solution?.id}
            name={data[0].solution?.title}
            image={data[0].solution?.img}
            description={data[0].solution?.description}
          /> */}
          {/* result */}
          {/* <Beta
            id={data[0].result?.id}
            name={data[0].result?.title}
            image={data[0].result?.img}
            description={data[0].result?.description}
          /> */}
        </>
      )}
    </>
  );
}
