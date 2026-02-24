import Image from "next/image";
import Navbar from "./components/navbar/page";
import Home from "./components/home/page";
import About from "./components/about/page";
import Events from "./components/events/page";
import Gallery from "./components/gallery/page"; 
import Execom from "./components/execom/page"; 
import Statistics from "./statistics/page";
import ExploreLC from "./components/explore/page";
import Connect from "./components/connect/page";
import Footer from "./components/footer/page";

export default function main() {
  return (
    <div >
      <Navbar />  
      <Home />
      <About />
      <Events />
      <Gallery />
      <Statistics />
      <ExploreLC />
      <Execom />
      <Connect />
      <Footer />
    </div>
  );
}
