import TestCard from "../../components/TestCard";

const TextReviews = () => {
  return (
    <div className="container py-12">
      <div className="heading">
        <h2>
          <b>بعض أراء عملائنا عن جودة خدماتنا</b>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4   lg:grid-cols-3 mt-10">
        <div className="h-full">
          <TestCard
            name="يوسف عادل"
            text="في مشروعنا ندرك تمامًا أهمية الحلول البرمجية الفعّالة. لا يمكننا إغفال الكفاءة والدقة وسرعة الإنجاز التي يتمتع بها شريكنا شركة ديجيتال ديزان. نحن ملتزمون بشدة بهذه القناعة ونتطلع دائمًا إلى الاستفادة من مهاراته وإمكانياته لتطوير الحلول التقنية المناسبة لمشاريعنا الإلكترونية."
          />
        </div>
        <div className="h-full">
          <TestCard
            name="محمد وليد"
            text="شكر خاص لشركه ديجيتال ديزاين علي مساعدتها في نجاح وعمل موقعي الالكتروني من برمجه وتصميم وتصدره لمحركات البحث"
          />
        </div>
        <div className="h-full">
          <TestCard
            name="عبدالفتاح محمد"
            text="بفضل ابداع مصممين ديجيتال ديزاين وبراعه المسوقين اثمرت الحملة الاعلانية لصفحاتي وزادت مبيعاتي بشكل ملحوظ"
          />
        </div>
      </div>
    </div>
  );
};

export default TextReviews;
