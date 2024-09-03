import { About } from './About';
import { CallToAction } from './CallToAction';
import { Solutions } from './Features';
import { Footer } from './Footer';
import { Header } from './Header';
import { Hero } from './Hero';
import { Pricing } from './Pricing';
import { Services } from './Services';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Solutions />
      <CallToAction />
      <Pricing />
      <Footer />
    </main>
  );
}
