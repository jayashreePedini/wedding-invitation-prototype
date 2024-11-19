import border1Up from "../assets/border-1-up.png";
import border1Down from "../assets/border-1-down.png";
import uncle from "../assets/uncle.png";

const InviteSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-between py-8 sm:py-12 lg:py-16 px-4">
      <img
        src={border1Up}
        alt="Border 1 Up"
        className="w-[200px] sm:w-[300px] lg:w-auto"
      />

      <img
        src={uncle}
        alt="Uncle"
        className="w-[200px] sm:w-[250px] lg:w-auto my-4 sm:my-8"
      />

      <h1 className="main-font italic text-dark font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center leading-none tracking-tighter px-2">
        You are Invited.
      </h1>

      <img
        src={border1Down}
        alt="Border 1 Down"
        className="w-[200px] sm:w-[300px] lg:w-auto"
      />
    </section>
  );
};

export default InviteSection;
