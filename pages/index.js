import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import CTA from '../components/CTA';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';

export default function Home() {
  return (
    <>
      <Head>
        <script
          src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js'
          integrity='sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB'
          crossorigin='anonymous'
        ></script>
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js'
          integrity='sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13'
          crossorigin='anonymous'
        ></script>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css'
        ></link>
      </Head>
      <Hero />
      <About />
      <Portfolio />
      <CTA />
      <Contact />
    </>
  );
}
