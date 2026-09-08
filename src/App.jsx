import { useState } from "react";
import IntroVideo from "./components/IntroVideo";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import { Focus } from "lucide-react";
import BridgeEurope from "./components/BridgeEurope";
import Opportunities from "./components/Opportunities";
import Insights from "./components/Insights";
import KhanateStandards from "./components/KhanateStandards";
import Principal from "./components/Principal";
import Private from "./components/Private";
import Legal from "./components/Leagal";

function App() {
  const [introComplete, setIntroComplete] = useState(() => {
    return Boolean(sessionStorage.getItem("khanate-intro"));
  });

  return (
    <main className="min-h-screen bg-[#130207] text-[#F5EEE7]">
      <IntroVideo onComplete={() => setIntroComplete(true)} />

      <Nav animate={introComplete} />
      <Hero animate={introComplete} />
      <About />
      <Focus />
      {/* <HowWeWork />
      <Europe /> */}
      <BridgeEurope />
      <Opportunities />
      <Insights />
      <KhanateStandards />
      <Principal />
      <Private />
      <Legal />
    </main>
  );
}

export default App;