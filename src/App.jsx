import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Team from "./Pages/Team/Team";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Internships from "./Components/Internships/Internships";
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} key="route-home-screen" />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/careers" element={<Internships />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
