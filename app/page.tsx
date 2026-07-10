import FloatingButtons from "./components/FloatingButtons";
import SunokiGroup from "./components/SunokiGroup";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import WhyKokoro from "./components/WhyKokoro";
import Works from "./components/Works";
import Estimator from "./components/Estimator";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F3]">
      <Header />
  <Hero />

  <About />
  
  <SunokiGroup />

  <Service />

  <WhyKokoro />

  <Works />

  <Estimator />

  <Process />

  <Testimonials />

  <Contact />

  <Footer />

  <FloatingButtons />

</main>
  );
}