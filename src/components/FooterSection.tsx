import border3 from "../assets/border-3.png";
import om from "../assets/om.png";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const FooterSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center px-4 py-10 sm:pt-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="main-font uppercase text-3xl sm:text-4xl lg:text-5xl text-dark text-center">
          RSVP
        </h1>
        <img src={border3} alt="Border" className="w-[200px] sm:w-auto" />
      </div>

      <div className="mt-10 sm:mt-20 flex w-full max-w-[320px] sm:max-w-sm items-center space-x-2">
        <Input
          type="email"
          placeholder="Please Enter Your Email"
          className="bg-light text-white placeholder:text-white border-dark outline-dark focus:outline-none focus:ring-2 focus:ring-dark focus:border-dark text-sm sm:text-base"
        />
        <Button type="submit" className="uppercase bg-dark whitespace-nowrap">
          Save
        </Button>
      </div>

      <p className="mt-10 sm:mt-20 para-font text-base sm:text-lg lg:text-xl w-full sm:w-[80%] lg:w-[60%] text-center text-medium px-4">
        We're thrilled to share our special day with you! Should you have any
        questions or need further details, feel free to reach out to us. Your
        presence means the world, and we want to ensure you have all the
        information you need for a delightful celebration. Looking forward to
        celebrating together!
      </p>

      <img className="mt-10 sm:mt-20 w-[300px] sm:w-auto" src={om} alt="Om" />
    </section>
  );
};

export default FooterSection;
