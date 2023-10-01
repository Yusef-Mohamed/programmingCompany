import AudioCard from "../../components/AudioCard";

const AudioReviews = () => {
  return (
    <div className="container py-12">
      <div className="heading">
        <h2>
          <b>
            هل رأيت هذا المستوى من رضا العملاء قبل ذلك؟ استمع بنفسك إلى آرائهم
          </b>
        </h2>
      </div>
      <div className="flex items-center justify-center flex-wrap mt-10">
        <div className="lg:w-[25%] md:w-1/3 sm:w-1/2 w-full p-4">
          <AudioCard />
        </div>
        <div className="lg:w-[25%] md:w-1/3 sm:w-1/2 w-full p-4">
          <AudioCard />
        </div>
        <div className="lg:w-[25%] md:w-1/3 sm:w-1/2 w-full p-4">
          <AudioCard />
        </div>
        <div className="lg:w-[25%] md:w-1/3 sm:w-1/2 w-full p-4">
          <AudioCard />
        </div>
        <div className="lg:w-[25%] md:w-1/3 sm:w-1/2 w-full p-4">
          <AudioCard />
        </div>
        <div className="lg:w-[25%] md:w-1/3 sm:w-1/2 w-full p-4">
          <AudioCard />
        </div>
      </div>
    </div>
  );
};

export default AudioReviews;
