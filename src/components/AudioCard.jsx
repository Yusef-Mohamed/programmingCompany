const AudioCard = () => {
  return (
    <div className="w-full  relative p-4 bg-[#f5f6f4] rounded-xl">
      <img
        src="https://webstdy.com/web-assets/images/waleed.jpg"
        className="w-[100px] absolute -top-[25px] -right-[15px] h-[100px] rounded-full border-2 border-sky"
        alt=""
      />
      <div className="pr-20">
        <h4 className="font-semibold text-lg text-dark">وليد عامر </h4>
        <p className="text-sm">مدير التسويق والتطوير- مجموعة صالح للسيارات</p>
      </div>
      <audio
        src=""
        controls
        preload="none"
        className="w-[90%] mt-4 mx-auto shadow-lg rounded-xl"
      ></audio>
    </div>
  );
};

export default AudioCard;
