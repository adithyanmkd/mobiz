import TeamWorkIcon from "../../assets/icons/career/team-work.svg";
import SecuredFutureIcon from "../../assets/icons/career/secured-future.svg";
import LearningOpportunityIcon from "../../assets/icons/career/learning-opportunity.svg";
import UpgradeSkillIcon from "../../assets/icons/career/upgrade-skill.svg";

import BenefitsCard from "../molecules/BenefitCard";
import TextBlock from "../molecules/TextBlock";

const TextBlockContent = {
  classname: "lg:max-w-[439px]",
  heading: "why you should join our awesome team",
  miniHeading: "benefit",
  description:
    "At Mobiz, we pride ourselves on our positive and supportive company culture. We believe that a healthy and happy workplace leads to greater productivity and employee satisfaction.",
};

const BenefitCardPropsContent = [
  {
    icon: {
      src: TeamWorkIcon,
      alt: "team work icon",
    },
    heading: "team work",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellendus nemo",
  },
  {
    icon: {
      src: SecuredFutureIcon,
      alt: "secured future icon",
    },
    heading: "secured future",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellendus nemo",
  },
  {
    icon: {
      src: LearningOpportunityIcon,
      alt: "learning opportunity",
    },
    heading: "learning opportunity",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellendus nemo",
  },
  {
    icon: {
      src: UpgradeSkillIcon,
      alt: "upgrade skills",
    },
    heading: "upgrade skills",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellendus nemo",
  },
];

const BenefitSection = () => {
  return (
    <div className="bg-[#F5F5F5] px-5 pb-5">
      <div className="mx-auto max-w-screen-lg lg:flex">
        <TextBlock {...TextBlockContent} />
        <div className="mx-auto mt-[30px] max-w-xl space-y-3 md:grid md:max-w-[660px] md:grid-cols-2 md:place-items-center md:gap-6 md:space-y-0">
          {BenefitCardPropsContent.map((data, index) => (
            <BenefitsCard key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitSection;
