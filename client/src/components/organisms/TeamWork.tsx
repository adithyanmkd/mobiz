import duoImage from "../../assets/images/ourTeam/duo-image.svg";

const TeamWork = () => {
  return (
    <div className="lg:flex">
      <div className="relative h-[312px] w-full overflow-hidden lg:mt-[22px]">
        <img
          className="absolute -left-40 h-[312px] md:-left-36 lg:max-w-[150%]"
          src={duoImage}
          alt="team Image"
        />
      </div>
      <div className="px-5">
        <h1 className="mx-auto mt-2 text-[34px] font-medium md:max-w-xl md:text-center lg:text-[48px]">
          We believe in the power of
          <span className="ml-2 text-[#DA3832]">Unity & Team Work</span>
        </h1>
        <p className="mx-auto mt-3 text-justify text-sm leading-[160%] text-grayText md:max-w-2xl lg:max-w-full lg:text-center lg:text-base">
          Our team at We Mobiz is composed of skilled, motivated professionals
          with extensive industry experience. We deliver customized solutions
          that drive significant revenue growth for our clients. We believe
          people are the heart of any company, and our success stems from the
          expertise and mindset of our employees.
        </p>
      </div>
      <div className="relative mt-[22px] h-[312px] w-full overflow-hidden">
        <img
          className="absolute -right-36 top-0 h-[312px] w-[381px] lg:max-w-[150%]"
          src={duoImage}
          alt="team Image"
        />
      </div>
    </div>
  );
};

export default TeamWork;
