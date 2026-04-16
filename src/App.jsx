import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import RaceInfo from "./pages/RaceInfo/RaceInfo";
import Course from "./pages/Course/Course";
import Results from "./pages/Results/Results";
import Contact from "./pages/Contact/Contact";
import Registration from "./pages/Registration/Registration";
import ParticipantInfo from "./pages/ParticipantInfo/ParticipantInfo";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anmalan" element={<Registration />} />
        <Route path="/loppen" element={<RaceInfo />} />
        <Route path="/banan" element={<Course />} />
        <Route path="/deltagarinfo" element={<ParticipantInfo />} />
        <Route path="/resultat" element={<Results />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}