import AboutIntro from "../molecules/AboutIntro";
import TeamWork from "../organisms/TeamWork";

const About = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <AboutIntro />
      <div className="mt-8">
        <TeamWork />
      </div>
    </div>
  );
};

export default About;
