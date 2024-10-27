import Expertise from "../../assets/icons/whyChoose/expertise.svg";
import Solutions from "../../assets/icons/whyChoose/solutions.svg";
import Transparency from "../../assets/icons/whyChoose/transparency.svg";
import Development from "../../assets/icons/whyChoose/development.svg";

import Globe from "../../assets/images/whyChoose/globe.svg";
import WhyChooseCard from "../molecules/WhyChooseCard";

const cardData = [
  {
    src: Expertise,
    heading: "Expertise",
    description:
      "Our skilled team of developers, designers, and strategists has the know-how to produce high-quality apps that satisfy your business objectives.",
  },
  {
    src: Solutions,
    heading: "Custome Solutions",
    description:
      "We comprehend that each organization is distinct and needs a customized answer. We offer specialized solutions that satisfy your particular needs.",
  },
  {
    src: Transparency,
    heading: "Transparency",
    description:
      "You will always be aware of the status of your project because we value transparency and keep our clients updated throughout the development process.",
  },
  {
    src: Development,
    heading: "Agile Development",
    description:
      "Our agile development methodology enables us to quickly respond to shifting needs and deliver your software on schedule and within budget.",
  },
];

const WhyChoose = () => {
  return (
    <div className="pt-14">
      <div className="relative grid justify-center">
        <h1 className="max-w-[1011px] pb-5 pt-10 text-center text-[34px] font-semibold leading-[120%] text-white sm:px-8 sm:text-[38px] md:text-6xl">
          We go <span className="text-[#DA3832]">above</span> and
          <span className="text-[#DA3832]"> beyond</span> for our clients
        </h1>
        <img
          className="mx-auto w-full max-w-screen-md px-5 pt-1"
          src={Globe}
          alt="globe"
        />
        <div className="absolute -z-10 h-[80%] w-full rounded-b-[20px] bg-[#002E5B] md:h-[68%] md:rounded-b-[30px]"></div>
      </div>
      <div className="pb-6 pt-10">
        <h1 className="text-center text-[34px] font-semibold">Why Choose Us</h1>
        <div className="mx-auto grid max-w-screen-md md:grid-cols-2">
          {cardData.map((data, index) => (
            <WhyChooseCard key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
