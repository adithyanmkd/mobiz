import HeaderImg from "../../assets/images/career/join_us.svg";
import Button from "../atoms/Button";

const CareerHeader = () => {
  return (
    <div className="relative flex items-center justify-center pt-[57px] lg:pt-0">
      <img
        className="w-screen object-cover lg:h-[550px]"
        src={HeaderImg}
        alt="career top image"
      />
      <div className="absolute text-center">
        <h1 className="text-[34px] font-semibold text-white md:text-4xl lg:text-5xl">
          JOIN US
        </h1>
        <p className="mt-4 text-xs text-[#C7C6C6] md:mt-6 md:text-sm">
          Join our team and the part of an amazing culture.
        </p>
        <Button
          classname="font-normal text-xs md:text-sm rounded-md"
          label="Join the team"
        />
      </div>
    </div>
  );
};

export default CareerHeader;
