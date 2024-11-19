import border3 from "../assets/border-3.png";
import om from "../assets/om.png";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const FooterSection = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center pt-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="main-font uppercase text-5xl text-dark">RSVP</h1>
        <img src={border3} alt="Border" />
      </div>
      <div className="mt-20 flex w-full max-w-sm items-center space-x-2">
        <Input
          type="email"
          placeholder="Please Enter Your Email"
          className="bg-light text-white placeholder:text-white outline-none focus:outline-none focus:ring-2 focus:ring-dark focus:border-dark"
        />
        <Button type="submit" className="uppercase bg-dark">
          Save
        </Button>
      </div>
      <p className="mt-20 para-font text-xl w-[60%] text-center text-medium">
        We're thrilled to share our special day with you! Should you have any
        questions or need further details, feel free to reach out to us. Your
        presence means the world, and we want to ensure you have all the
        information you need for a delightful celebration. Looking forward to
        celebrating together!
      </p>
      <img className="mt-20" src={om} alt="Om" />
    </section>
  );
};

export default FooterSection;
