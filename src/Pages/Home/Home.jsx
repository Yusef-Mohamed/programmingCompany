import ContactUs from "../../components/ContactUs";
import AudioReviews from "./AudioReviews";
import Clients from "./Clients";
import MainSec from "./MainSec";
import OurServices from "./OurServices";
import ProjectSteps from "./ProjectSteps";
import ProjectsSlider from "./ProjectsSlider";
import TextReviews from "./TextReviews";
import WhyChoseUs from "./WhyChoseUs";

const Home = () => {
  return (
    <>
      <MainSec />
      <WhyChoseUs />
      {/* <Clients /> */}
      <div className="bg-dark text-[white] font-semibold py-2">
        <div className="container">
          <p className="w-full text-center">
            ديجيتال ديزاينر شركة برمجيات تساعدك على الوصول لهدفك بأفضل الطرق
            الممكنة
          </p>
        </div>
      </div>
      <TextReviews />
      <OurServices />
      {/* <ProjectsSlider /> */}
      {/* <AudioReviews /> */}
      {/* <ProjectSteps /> */}

      <ContactUs />
      {/* <EmailSub /> */}
    </>
  );
};

export default Home;
