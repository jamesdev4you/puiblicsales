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
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ",
    image: personOne,
  },
  {
    name: "Lauren Crasp",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ",
    image: personTwo,
  },
  {
    name: "Jason Rasper",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ",
    image: personThree,
  },
  {
    name: "Mason Dudley",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ",
    image: personFour,
  },
  {
    name: "Zach Crisp",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ",
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
