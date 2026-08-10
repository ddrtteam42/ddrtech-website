import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import PortfolioPage from "../pages/PortfolioPage";
import Technologies from "../pages/Technologies";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";
import InternshipTraining from "../pages/InternshipTraining";
import WebsiteDevelopment from "../pages/WebsiteDevelopment";
import MobileAppDevelopment from "../pages/MobileAppDevelopment";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/website-development" element={<WebsiteDevelopment />} />
      <Route path="/website-development" element={<WebsiteDevelopment />} />
      <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
      <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/technologies" element={<Technologies />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/internship-training" element={<InternshipTraining />} />
    </Routes>
  );
}
