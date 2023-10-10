import TestCard from "../../components/TestCard";

const TextReviews = () => {
  return (
    <div className="container py-12">
      <div className="heading">
        <h2>
          <b>بعض أراء عملائنا عن جودة خدماتنا</b>
        </h2>
      </div>
      <div className="flex items-center justify-center flex-wrap mt-10">
        <div className="lg:w-1/3 md:w-1/2 w-full p-4">
          <TestCard
            name="يوسف عامل"
            text="في مشروعنا ندرك تمامًا أهمية الحلول البرمجية الفعّالة. لا يمكننا إغفال الكفاءة والدقة وسرعة الإنجاز التي يتمتع بها شريكنا شركة ديجيتال ديزان. نحن ملتزمون بشدة بهذه القناعة ونتطلع دائمًا إلى الاستفادة من مهاراته وإمكانياته لتطوير الحلول التقنية المناسبة لمشاريعنا الإلكترونية."
          />
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full p-4">
          <TestCard
            name="محمد وليد"
            text="شكر خاص لشركه ديجيتال ديزاين علي مساعدتها في نجاح وعمل موقعي الالكتروني من برمجه وتصميم وتصدره لمحركات البحث"
          />
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full p-4">
          <TestCard
            name="يوسف عامل"
            text="بفضل ابداع مصممين ديجيتال ديزاين وبراعه المسوقين اثمرت الحملة الاعلانية لصفحاتي وزادت مبيعاتي بشكل ملحوظ"
          />
        </div>
      </div>
    </div>
  );
};

export default TextReviews;
