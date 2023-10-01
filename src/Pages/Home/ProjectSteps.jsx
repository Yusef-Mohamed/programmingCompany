const ProjectSteps = () => {
  const steps = [
    "تصميم واجهات المستخدم بشكل تفاعلي",
    "تصميم واجهات المستخدم بشكل تفاعلي",
    "تصميم واجهات المستخدم بشكل تفاعلي",
    "تصميم واجهات المستخدم بشكل تفاعلي",
    "تصميم واجهات المستخدم بشكل تفاعلي",
    "تصميم واجهات المستخدم بشكل تفاعلي",
    "تصميم واجهات المستخدم بشكل تفاعلي",
    "تصميم واجهات المستخدم بشكل تفاعلي",
  ];
  return (
    <div className="bg-lightGray py-12">
      <div className="container">
        <div className="heading">
          <h2>
            7 خطوات فقط بينك وبين تحويل فكرتك إلى مشروع كامل، والخطوة الثامنة
            لضمان تشغيله على الوجه الأمثل
          </h2>
        </div>
        <div className="lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3  gap-4 mt-8 grid">
          {steps.map((step, ind) => (
            <div
              className="bg-sky rounded-xl flex items-center shadow"
              key={ind}
            >
              <div className="px-4  text-[white] font-semibold text-xl">
                {ind + 1}
              </div>
              <p className="bg-[white] py-1 h-full w-full px-4 rounded-xl">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSteps;
