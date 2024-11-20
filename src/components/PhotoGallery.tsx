import border3 from "../assets/border-3.png";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { galleryImages } from "@/constants/PhotoGallery";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const categories = ["Pre-Wedding", "Ceremony", "Reception"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="w-full min-h-screen flex flex-col items-center px-4 py-16 sm:py-20">
      <h1 className="main-font uppercase text-3xl sm:text-4xl lg:text-5xl text-dark text-center">
        Photo Gallery
      </h1>
      <img
        src={border3}
        alt="Border"
        className="w-[200px] sm:w-auto mb-10 sm:mb-16"
      />

      {/* Instagram-like Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2 max-w-7xl w-full">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative rounded-xl aspect-square group cursor-pointer overflow-hidden"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-2xl">❤️</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected photo"
              className="w-full h-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PhotoGallery;
