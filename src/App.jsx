// import { Routes, Route } from "react-router-dom";
// import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Career from "./Pages/Career/Career";
function App() {
  return (
    <>
      <Home />
      {/* <Routes>
      <Route exact path="./Pages/Career/Career.jsx" component={Career} />
      <Route exact path="./Components/Footer/Footer.jsx" component={Footer} />
      </Routes> */}
      {/* <ScrollToTop>
      
      </ScrollToTop> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
    </>
  );
}

export default App;
