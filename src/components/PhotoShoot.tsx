import flowerBasket from "../assets/flower-basket.png";
import border2 from "../assets/border-2.png";
import img1 from "../assets/photoshoot1.png";
import img2 from "../assets/photoshoot2.png";
import img3 from "../assets/photoshoot3.png";
import img4 from "../assets/photoshoot4.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PhotoShoot = () => {
  return (
    <section className="w-full min-h-screen flex flex-col sm:flex-row px-4 md:px-12 lg:px-20 py-10">
      <div className="left w-full sm:w-[50%] flex flex-col items-center justify-center gap-4 sm:gap-5 mb-8 sm:mb-0">
        <img
          src={flowerBasket}
          alt="Flower Basket"
          className="w-[200px] sm:w-[250px] lg:w-[300px]"
        />
        <h1 className="main-font uppercase text-3xl sm:text-4xl lg:text-5xl text-dark text-center">
          Pre-wedding shoot
        </h1>
        <img
          src={border2}
          alt="Border"
          className="w-[200px] sm:w-[250px] lg:w-auto"
        />
      </div>
      <div className="right w-full sm:w-[50%] flex items-center justify-center px-4 sm:px-12 lg:px-24">
        <Carousel className="w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[600px] aspect-square overflow-hidden rounded-xl relative">
          <CarouselContent className="h-full">
            <CarouselItem className="h-full aspect-square">
              <img src={img1} alt="" className="w-full h-full object-cover" />
            </CarouselItem>
            <CarouselItem className="h-full aspect-square">
              <img src={img2} alt="" className="w-full h-full object-cover" />
            </CarouselItem>
            <CarouselItem className="h-full aspect-square">
              <img src={img3} alt="" className="w-full h-full object-cover" />
            </CarouselItem>
            <CarouselItem className="h-full aspect-square">
              <img src={img4} alt="" className="w-full h-full object-cover" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 bg-white/30 hover:bg-white/50 border-none hidden sm:flex" />
          <CarouselNext className="absolute right-4 bg-white/30 hover:bg-white/50 border-none hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default PhotoShoot;
