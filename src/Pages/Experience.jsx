import SectionTitle from '../Components/SectionTitle';
import ExperienceCard from '../Components/ExperienceCard';

function Experience() {
  return (
    <div id="experience" className="w-full overflow-hidden-web flex justify-center">
      {/* For small screens: min-h-[1300px], for large screens: min-h-[800px] */}
      <div className="w-full h-screen xl:w-[70%] relative mt-20 flex flex-col min-h-[1300px] lg:min-h-[800px]">
        {/* Section Title */}
        <div className="w-full h-[25%]">
          <SectionTitle title="EXPERIENCE" subtitle="Who I worked with so far" />
        </div>
        
        {/* Experience Cards */}
        <ExperienceCard />
      </div>
    </div>
  );
}

export default Experience;
