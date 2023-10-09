import EmailSub from "../../components/EmailSub";
import OurServices from "../Home/OurServices";
import TextReviews from "../Home/TextReviews";
import aboutus from "../../assets/whoweare.png";
import goals from "../../assets/goals.jpg";
const About = () => {
  return (
    <>
      <div className="container py-12">
        <div className="heading">
          <h2>من نحن</h2>
        </div>
        <div className="grid lg:grid-cols-2 items-center my-4 gap-4">
          <div>
            <p className="text-textGray">
              نحن الحاضر و المستقبل ...نحن صناع النجاح ... نحقق الرؤية... نبنى
              الافكار... نحقق الحلم ونجعله واقع ...
              <br />
              <br />
              نحن شركة ...... نركز بشكل أساسي على إرضاء العملاء والابتكار
              التكنولوجي نتطلع دائمًا إلى بناء علاقة دائمة بيننا وبين عملائنا
              الكرام لتقديم جودة عالية برضاء عالٍ.
              <br />
              <br />
              كفريق من المهنيين المهرة نهدف لتحقيق التميز في مجال تطوير مواقع
              الويب وتطبيقات الأجهزة المحمولة وتعظيم عائد الاستثمار للعميل
            </p>
          </div>{" "}
          <div>
            <img
              className="mx-auto border border-lightGray rounded-xl"
              src={aboutus}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container py-12">
        <div className="heading">
          <h2>قيمنا واهدافنا</h2>
        </div>
        <div className="grid lg:grid-cols-2 items-center gap-4 my-4">
          <div>
            <img
              className="mx-auto border w-full border-lightGray rounded-xl"
              src={goals}
              alt=""
            />
          </div>
          <div>
            <div>
              <h3 className="text-lg my-4 font-semibold">مهمتنا </h3>
              <p className="text-textGray">
                تعزيز العمليات التجارية لعملائنا من خلال تطوير أو تنفيذ منتجات
                وخدمات تكنولوجيا المعلومات المتميزة على مستوى العالم
              </p>
            </div>
            <div>
              <h3 className="text-lg my-4 font-semibold">قيمنا الأساسية </h3>
              <p className="text-textGray">
                تقديم خدمات مميزه فريده وبأسعار مناسبه تخدم عملائنا
              </p>
            </div>
          </div>
        </div>
      </div>
      <TextReviews />
      <OurServices />
    </>
  );
};

export default About;
