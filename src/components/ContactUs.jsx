import { FaLocationDot, FaMobileRetro } from "react-icons/fa6";
import { FaSnapchatSquare } from "react-icons/fa";
import { BiLogoWhatsapp, BiLogoTiktok } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div className="container py-12 items-center gap-8 flex flex-col lg:flex-row">
      <form className="lg:w-[50%] p-8 bg-[#e8e8e8] rounded-xl">
        <div>
          <label className="block">الاسم</label>
          <input
            type="text"
            className=" w-full px-4 py-1 rounded-md my-4 border-darkGray"
            name=""
          />
        </div>
        <div>
          <label className="block">البريد الالكتروني</label>
          <input
            type="text"
            className=" w-full px-4 py-1 rounded-md my-4 border-darkGray"
            name=""
          />
        </div>
        <div>
          <label className="block">رقم الهاتف</label>
          <input
            type="text"
            className=" w-full px-4 py-1 rounded-md my-4 border-darkGray"
            name=""
          />
        </div>
        <div>
          <label className="block">الرساله</label>
          <textarea className=" w-full px-4 py-1 rounded-md my-4 border-darkGray"></textarea>
        </div>
        <button
          type="submit"
          className="text-[white] px-6 py-1 rounded-md block mr-auto mt-10 w-fit blueGradient"
        >
          ارسال
        </button>
      </form>
      <div className="lg:w-[50%]">
        <h2 className="text-center font-semibold text-lg text-dark">
          تواصل معنا
        </h2>
        <p className="text-center text-sm text-darkGray mt-4">
          يمكنك معرفة القليل عنا هنا، لذا يمكنك الاتصال بنا مباشرة للرد على
          أسئلتك
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.6684503205174!2d29.97409143884482!3d31.229913752453673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4d4a65567f7%3A0xce124f05aef49ac3!2z2LLZhdiy2YUg2YXYp9ix2YPYqg!5e0!3m2!1sar!2seg!4v1696172472079!5m2!1sar!2seg"
          height="200"
          className="w-full my-12"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="flex w-fit mx-auto flex-col gap-4">
          <h4 className="font-semibold text-dark text-lg">السعودية</h4>

          <ul className="flex-col gap-4 flex">
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
            <li className="flex gap-2 hover:text-sky transition-all items-center">
              <RiTwitterXFill />
              <BsFacebook />
              <AiFillLinkedin />
              <AiOutlineInstagram />
              <FaSnapchatSquare />
              <BiLogoTiktok />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
