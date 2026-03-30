import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound";
import StudyAbroad from "../pages/StudyAbroad/StudyAbroad";
import StudyInIndia from "../pages/StudyInIndia/StudyInIndia";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/study-abroad" element={<StudyAbroad />} />
      <Route path="/study-in-india" element={<StudyInIndia />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
