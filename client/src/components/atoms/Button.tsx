type PropsType = {
  classname?: string;
};

const Button = ({ classname = "" }: PropsType) => {
  return (
    <div>
      <button
        className={`rounded-full bg-[#C42D27] px-8 py-3 text-sm font-bold text-white hover:bg-[#9b201c] ${classname}`}
      >
        Join Our Team
      </button>
    </div>
  );
};

export default Button;
