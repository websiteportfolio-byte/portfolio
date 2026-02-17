import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedWork from '@/components/FeaturedWork';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <FeaturedWork />
      <Skills />
      <Contact />
    </main>
  );
}
