/* eslint-disable react/prop-types */



const CoverImage = ({cover, title, subTitle}) => {
  return (
    <div
      className="hero h-[600px] font-cinzel"
      style={{
        backgroundImage:
          `url(${cover})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5 font-semibold">
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
