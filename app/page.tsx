import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import "./globals.scss";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Benefits />
      <Contacts />
      <Footer />
    </div>
  );
} 