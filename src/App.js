import React from "react";
import PrimarySeciton from "./primary_components/PrimarySeciton";
import SecondarySection from "./primary_components/SecondarySection";
import TertiarySection from "./primary_components/TertiarySection";
import QuaternarySection from "./primary_components/QuaternarySection";
import CustomerReviewsSection from "./primary_components/CustomerReviewsSection";
import ContactUsSection from "./primary_components/ContactUsSection";
import "@fontsource/krona-one/400.css";
import "./primary_components/styles.css";
import personOne from "./assets/PersonOne.jpg";
import personTwo from "./assets/PersonTwo.jpg";
import personThree from "./assets/PersonThree.jpg";
import personFour from "./assets/PersonFour.jpg";
import personFive from "./assets/PersonFive.jpg";
import personSix from "./assets/PersonSix.jpg";
import Styles from "./primary_components/styles.css";

const slides = [
  {
    name: "Seymore Haybark",
    desc: "Chariot transformed our operations, saving us time and money!",
    image: personOne,
  },
  {
    name: "Lauren Crasp",
    desc: "With Chariot, our productivity skyrocketed, leading to impressive growth.",
    image: personTwo,
  },
  {
    name: "Jason Rasper",
    desc: "Thanks to Chariot, our customer satisfaction reached new heights!",
    image: personThree,
  },
  {
    name: "Mason Dudley",
    desc: "Chariot's automation capabilities helped us scale our business effortlessly. ",
    image: personFour,
  },
  {
    name: "Zach Crisp",
    desc: "Chariot's insights and efficiency propelled our business to new horizons!",
    image: personFive,
  },
  {
    name: "Jonathan Schemuer",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ",
    image: personSix,
  },
];

function App() {
  return (
    <div className="app--div">
      <PrimarySeciton />
      <SecondarySection />
      <TertiarySection />
      <QuaternarySection />
      <CustomerReviewsSection slides={slides} />
      <ContactUsSection />
    </div>
  );
}

export default App;
