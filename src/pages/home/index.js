import React from "react";
import Navbar from "./../../components/Navbar";
import HeroSection from "./../../components/HeroSection";
import FeaturesRegularLanguagesSection from "../../components/FeaturesRegularLanguagesSection";
import CtaSection from "./../../components/CtaSection";
import PortfolioSection from "../../components/PortfolioSection";
import Footer from "./../../components/Footer";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";
import FeaturesOcassionalLanguagesSection from "../../components/FeaturesOcassionalLanguagesSection";
import ContactMeSection from "../../components/ContactMeSection";
import HrefAnchor from "../../util/hrefanchor";

function HomePage(props) {
  const router = useRouter();

  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <HeroSection
        color="dark"
        size="medium"
        title="Hi! I'm Mandeeya!"
        subtitle="I'm a software engineer and I like learning, building things, playfully strumming my guitar and making tech videos which I put up on my youtube channel."
        buttonText="Let's Connect"
        image="me.png"
      />
      <FeaturesRegularLanguagesSection
        color="white"
        size="small"
        title="Languages I use regualarly"
        subtitle=""
      />
      <CtaSection
        color="dark"
        size="medium"
        title="I like to build new and interesting custom software. Want to bring an idea to life?"
        buttonText="Let's Talk"
      />
      <FeaturesOcassionalLanguagesSection
        color="white"
        size="small"
        title="Ocassional technologies"
        subtitle=""
      />
      <PortfolioSection
        color="white"
        size="medium"
        title="Projects"
        subtitle="some personal projects"
      />

      <HrefAnchor name="ContactMe"></HrefAnchor>
      <ContactMeSection
        color="primary"
        size="small"
        title="Contact Me"
        subtitle=""
      />
      <Footer
        color="black"
        size="normal"
        logo="https://uploads.divjoy.com/logo.svg"
        copyright="© 2019 Mandeeya.io"
      />
    </>
  );
}

export default HomePage;
