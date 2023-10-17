//importing react router elements
import { Route, Routes } from "react-router";
import ScrollToTop from "./Logic/ScrollToTop";

//importing css
import classes from "./App.module.css";

//importing web app components

import HomeApp from "./Pages/Home-Page/HomeApp";
import AboutApp from "./Pages/About-Page/AboutApp";
import MenuApp from "./Pages/Menu-Page/MenuApp";
import BookingApp from "./Pages/Booking-Page/BookingApp";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <>
      <div className={classes.screenContainer}>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeApp />}></Route>
          <Route path="/About-Us" element={<AboutApp />}></Route>
          <Route path="/Menu" element={<MenuApp />}></Route>
          <Route path="/Booking" element={<BookingApp />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
