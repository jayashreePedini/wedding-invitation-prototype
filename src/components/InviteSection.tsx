import border1Up from "../assets/border-1-up.png";
import border1Down from "../assets/border-1-down.png";
import uncle from "../assets/uncle.png";

const InviteSection = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-between py-16">
      <img src={border1Up} alt="Border 1 Up" />
      <img src={uncle} alt="Uncle" />
      <h1 className="main-font italic text-dark font-bold text-8xl sm:text-9xl text-center leading-none tracking-tighter">
        You are Invited.
      </h1>
      <img src={border1Down} alt="Border 1 Down" />
    </section>
  );
};

export default InviteSection;
