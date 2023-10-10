import quote from "../assets/quote.png";
const TestCard = ({ text, name }) => {
  return (
    <div className="w-full items-stretch p-4 bg-[#f5f6f4] h-full rounded-xl">
      <div className="pt-4 text-center pb-6 ">
        <h4 className="font-semibold text-lg text-dark">{name}</h4>
      </div>
      <p className=" text-textGray relative m-6">
        <img
          className="absolute -top-[10px] w-[15px] -right-[20px]"
          src={quote}
          alt=""
        />
        <img
          className="absolute rotate-180 w-[15px] -bottom-[10px] -left-[20px]"
          src={quote}
          alt=""
        />
        {text}
      </p>
    </div>
  );
};

export default TestCard;
