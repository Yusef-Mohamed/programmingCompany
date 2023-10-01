const TestCard = () => {
  return (
    <div className="w-full  relative p-4 bg-[#f5f6f4] rounded-xl">
      <img
        src="https://webstdy.com/web-assets/images/waleed.jpg"
        className="w-[100px] absolute -top-[25px] -right-[15px] h-[100px] rounded-full border-2 border-sky"
        alt=""
      />
      <div className="pt-10 text-center pb-6">
        <h4 className="font-semibold text-lg text-dark">وليد عامر </h4>
        <p>مدير التسويق والتطوير- مجموعة صالح للسيارات</p>
      </div>
      <p className=" text-textGray relative m-6">
        <img
          className="absolute -top-[10px] w-[15px] -right-[20px]"
          src="https://webstdy.com/web-assets/icons/quote-right.png"
          alt=""
        />
        <img
          className="absolute rotate-180 w-[15px] -bottom-[10px] -left-[20px]"
          src="https://webstdy.com/web-assets/icons/quote-right.png"
          alt=""
        />
        نحن في مجموعة تسويق الشرق الأوسط عندما نفكر في الحلول البرمجية لا يمكننا
        تجاهل الكفاءة والدقة وسرعة الإنجاز التي يتميز بها شريكنا التقني الدائم
        المهندس محمود نبيل، ومازلنا نؤكد هذه القناعة ولا نتردد في الاستفادة من
        مهاراته وإمكاناته لوضع الحلول التقنية المناسبة لمشاريعنا الالكترونية.
      </p>
    </div>
  );
};

export default TestCard;
