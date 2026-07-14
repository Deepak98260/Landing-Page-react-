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
import MetricsDashboard from "./components/MetricsDashboard";
import ConnectEverything from "./components/ConnectEverything";
import IntegrationGrid from "./components/IntegrationGrid";
import SecuritySection from "./components/SecuritySection";
import SecurityCards from "./components/SecurityCards";
import DeveloperSection from "./components/DeveloperSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import DelegateCTASection from "./components/DelegateCTASection";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoSection />
      <Features />
      <Pricing />
      <Process />
      <ProcessSteps />
      <GlobalInfrastructure />
      <Infrastructure />
      <ServerRegions />
      <LiveMetrics />
      <MetricsDashboard />
      <ConnectEverything />
      <IntegrationGrid />
      <SecuritySection />
      <SecurityCards />
      <DeveloperSection />
       <TestimonialsSection />
       <PricingSection />
      <DelegateCTASection />
      <Footer />
    </>
  );
}

export default App;