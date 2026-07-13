import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoSection from "./components/LogoSection";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Process from "./components/Process";
import ProcessSteps from "./components/ProcessSteps";
import Infrastructure from "./components/Infrastructure";
import GlobalInfrastructure from "./components/GlobalInfrastructure";
import ServerRegions from "./components/ServerRegions";
import LiveMetrics from "./components/LiveMetrics";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoSection />
      <Features />
      <Pricing />
      <Footer />
      <Process />
      <ProcessSteps />
      <GlobalInfrastructure />
      <Infrastructure />
      <ServerRegions />
      <LiveMetrics />
    </>
  );
}

export default App;