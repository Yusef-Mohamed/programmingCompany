const EmailSub = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://webstdy.com/web/img/2022/webp/subscribe-bg.webp)",
      }}
    >
      <div className="container py-12 items-center flex flex-col lg:flex-row">
        <form className="lg:w-[50%] flex items-center">
          <input
            type="text"
            className="w-full  py-1 border border-darkGray rounded-r-lg"
            name=""
            id=""
          />
          <button className="h-full py-1 flex items-center border border-sky bg-sky text-[white] px-4 rounded-l-lg">
            اشتراك
          </button>
        </form>
        <div className="lg:w-[50%]">
          <img
            className="w-[200px] mx-auto"
            src="https://webstdy.com/web/img/2021/webp/subscribe-logo.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default EmailSub;
