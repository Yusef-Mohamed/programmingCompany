import ContactUs from "../../components/ContactUs";
import EmailSub from "../../components/EmailSub";
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
      {/* <Clients /> */}
      <OurServices />
      <ProjectsSlider />
      <AudioReviews />
      <ProjectSteps />
      <TextReviews />
      <div className="bg-dark text-[white] font-semibold py-2">
        <div className="container flex lg:flex-row gap-2 flex-col items-center">
          <p className="w-full text-center lg:text-left">
            ويب ستدي شركة برمجيات تساعدك على الوصول لهدفك بأفضل الطرق الممكنة
          </p>
          <div className="w-full">
            <img
              className=" mx-auto"
              src="https://webstdy.com/web/img/2022/webp/start-project-bg.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <WhyChoseUs />
      <ContactUs />
      <EmailSub />
    </>
  );
};

export default Home;
