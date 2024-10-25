type ArticleProps = {
  bgColor?: string;
  classname?: string;
  image: {
    src: string;
    alt: string;
  };
  heading: string;
  description: JSX.Element;
};

const Article = ({
  bgColor,
  classname = "",
  image,
  heading,
  description,
}: ArticleProps) => {
  return (
    <div className={bgColor}>
      <div className="mx-auto px-8 pb-8 sm:max-w-[500px] md:max-w-[800px] lg:mx-12 lg:max-w-screen-xl">
        <h2 className="pt-8 text-center text-3xl font-medium lg:text-4xl">
          {heading}
        </h2>
        <div className={`flex flex-col-reverse pt-6 lg:flex-row ${classname}`}>
          <div>
            <img
              className="mx-auto lg:max-w-[440px]"
              src={image.src}
              alt={image.alt}
            />
          </div>
          <div>
            <p className="flex h-full items-center px-4 pb-4 text-justify leading-[180%] text-[#3F3F3F]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
