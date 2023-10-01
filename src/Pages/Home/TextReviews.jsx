import TestCard from "../../components/TestCard";

const TextReviews = () => {
  return (
    <div className="container py-12">
      <div className="heading">
        <h2>
          <b>
            لا تكتفي بما نخبرك به عن جودة خدماتنا ولكن شاهد ما يقوله عملائنا
          </b>
        </h2>
      </div>
      <div className="flex items-center justify-center flex-wrap mt-10">
        <div className="lg:w-1/3 md:w-1/2 w-full p-4">
          <TestCard />
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full p-4">
          <TestCard />
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full p-4">
          <TestCard />
        </div>
      </div>
    </div>
  );
};

export default TextReviews;
