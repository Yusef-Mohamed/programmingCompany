import ServiesCard from "../../components/ServiesCard";
import { services } from "../../servises";

const OurServices = () => {
  return (
    <div className="py-12 container">
      <div className="heading">
        <h2>
          نوفر لك جميع الخدمات التي تحتاجها لتحقيق أهداف مشروعك على الإنترنت
        </h2>
        <p>
          شركة ديجيتال ديزاينر تقدم لك حلول مبتكرة تجعل شركتك مستعدة لمواكبة
          العالم الرقمي، توسع قاعدة عملائك وتضعك دائما في المقدمة.
        </p>
      </div>
      <div className="justify-center gap-y-4 flex flex-wrap">
        {services.map((item, ind) => (
          <div className=" w-full md:w-1/2 lg:w-1/3 px-4" key={ind}>
            <ServiesCard
              image={item.image}
              heading={item.heading}
              paragraph={item.paragraph}
              link={item.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
