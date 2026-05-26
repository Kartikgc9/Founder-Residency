import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmoothScroll from "./lib/SmoothScroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Residency from "./components/Residency";
import WhoShouldApply from "./components/WhoShouldApply";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Apply from "./components/Apply";
import Footer from "./components/Footer";

const Landing = () => {
  return (
    <SmoothScroll>
      <div className="App scanlines" data-testid="landing-page">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Schedule />
          <Residency />
          <WhoShouldApply />
          <Pricing />
          <FAQ />
          <Apply />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
