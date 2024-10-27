import React from "react";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import About from "../components/about";
import Services from "../components/services";
import ProductInfo from "../components/productinfo";
import Contact from "../components/contact";
const home = () => {
  const links = [
    { path: "/", name: "Home" },
    { path: "about", name: "About" },
    { path: "services", name: "Services" },
    { path: "contact", name: "Contact" },
  ];

  return (
    <div>
      <Navbar logo="Baby Monitoring System" links={links} />
      <Banner />
      <About />
      <Services />
      <ProductInfo />
      <Contact />
    </div>
  );
};

export default home;
