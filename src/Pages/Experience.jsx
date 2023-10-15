import SectionTitle from "../Components/SectionTitle";
import ExperienceCard from "../Components/ExperienceCard";

const Experience = () => {
  return (
    <div id="experience" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-[800px] h-screen xl:w-[70%] relative mt-40 flex flex-col items-center justify-center pb-36">
        <div className="w-full h-[50%] mt-[-10%] mb-[-10%]">
          <SectionTitle title="EXPERIENCE" subtitle="Who I worked with so far" />
        </div>
        <ExperienceCard
          isDark={true}
        />
        
      </div>
    </div>
  );
};

export default Experience;
