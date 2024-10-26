import IntroImg from "../../assets/images/about/intro-img.svg";

const acheivements = [
  {
    count: "3.5",
    label: "Years Experience",
  },
  {
    count: "23",
    label: "Project Challenge",
  },
  {
    count: "830+",
    label: "Positive Reviews",
  },
  {
    count: "100K",
    label: "Trusted Clients",
  },
];

const AboutIntro = () => {
  return (
    <div className="px-5 pt-20">
      <div className="space-y-3 rounded-[28px] bg-white px-[38px] py-5">
        <h2 className="text-[34px] font-semibold">About Us</h2>
        <p className="text-grayText text-sm leading-[160%]">
          We Mobiz is a cutting-edge IT company specializing in mobile app
          development, internet solutions, website design, digital marketing,
          and bulk messaging services. Initially launched as a partnership by
          visionary individuals, the company now offers custom and packaged
          solutions for consumers, enterprises, and telecom operators globally.
        </p>
      </div>
      <div className="mt-[30px] space-y-6">
        <div>
          <img src={IntroImg} alt="intro img" />
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {acheivements.map((value, index) => (
            <div key={index} className="h-[90px] rounded-lg bg-white px-5 py-5">
              <h2 className="text-[26px] font-semibold">{value.count}</h2>
              <p className="text-grayText text-xs">{value.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
