import CareerHeader from "../molecules/CareerHeader";
import BenefitSection from "../organisms/BenefitSection";
import JobSection from "../organisms/JobSection";

const Career = () => {
  return (
    <div className="bg-red-500">
      <CareerHeader />
      <BenefitSection />
      <JobSection />
    </div>
  );
};

export default Career;
