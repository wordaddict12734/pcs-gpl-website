import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Industries from "../components/home/Industries";
import About from "../components/home/About";
import WhyChoose from "../components/home/WhyChoose";
import Contact from "../components/home/Contact";
function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Industries />
      <About />
      <WhyChoose />
      <Contact />
    </main>
  );
}

export default Home;