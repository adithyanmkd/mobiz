type PropsType = {
  classname?: string;
  label: string;
};

const Button = ({ label, classname = "" }: PropsType) => {
  return (
    <div>
      <button
        className={`mb-3 mt-3 rounded-full bg-[#C42D27] px-8 py-3 text-sm font-bold text-white hover:bg-[#9b201c] ${classname}`}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
