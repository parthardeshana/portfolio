//relative path import
import ClientCTAReview from "@/components/ClientReview/page";

const CaseStudyReview = ({ name, designation, clientImage, review }) => {
  return (
    <div>
      <ClientCTAReview
        review={review}
        image={`/assets/images/client-images/${clientImage}`}
        name={name}
        designation={designation}
      />
    </div>
  );
};

export default CaseStudyReview;
