type BenefitCardProps = {
  icon: {
    src: string;
    alt: string;
  };
  heading: string;
  description: string;
};

const BenefitCard = ({ icon, heading, description }: BenefitCardProps) => {
  return (
    <div className="max-w-[320px] bg-white px-[15px] py-[15px]">
      <img src={icon.src} alt={icon.alt} />
      <h6 className="mt-2 text-lg font-bold capitalize">{heading}</h6>
      <p className="mt-4 font-light text-[#4B4B4B]">{description}</p>
    </div>
  );
};

export default BenefitCard;
