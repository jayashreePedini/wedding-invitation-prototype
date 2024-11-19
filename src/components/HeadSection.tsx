import leftElephant from "../assets/left-elephant.png";
import rightElephant from "../assets/right-elephant.png";
import couplesFrame from "../assets/couples-frame.png";

const HeadSection = () => {
  return (
    <section className="header-section w-full h-screen flex flex-col items-center justify-center">
      <div className="images flex bg-yellow-300">
        <img
          src={leftElephant}
          alt="Left Elephant"
          className="hidden md:block"
        />
        <img src={couplesFrame} alt="Couples Frame" />
        <img
          src={rightElephant}
          alt="Right Elephant"
          className="hidden md:block"
        />
      </div>
      <div className="content w-full flex flex-col items-center justify-center gap-8">
        <h1 className="main-font text-dark font-bold text-8xl sm:text-9xl text-center leading-none tracking-tighter italic">
          Arav & Aanya
        </h1>
        <p className="secondary-font text-center text-3xl text-medium">
          Together with their families, invite you to celebrate their union.
        </p>
      </div>
    </section>
  );
};

export default HeadSection;
