import TeamImage from "../../assets/images/about/team-image.svg";

const TeamWork = () => {
  return (
    <div>
      <div className="relative h-[312px] overflow-auto">
        <img
          className="absolute -inset-40 top-0 h-[312px] w-[381px]"
          src={TeamImage}
          alt="team Image"
        />
      </div>
      <div className="mt-[22px] px-5">
        <h1 className="text-[34px] font-medium leading-[120%]">
          We believe in the power of{" "}
          <span className="text-[#DA3832]">Unity & Team Work</span>
        </h1>
      </div>
      <div className="relative mt-[22px] h-[312px] overflow-auto">
        <img
          className="absolute inset-40 top-0 h-[312px] w-[381px]"
          src={TeamImage}
          alt="team Image"
        />
      </div>
    </div>
  );
};

export default TeamWork;
