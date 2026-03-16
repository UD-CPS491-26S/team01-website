import HeroSection from "./components/HeroSection";
import OverviewSection from "./components/OverviewSection";
import TeamSection from "./components/TeamSection";
import ShowcaseSection from "./components/ShowcaseSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}  {/* ← usually fixed/sticky */}
      
      <main className="flex-grow">
        <HeroSection />
        <OverviewSection />
        <TeamSection />
        <ShowcaseSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
