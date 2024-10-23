import { OrbitingCirclesDemo } from "./orbit";
import { AboutCard } from "./dragzone";

const About = () => {
  return (
    <>
      <div
        className="mt-28 flex  lg-mx:flex-wrap lg-mx:flex-col-reverse justify-around items-center font-mono px-10 py-10 h-fit lg-mx:justify-between xs:gap-4"
        id="About"
      >
        <AboutCard />
        <OrbitingCirclesDemo />
      </div>
    </>
  );
};
export default About;
