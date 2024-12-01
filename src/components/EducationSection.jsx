const EducationSection = ({ reference }) => {
  return (
    <div
      ref={reference}
      id="education"
      className="container flex flex-col lg:gap-8 gap-2"
    >
        <h1 className="lg:hidden block text-3xl font-semibold">Education</h1>
      <div className="w-full sm:p-4 py-4 px-0 flex gap-3 hover:shadow-lg hover:bg-gray-500/10 rounded-sm">
        <div className="w-1/4 text-center">
          2021 - <span className="sm:inline-block hidden">20</span>25
        </div>
        <div className="w-3/4">
          <h2 className="text-xl">
            Muzaffarpur Institute of Technlogy, Muzaffarpur
          </h2>
          <h3 className="text-base">Information Technology ( B.Tech )</h3>
          <h3 className="text-base">CGPA: 8.45</h3>
        </div>
      </div>
      <div className="w-full sm:p-4 py-4 px-0 flex gap-3 hover:shadow-lg hover:bg-gray-500/10 rounded-sm">
        <div className="w-1/4 text-center">
          2018 - <span className="sm:inline-block hidden">20</span>20
        </div>
        <div className="w-3/4">
          <h2 className="text-xl">Jawahar Navodaya Vidalaya, Ranti</h2>
          <h3 className="text-base">Intermediate (PCM) ( CBSE )</h3>
          <h3 className="text-base">Percentage: 92%</h3>
        </div>
      </div>
      <div className="w-full sm:p-4 py-4 px-0 flex gap-3 hover:shadow-lg hover:bg-gray-500/10 rounded-sm">
        <div className="w-1/4 text-center">
          2016 - <span className="sm:inline-block hidden">20</span>18
        </div>
        <div className="w-3/4">
          <h2 className="text-xl">Indian Public School, Madhubani</h2>
          <h3 className="text-base">Matriculation ( CBSE )</h3>
          <h3 className="text-base">Percentage: 82%</h3>
        </div>
      </div>
    </div>
  );
};
export default EducationSection;
