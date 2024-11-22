type TextBlockProps = {
  heading: string;
  miniHeading: string;
  description: string;
  classname?: string;
};

const TextBlock = ({
  heading,
  miniHeading,
  description,
  classname = "",
}: TextBlockProps) => {
  return (
    <div className={`pt-[30px] lg:bg-white`}>
      <div
        className={`mx-auto max-w-xl md:text-center lg:text-left ${classname}`}
      >
        <p className="font-medium uppercase text-[#002752]">{miniHeading}</p>
        <h2 className="mt-px text-[28px] font-bold capitalize leading-[120%] md:text-3xl lg:text-[28px]">
          {heading}
        </h2>
        <p className="mt-4 text-sm leading-[160%] text-[#4B4B4B]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TextBlock;
