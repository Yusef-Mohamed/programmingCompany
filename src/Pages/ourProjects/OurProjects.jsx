import {
  BiLogOut,
  BiSolidChevronLeft,
  BiSolidChevronRight,
} from "react-icons/bi";
import { Link } from "react-router-dom";
const OurProjects = () => {
  return (
    <>
      <div className="container">
        <div className="heading py-12">
          <h2>مشاريعنا</h2>
          <p>بعض كمن مشاريعنا في مجال البرمجيات والتسويق</p>
        </div>
      </div>{" "}
      <div className="bg-lightGray py-8">
        <div className="flex container flex-col gap-8 lg:flex-row">
          <div className="lg:w-[50%]">
            <h2 className="text-lg text-center lg:hidden sm:text-xl md:text-2xl lg:text-3xl font-bold text-dark mb-6">
              Saleh Group
            </h2>
            <img
              className="mx-auto"
              src="https://webstdy.com/storage/projects/6220e410cb50b1646322704.webp"
              alt=""
            />
          </div>
          <div className="lg:w-[50%]">
            <h2 className="hidden lg:block text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-dark mb-6">
              Saleh Group
            </h2>
            <p>
              بدأت مجموعة صالح للسيارات نشاطها في عام 1995 بالقليل من السيارات
              والكثير من الحماسة والأمل في المستقبل لنصبح بفضل الله أكبر موزع
              معتمد للسيارات بالمملكة لأكثر من 24 علامة تجارية هي الأكثر رواجاً
              بالسعودية واستطعنا بفضل الله اكتساب ثقة عملائنا كما حظينا بثقة
              القطاع الحكومي وكبرى الشركات التي اعتمدت علينا لتطوير أسطول
              السيارات لديها بالإضافة لمئات الآلاف من العملاء السعداء بخدماتنا
              على مر السنوات الماضية كان العمل مع مجموعة صالح مميزا نرشحهم بشده
              لعشاق السيارات باللمملكة.
            </p>
            <div className="flex items-center justify-start mt-4">
              <a href="" className="px-6 py-1 rounded-md blueGradient">
                زيارة الموقع
              </a>
              <Link className="px-6 flex gap-2 items-center py-1 rounded-md">
                اعرف المزيد
                <BiLogOut />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="flex container flex-col gap-8 lg:flex-row-reverse">
          <div className="lg:w-[50%]">
            <h2 className="text-lg text-center lg:hidden sm:text-xl md:text-2xl lg:text-3xl font-bold text-dark mb-6">
              Saleh Group
            </h2>
            <img
              className="mx-auto"
              src="https://webstdy.com/storage/projects/6220e410cb50b1646322704.webp"
              alt=""
            />
          </div>
          <div className="lg:w-[50%]">
            <h2 className="hidden lg:block text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-dark mb-6">
              Saleh Group
            </h2>
            <p>
              بدأت مجموعة صالح للسيارات نشاطها في عام 1995 بالقليل من السيارات
              والكثير من الحماسة والأمل في المستقبل لنصبح بفضل الله أكبر موزع
              معتمد للسيارات بالمملكة لأكثر من 24 علامة تجارية هي الأكثر رواجاً
              بالسعودية واستطعنا بفضل الله اكتساب ثقة عملائنا كما حظينا بثقة
              القطاع الحكومي وكبرى الشركات التي اعتمدت علينا لتطوير أسطول
              السيارات لديها بالإضافة لمئات الآلاف من العملاء السعداء بخدماتنا
              على مر السنوات الماضية كان العمل مع مجموعة صالح مميزا نرشحهم بشده
              لعشاق السيارات باللمملكة.
            </p>
            <div className="flex items-center justify-start mt-4">
              <a href="" className="px-6 py-1 rounded-md blueGradient">
                زيارة الموقع
              </a>
              <Link className="px-6 flex gap-2 items-center py-1 rounded-md">
                اعرف المزيد
                <BiLogOut />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProjects;
