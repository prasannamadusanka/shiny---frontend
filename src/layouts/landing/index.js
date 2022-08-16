import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Portfolio from "./components/Portfolio";
import Products from "./components/Products";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
import { useMaterialUIController, setDirection } from "context";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
//const [, dispatch] = useMaterialUIController();
import './index.css';
function Landing() {
    const [, dispatch] = useMaterialUIController();
   
    useEffect(() => {
        setDirection(dispatch, "rtl");
        const sr = scrollreveal({
          origin: "top",
          distance: "80px",
          duration: 2000,
          reset: false,
        });
        sr.reveal(
          `
            nav,
            #home,
            #services,
            #portfolio,
            #testimonials,
            #products,
            #newsletter,
            .footer
        `,
          {
            opacity: 0,
            interval: 200,
          }
        );
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