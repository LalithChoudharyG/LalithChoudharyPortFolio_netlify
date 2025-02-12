import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-5 w-full">
      {technologies.map((technology) => (
        <div key={technology.name} className="w-[90px] h-[90px] sm:w-28 sm:h-28">
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
