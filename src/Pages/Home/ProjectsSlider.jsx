import Slider from "react-slick";
import {
  BiLogOut,
  BiSolidChevronLeft,
  BiSolidChevronRight,
} from "react-icons/bi";
import { Link } from "react-router-dom";
const ProjectsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-[#dfdfdf] relative  productSlider ">
      <div className="heading absolute z-10 w-full top-0  my-10">
        <h2>
          على مدار 10 سنوات ساهمنا في قصص نجاح العديد من المشاريع على الإنترنت
          والآن حان الوقت لبدء قصة نجاح مشروعك
        </h2>
        <p>
          تقدم ويب ستدى خدمات متعددة فى مجال التصميم والبرمجة والتسويق، تعرف على
          بعض اعمالنا
        </p>
      </div>
      <Slider {...settings}>
        <div className="bg-lightGray py-12">
          <div className="heading z-10 w-full top-0 opacity-0 ">
            <h2>
              على مدار 10 سنوات ساهمنا في قصص نجاح العديد من المشاريع على
              الإنترنت والآن حان الوقت لبدء قصة نجاح مشروعك
            </h2>
            <p>
              تقدم ويب ستدى خدمات متعددة فى مجال التصميم والبرمجة والتسويق، تعرف
              على بعض اعمالنا
            </p>
          </div>
          <div className="container flex lg:flex-row flex-col-reverse items-center">
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-semibold hidden lg:block">
                Enjaz Fawry
              </h2>
              <p className="text-sm line-clamp-3">
                أول منصه إلكترونية متخصصه في مجال التعقيب بكل إحترافيه تحفظ حق
                العميل تخدم انجاز المعاملات في وزارة التجارة ومكتب العمل والعمال
                والأستقدام والجوازات وادارة الوافدين والمرور والبلديات والشؤون
                الصحية ووزارة الخارجية وغيرها على سبيل المثال لا الحصر
              </p>
              <div className="flex items-center justify-center mt-4">
                <a href="" className="px-6 py-1 rounded-md blueGradient">
                  زيارة الموقع
                </a>
                <Link className="px-6 flex gap-2 items-center py-1 rounded-md">
                  اعرف المزيد
                  <BiLogOut />
                </Link>
              </div>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-2xl lg:hidden font-semibold text-center mb-6">
                Enjaz Fawry
              </h2>

              <img
                className="w-full"
                src="https://webstdy.com/storage/projects/6220e3d2074681646322642.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </Slider>
      <div style={{ direction: "rtl" }} className="absolute bottom-12 right-12">
        <button
          onClick={() => {
            document.querySelector(".productSlider .slick-next").click();
          }}
          className="bg-sky focus:bg-opacity-100 bg-opacity-50 hover:bg-opacity-100 transition-all text-[white] text-3xl rounded-r-xl"
        >
          <BiSolidChevronRight />
        </button>
        <button
          onClick={() => {
            document.querySelector(".productSlider .slick-prev").click();
          }}
          className="bg-sky focus:bg-opacity-100 bg-opacity-50 hover:bg-opacity-100 transition-all text-[white] text-3xl rounded-l-xl"
        >
          <BiSolidChevronLeft />
        </button>
      </div>
    </div>
  );
};

export default ProjectsSlider;
