import CareerHeader from "../molecules/CareerHeader";
import BenefitSection from "../organisms/BenefitSection";
import JobSection from "../organisms/JobSection";

const Career = () => {
  return (
    <div className="mb-4 bg-[#F5F5F5]">
      <CareerHeader />
      <BenefitSection />
      <JobSection />
    </div>
  );
};

export default Career;
