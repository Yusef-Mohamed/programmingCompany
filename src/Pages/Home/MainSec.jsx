import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import Clients from "./Clients";
import main from "../../assets/mainLanding.jpg";

const MainSec = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className=" relative flex items-center">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          style: {
            position: "absolute",
          },
          background: {
            color: {
              value: "#041b34",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="w-full my-24 relative container lg:flex-row flex flex-col-reverse">
        <div className="py-10 p-4 w-full">
          <h1 className="text-3xl my-12 font-semibold text-[white] text-center">
            شركة برمجيات توفر لك تصميم مواقع و تصميم تطبيقات لتحقيق أهداف مشروعك
          </h1>
          <a
            href="#"
            className="blueGradient block w-fit mx-auto text-[white] px-6 py-1 rounded-xl"
          >
            إبدأ أول خطوة
          </a>
        </div>
        <div className="w-full">
          <img
            className="hidden md:block w-[50%] lg:w-[90%] mx-auto"
            src={main}
            alt=""
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default MainSec;
