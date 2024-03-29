import { useParams } from "react-router";
import { services } from "../servises";
import TextReviews from "./Home/TextReviews";

const ServiecPage = () => {
  const id = useParams().id;
  const serviec = services.filter((item) => item.id === id)[0];
  console.log(serviec);
  return (
    <>
      <div className="container">
        <div className="heading py-12">
          <h2>{serviec.heading}</h2>
          <p>{serviec.paragraph}</p>
        </div>
        <div className="flex items-center gap-4 lg:flex-row flex-col text-xl">
          <div className="lg:w-[50%]">
            <img src={serviec.image} className="w-full rounded-xl" alt="" />
          </div>
          <p className="lg:w-[50%]">{serviec.articel}</p>
        </div>
        <TextReviews />
        <div className="heading py-12">
          <h2>{serviec.listHeading}</h2>
        </div>
        <ul className="mb-8 flex flex-col gap-4">
          {serviec.list.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ServiecPage;
