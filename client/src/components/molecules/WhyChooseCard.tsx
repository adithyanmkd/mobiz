type CardType = {
  src: string;
  heading: string;
  description: string;
};

const WhyChooseCard = ({ src, heading, description }: CardType) => {
  return (
    <div className="px-5">
      <div className="mb-2 mt-4 grid h-[288px] items-center rounded-2xl bg-[#262626] px-6 py-4">
        <div>
          <img src={src} alt="expertise icon" />
          <h4 className="pt-6 text-white">{heading}</h4>
          <p className="pt-2 text-[#A1A1A1]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseCard;
