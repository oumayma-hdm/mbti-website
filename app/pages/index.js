import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Career Guidance Website</title>
      </Head>
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
