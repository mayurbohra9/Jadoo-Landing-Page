import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Destinations from './sections/Destinations';
import BookingSteps from './sections/BookingSteps';
import Testimonials from './sections/Testimonials';
import Partners from './sections/Partners';
import Newsletter from './sections/Newsletter';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="hero-background" aria-hidden="true" />
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Destinations />
        <BookingSteps />
        <Testimonials />
        <Partners />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
