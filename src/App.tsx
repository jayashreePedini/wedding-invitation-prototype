import AboutCouples from "./components/AboutCouples";
import FooterSection from "./components/FooterSection";
import HeadSection from "./components/HeadSection";
import InviteSection from "./components/InviteSection";
import PhotoShoot from "./components/PhotoShoot";
import VenueDetails from "./components/VenueDetails";

const App = () => {
  return (
    <main className="w-full h-full bg-soft">
      <HeadSection />
      <InviteSection />
      <AboutCouples />
      <PhotoShoot />
      <VenueDetails />
      <FooterSection />
    </main>
  );
};

export default App;
