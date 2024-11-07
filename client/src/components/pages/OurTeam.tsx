import TeamImg from "../../assets/images/ourTeam/team-photo.png";
import GroupPoeple from "../../assets/images/ourTeam/group-people.svg";

import TeamWork from "../organisms/TeamWork";
import Button from "../atoms/Button";

const OurTeam = () => {
  return (
    <div>
      <div className="relative pt-[57px]">
        <img
          className="brightness-[.9] lg:h-[700px] lg:w-screen"
          src={TeamImg}
          alt="team photo"
        />
        <h1 className="absolute left-1/2 top-20 -translate-x-1/2 transform text-[34px] font-semibold text-white sm:text-4xl md:mt-10 md:text-5xl">
          Our Team
        </h1>
      </div>
      <div className="mt-8">
        <TeamWork />
      </div>
      <div className="mb-4 mt-8">
        <img
          className="relative lg:-left-28 lg:rounded-r-full"
          src={GroupPoeple}
          alt="group of people"
        />
        <div className="mx-auto max-w-screen-lg px-5">
          <h2 className="mt-8 text-[34px] font-bold">Creative People</h2>
          <p className="mt-3 text-justify text-sm leading-[160%] text-grayText">
            Our team consists of highly competent and motivated professionals
            with very good industry experience and knowledge. Mobiz's back bone
            is our experienced development team. They develop excellent apps,
            responsive websites, portals and e commerce sites. Our development
            team challenge themselves to build extraordinary experiences by
            bridging the latest strategy and design thinking with
            enterprise-grade software development. Our IT support engineers are
            responsible for addressing the company's tech
          </p>
          <Button label="Join Us" classname="rounded-[5px] font-normal" />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
