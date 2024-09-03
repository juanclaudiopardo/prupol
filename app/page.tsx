import { About } from './About';
import { Header } from './Header';
import { Hero } from './Hero';
import { Services } from './Services';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
    </main>
  );
}
