import HeroImage from "../../assets/images/hero-section-image.svg";

const HeroSection = () => {
  return (
    <div className="mx-auto max-w-screen-xl flex-col pt-20 lg:flex lg:flex-row lg:px-12">
      <div className="mx-auto max-w-[324px] sm:max-w-[400px] md:max-w-[550px]">
        <h1 className="text-center text-[30px] font-bold leading-[130%] sm:text-[34px] md:text-[38px] lg:text-left">
          A Software House With Human Touch!
        </h1>
        <p className="mt-[28px] px-4 font-light leading-[160%] text-[#65737E] lg:px-0">
          At Mobiz, we believe that people are the heart of any company.
          They&apos;re the main driving force behind its business success. The
          capabilities of a software development company, its brain and muscle,
          are in the mindset and experience of its employees.
        </p>
      </div>
      <div className="mx-auto mt-[45px] max-w-[324px] sm:max-w-[400px] md:max-w-[550px] lg:mr-auto">
        <img
          className="mx-auto lg:mr-auto"
          src={HeroImage}
          alt="hero section image"
        ></img>
      </div>
    </div>
  );
};

export default HeroSection;
