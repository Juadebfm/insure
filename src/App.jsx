import Cta from "./components/Cta";
import Different from "./components/Different";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./index.css"

export default function App() {
  return (
    <div className="w-100">
      <Navbar />
      <Hero/>
      <Different/>
      <Cta/>
      <Footer/>
    </div>
  );
}
