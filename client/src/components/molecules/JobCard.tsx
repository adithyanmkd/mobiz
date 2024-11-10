import RightArrow from "../../assets/icons/career/right-arrow.svg";

type JobProps = {
  jobName: string;
  experience: number;
};

const JobCard = ({ jobName, experience }: JobProps) => {
  return (
    <div className="mx-auto items-center justify-between bg-white p-[10px] shadow-md transition-colors md:max-w-[660px] lg:flex lg:max-w-3xl">
      <div className="w-full">
        <p className="text-lg font-medium">{jobName}</p>
      </div>
      <div className="mt-3 flex w-full justify-between">
        <p className="text-xs font-medium text-[#B2B2B2]">
          Experience
          <span className="block text-lg text-black">{experience} Years</span>
        </p>
        <img className="mr-4 w-[18px]" src={RightArrow} alt="right arrow" />
      </div>
    </div>
  );
};

export default JobCard;
