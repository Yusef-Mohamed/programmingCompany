import ServiesCard from "../../components/ServiesCard";

const OurServices = () => {
  const services = [
    {
      heading: "إنشاء المواقع الإلكترونية",
      image: "https://webstdy.com/storage/services/6220e75a2d5f51646323546.svg",
      paragraph:
        "موقعك على الإنترنت هو نافذة رئيسية تقدم شركتك إلى العالم، لذا نعمل باحترافية على تصميم وتطوير تجربة إلكترونية فريدة لجمهورك عبر موقعك تلبي احتياجاتهم، وتجعلهم لا يملون قضاء وقت أطول",
      link: "/test",
    },
    {
      heading: "إنشاء المواقع الإلكترونية",
      image: "https://webstdy.com/storage/services/6220e75a2d5f51646323546.svg",
      paragraph:
        "موقعك على الإنترنت هو نافذة رئيسية تقدم شركتك إلى العالم، لذا نعمل باحترافية على تصميم وتطوير تجربة إلكترونية فريدة لجمهورك عبر موقعك تلبي احتياجاتهم، وتجعلهم لا يملون قضاء وقت أطول",
      link: "/test",
    },
    {
      heading: "إنشاء المواقع الإلكترونية",
      image: "https://webstdy.com/storage/services/6220e75a2d5f51646323546.svg",
      paragraph:
        "موقعك على الإنترنت هو نافذة رئيسية تقدم شركتك إلى العالم، لذا نعمل باحترافية على تصميم وتطوير تجربة إلكترونية فريدة لجمهورك عبر موقعك تلبي احتياجاتهم، وتجعلهم لا يملون قضاء وقت أطول",
      link: "/test",
    },
    {
      heading: "إنشاء المواقع الإلكترونية",
      image: "https://webstdy.com/storage/services/6220e75a2d5f51646323546.svg",
      paragraph:
        "موقعك على الإنترنت هو نافذة رئيسية تقدم شركتك إلى العالم، لذا نعمل باحترافية على تصميم وتطوير تجربة إلكترونية فريدة لجمهورك عبر موقعك تلبي احتياجاتهم، وتجعلهم لا يملون قضاء وقت أطول",
      link: "/test",
    },
    {
      heading: "إنشاء المواقع الإلكترونية",
      image: "https://webstdy.com/storage/services/6220e75a2d5f51646323546.svg",
      paragraph:
        "موقعك على الإنترنت هو نافذة رئيسية تقدم شركتك إلى العالم، لذا نعمل باحترافية على تصميم وتطوير تجربة إلكترونية فريدة لجمهورك عبر موقعك تلبي احتياجاتهم، وتجعلهم لا يملون قضاء وقت أطول",
      link: "/test",
    },
  ];
  return (
    <div className="py-12 container">
      <div className="heading">
        <h2>
          نوفر لك جميع الخدمات التي تحتاجها لتحقيق أهداف مشروعك على الإنترنت
        </h2>
        <p>
          شركة ويب ستدي للبرمجيات تقدم لك حلول مبتكرة تجعل شركتك مستعدة لمواكبة
          العالم الرقمي، توسع قاعدة عملائك وتضعك دائما في المقدمة.
        </p>
      </div>
      <div className="justify-center gap-y-4 flex flex-wrap">
        {services.map((item, ind) => (
          <div className=" w-full md:w-1/2 lg:w-1/3 px-4" key={ind}>
            <ServiesCard
              heading={item.heading}
              paragraph={item.paragraph}
              image={item.image}
              link={item.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
