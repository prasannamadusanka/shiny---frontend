import React, { useEffect } from "react";
import { setDirection, useMaterialUIController, setDirection } from "context";
import scrollreveal from "scrollreveal";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Portfolio from "./components/Portfolio";
import Products from "./components/Products";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

// import { useEffect } from "react";
// import { useMaterialUIController, setDirection } from "context";

// const [, dispatch] = useMaterialUIController();
import "./index.css";

function Landing() {
  const [, dispatch] = useMaterialUIController();
  // const { sales, tasks } = reportsLineChartData;
    useEffect(() => {
        setDirection(dispatch, "rtl");

        return () => setDirection(dispatch, "ltr");
    }, []);
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Landing;
