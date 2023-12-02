"use client";
//relative path import
import Count from "@/components/Count/page";
import HireProcess from "@/components/HireProcess/page";
import PricingPlan from "@/components/Pricing Plan/page";
import Development from "@/components/TechStack/Development/page";
import HeroBanner1 from "@/components/TechStack/HeroSection/HeroBanner1";
//constant data import
import { tech_stack } from "@/helper/contant";

export default function TechStack({ params }) {
  const data = tech_stack.filter((e) => e.tech === params?.techstack);

  return (
    <div>
      <HeroBanner1
        image={data[0]?.hero?.img}
        heading={data[0]?.hero?.heading}
        title={data[0]?.hero?.title}
        description={data[0]?.hero?.description}
      />
      <div style={{ marginTop: 400 }}>
        <Development
          heading={data[0]?.development?.title}
          data={data[0]?.development?.data}
        />
      </div>
      <div style={{ marginTop: 100 }}>
        <Count />
      </div>
      <div style={{ marginTop: 100 }}>
        <PricingPlan />
      </div>
      <div style={{ marginTop: 100 }}>
        <HireProcess title={data[0]?.hero?.title} />
      </div>
    </div>
  );
}
