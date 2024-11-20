import border3 from "../assets/border-3.png";
import { CalendarDays } from "lucide-react";

const functions = [
  {
    name: "Haldi Ceremony",
    date: "19th January 2025",
    time: "10:00 AM Onwards",
    venue: "The Grand Lotus Banquet Hall",
    description: "Traditional turmeric ceremony filled with joy and laughter",
  },
  {
    name: "Mehendi",
    date: "19th January 2025",
    time: "4:00 PM Onwards",
    venue: "The Grand Lotus Garden",
    description: "Beautiful mehendi application with music and celebrations",
  },
  {
    name: "Sangeet Night",
    date: "20th January 2025",
    time: "7:00 PM Onwards",
    venue: "The Grand Lotus Lawns",
    description: "An evening of music, dance and celebrations",
  },
  {
    name: "Wedding Ceremony",
    date: "21st January 2025",
    time: "7:00 PM Onwards",
    venue: "The Grand Lotus Main Hall",
    description: "The auspicious wedding ceremony followed by dinner",
  },
  {
    name: "Reception",
    date: "22nd January 2025",
    time: "7:00 PM Onwards",
    venue: "The Grand Lotus Banquet",
    description: "Celebration of the newly wedded couple",
  },
];

const FunctionsSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center px-4 py-16 sm:py-20">
      <h1 className="main-font uppercase text-3xl sm:text-4xl lg:text-5xl text-dark text-center">
        Wedding Functions
      </h1>
      <img
        src={border3}
        alt="Border"
        className="w-[200px] sm:w-auto mb-10 sm:mb-16"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
        {functions.map((func, index) => (
          <div
            key={index}
            className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex items-start justify-between">
              <h2 className="main-font text-2xl sm:text-3xl text-dark mb-2">
                {func.name}
              </h2>
              <CalendarDays className="text-dark w-6 h-6" />
            </div>

            <div className="space-y-3 mt-4">
              <p className="para-font text-medium flex items-center gap-2">
                <span className="font-semibold">Date:</span> {func.date}
              </p>
              <p className="para-font text-medium flex items-center gap-2">
                <span className="font-semibold">Time:</span> {func.time}
              </p>
              <p className="para-font text-medium flex items-center gap-2">
                <span className="font-semibold">Venue:</span> {func.venue}
              </p>
              <p className="para-font text-medium mt-4 italic">
                {func.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunctionsSection;
