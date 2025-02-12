import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useEffect, useState } from "react";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-5 w-full">
      {technologies.map((technology) => (
        <div key={technology.name} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
          {isMobile ? (
            <div className="w-full h-full flex items-center justify-center bg-white rounded-full p-2">
              <img src={technology.icon} alt={technology.name} className="w-3/4 h-3/4 object-contain" />
            </div>
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
