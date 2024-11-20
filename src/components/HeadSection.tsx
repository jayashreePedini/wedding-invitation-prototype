import leftElephant from "../assets/left-elephant.png";
import rightElephant from "../assets/right-elephant.png";
import couplesFrame from "../assets/couples-frame.png";
import { Button } from "./ui/button";
import { SlCalender } from "react-icons/sl";

const HeadSection = () => {
  return (
    <section className="header-section w-full min-h-screen flex flex-col items-center justify-center sm:px-4 sm:py-10">
      <h1 className="uppercase para-font text-4xl font-bold text-medium">
        SAVE THE DATE
      </h1>
      <h2 className="main-font text-6xl lg:text-7xl text-dark font-extrabold">
        21 Jan 2025
      </h2>
      <div className="images mt-10 flex items-center justify-center">
        <img
          src={leftElephant}
          alt="Left Elephant"
          className="hidden md:block w-auto h-[150px] lg:h-[350px]"
        />
        <img
          src={couplesFrame}
          alt="Couples Frame"
          className="w-[480px] sm:w-[350px] md:w-[400px] lg:w-[500px]"
        />
        <img
          src={rightElephant}
          alt="Right Elephant"
          className="hidden md:block w-auto h-[150px] lg:h-[350px]"
        />
      </div>

      <div className="content w-full flex flex-col items-center justify-center gap-4 sm:gap-6">
        <h1 className="main-font text-dark font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center leading-none tracking-tighter italic px-2">
          Arav & Aanya
        </h1>
        <p className="secondary-font text-center text-xl sm:text-2xl lg:text-3xl text-medium px-4 max-w-3xl">
          Together with their families, invite you to celebrate their union.
        </p>
      </div>
    </section>
  );
};

export default HeadSection;
