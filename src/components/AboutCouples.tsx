import couples from "../assets/couples.jpg";
import { SlCalender } from "react-icons/sl";
import { Button } from "./ui/button";

const AboutCouples = () => {
  return (
    <section className="w-full h-screen px-10 sm:px-40 py-20 flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-10">
      <div
        className="left bg-black sm:w-[40%] w-full h-full sm:h-full rounded-3xl overflow-hidden bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${couples})` }}
      ></div>
      <div className="right sm:w-[60%] px-0 sm:px-20">
        <h2 className="main-font text-5xl text-dark">Our Story</h2>
        <p className="para-font text-sm sm:w-[90%] text-medium sm:mt-3 sm:mb-20">
          Ananya and Aarav’s journey began at a college cultural fest, where
          their shared laughter turned into a lifelong connection. She is a
          passionate classical dancer and poet who finds joy in little moments,
          while he is a tech enthusiast with a knack for solving puzzles.
          <br />
          <br />
          Together, they balance tradition and modernity, creating a love story
          that feels both timeless and unique. Now, they invite you to join them
          in celebrating the beginning of their forever.
        </p>
        <h2 className="main-font text-5xl text-dark italic">21 Jan 2025</h2>
        <Button className="mt-5 uppercase bg-dark">
          Save the Date
          <SlCalender />
        </Button>
      </div>
    </section>
  );
};

export default AboutCouples;
