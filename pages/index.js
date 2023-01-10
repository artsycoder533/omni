import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Intro from "../components/Intro";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Head>
        <title>Omni Addiction & Mental Health Services</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="We are Omni Addiction & Mental Health Services, a private behavioral health clinic offering outpatient MentalHealth and Substance Use Therapy."
        />
        <meta name="author" content="LaTeshia A. Gilliam, LPC, LSATP/Owner" />
        <meta
          name="keywords"
          content="Addiction, Mental Health, Counseling, Therapy, Substance Abuse, Individual Therapy, Group Therapy, Family Therapy, CSAC Supervision"
        />
        <meta
          property="og:title"
          content="Omni Addiction & Mental Health Services"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="bg-[#4A076D]">
        <Hero />
        <Intro />
        <Services />
        <About />
      </main>
    </>
  );
}
