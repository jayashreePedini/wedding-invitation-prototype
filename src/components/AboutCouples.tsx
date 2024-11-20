import couples from "../assets/couples.jpg";
import { SlCalender } from "react-icons/sl";
import { Button } from "./ui/button";

const AboutCouples = () => {
  return (
    <section className="w-full min-h-screen px-4 sm:px-10 lg:px-40 py-10 sm:py-20 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10">
      <div
        className="left bg-black w-full sm:w-[40%] h-[300px] sm:h-[400px] lg:h-[700px] rounded-3xl overflow-hidden bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${couples})` }}
      ></div>
      <div className="right w-full sm:w-[60%] px-0 sm:px-10 lg:px-20">
        <h2 className="main-font text-3xl sm:text-4xl lg:text-5xl text-dark">
          Our Story
        </h2>
        <p className="para-font text-sm sm:text-base lg:text-lg text-medium mt-4 sm:mt-6 mb-8 sm:mb-16 lg:mb-20 w-full sm:w-[90%]">
          Ananya and Aarav's journey began at a college cultural fest, where
          their shared laughter turned into a lifelong connection. She is a
          passionate classical dancer and poet who finds joy in little moments,
          while he is a tech enthusiast with a knack for solving puzzles.
          <br />
          <br />
          Together, they balance tradition and modernity, creating a love story
          that feels both timeless and unique. Now, they invite you to join them
          in celebrating the beginning of their forever.
        </p>
        <h2 className="main-font text-3xl sm:text-4xl lg:text-5xl text-dark italic">
          21 Jan 2025
        </h2>
        <Button className="mt-4 sm:mt-5 uppercase bg-dark text-sm sm:text-base">
          Save the Date
          <SlCalender className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default AboutCouples;
