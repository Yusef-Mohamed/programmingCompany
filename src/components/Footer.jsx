import { FaLocationDot, FaMobileRetro } from "react-icons/fa6";
import { FaSnapchatSquare } from "react-icons/fa";
import { BiLogoWhatsapp, BiLogoTiktok } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="bg-dark text-[white]">
        <div className="container flex flex-col py-12 lg:grid gap-4 lg:grid-cols-4">
          <div className="flex justify-center lg:justify-start items-center">
            <div>
              <img
                className="my-8 w-[150px] mx-auto"
                src="https://webstdy.com/web/new-logos/footer-logo.svg"
                alt=""
              />
              <div className="flex gap-4 justify-center flex-wrap text-3xl">
                <RiTwitterXFill />
                <BsFacebook />
                <AiFillLinkedin />
                <AiOutlineInstagram />
                <FaSnapchatSquare />
                <BiLogoTiktok />
              </div>
            </div>
          </div>
          <div>
            <ul className="flex-col gap-4 flex items-center lg:items-start">
              <li className="flex gap-2 hover:text-sky transition-all items-center">
                <FaLocationDot />
                مجمع الهدلق التجاري، طريق أنس ابن مالك، الملقا، الرياض 13524
              </li>
              <li className="flex gap-2 hover:text-sky transition-all items-center">
                <FaMobileRetro />
                <a href="tel:966508650666">+966508650666</a>
              </li>
              <li className="flex gap-2 hover:text-sky transition-all items-center">
                <BiLogoWhatsapp size={20} />
                <a href="tel:966508650666">+966508650666</a>
              </li>
              <li className="flex gap-2 hover:text-sky transition-all items-center">
                <MdEmail />
                <a href="mailto:info@webstdy.com">info@webstdy.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-center lg:text-start">خدماتنا</h4>
            <ul className="flex gap-2 mt-3 flex-col items-center lg:items-start">
              <li>انشاء المواقع الالكترونية</li>
              <li>انشاء المواقع الالكترونية</li>
              <li>انشاء المواقع الالكترونية</li>
              <li>انشاء المواقع الالكترونية</li>
              <li>انشاء المواقع الالكترونية</li>
              <li>انشاء المواقع الالكترونية</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-center lg:text-start">خدماتنا</h4>
            <ul className="flex gap-2 mt-3 flex-col items-center lg:items-start">
              <li>انشاء المواقع الالكترونية</li>
              <li>انشاء المواقع الالكترونية</li>
              <li>انشاء المواقع الالكترونية</li>
              <li>انشاء المواقع الالكترونية</li>
              <li>انشاء المواقع الالكترونية</li>
              <li>انشاء المواقع الالكترونية</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <p className="text-darkGray py-2">
          © شركة ويب ستدي للبرمجيات, جميع الحقوق محفوظة 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;
