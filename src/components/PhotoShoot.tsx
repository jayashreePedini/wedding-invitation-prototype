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
    <section className="w-full h-screen flex px-20">
      <div className="left w-[50%] flex flex-col items-center justify-center gap-5">
        <img src={flowerBasket} alt="Flower Basket" width={300} />
        <h1 className="main-font uppercase text-5xl text-dark">
          Pre-wedding shoot
        </h1>
        <img src={border2} alt="Border" />
      </div>
      <div className="right w-[50%] flex items-center justify-center px-24 py-10">
        <Carousel className="w-[600px] h-[600px] overflow-hidden rounded-xl relative">
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
          <CarouselPrevious className="absolute left-4 bg-white/30 hover:bg-white/50 border-none" />
          <CarouselNext className="absolute right-4 bg-white/30 hover:bg-white/50 border-none" />
        </Carousel>
      </div>
    </section>
  );
};

export default PhotoShoot;
