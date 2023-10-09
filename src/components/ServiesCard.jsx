import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";

const ServiesCard = ({ link, heading, image, paragraph }) => {
  return (
    <Link
      to={`/services/${link}`}
      className="h-full group relative transition-all py-8 px-6 hover:-translate-y-2 hover:bg-[white] hover:shadow-xl text-xl block bg-lightGray rounded-xl"
    >
      <img src={image} className="h-32 rounded-xl mx-auto mb-4" alt="" />
      <BiChevronLeft
        className="absolute text-sky bottom-2 left-4 group-hover:-translate-x-4 transition-all"
        size={30}
      />

      <h2 className="font-semibold text-2xl mb-2 text-dark">{heading}</h2>
      <p className="text-darkGray">{paragraph}</p>
    </Link>
  );
};

export default ServiesCard;
