import JobCard from "../molecules/JobCard";
import TextBlock from "../molecules/TextBlock";

const jobPropsContent = {
  heading: "career opening",
  miniHeading: "come join us",
  description:
    "We're always looking for creative, talented self-starters to join the Mobiz family. Check out our open roles below and fill out an application.",
  classname: "max-w-screen-lg lg:text-center",
};

const jobCardContent = [
  {
    jobName: ".Net MVC Angular Developers",
    experience: 1,
  },
  {
    jobName: "Python Django Developers",
    experience: 1,
  },
  {
    jobName: "Network Engineer",
    experience: 1,
  },
  {
    jobName: "MBA Marketing",
    experience: 1,
  },
];

const JobSection = () => {
  return (
    <div className="mt-3 bg-[#F5F5F5] px-5 pb-5 lg:bg-white">
      <div className="space-y-8">
        <TextBlock {...jobPropsContent} />
        {jobCardContent.map((data, index) => (
          <JobCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default JobSection;
