import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Faq from "../components/Faqs";
import Contact from "../components/Contact";
import Mission from "../components/Mission";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Head>
        <title>Omni Addiction & Mental Health Services</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* og properties */}
        <meta
          property="og:title"
          content="Omni Addiction & Mental Health Services"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://omniamh.com/images/desktop.jpg"
        />
        <meta
          property="og:image:alt"
          content="Omni Addiction and Mental Health Services Homepage"
        />
        <meta
          property="og:site_name"
          content="Omni Addiction & Mental Health Services"
        />
        <meta
          property="og:description"
          content="We are Omni Addiction & Mental Health Services, a private behavioral health clinic offering outpatient Mental Health and Substance Use Therapy. Omni Addiction & Mental Health Services was founded to make more behavioral health services available to the communities of Southside VA and beyond. We gladly accept self-referrals as well as probation & court-ordered referrals. Our services include Individual Therapy, Group Therapy, Family Therapy, CSAC Supervision, and VASAP. Coming soon: LPC Supervision and LSATP Supervision."
        />
        <meta property="og:url" content="https://omniamh.com" />
        {/* twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="omniamh.com" />
        <meta name="twitter:url" content="https://omniamh.com" />
        <meta
          name="twitter:title"
          content="Omni Addiction & Mental Health Services"
        />
        <meta
          name="twitter:description"
          content="We are Omni Addiction & Mental Health Services, a private behavioral health clinic offering outpatient Mental Health and Substance Use Therapy. Omni Addiction & Mental Health Services was founded to make more behavioral health services available to the communities of Southside VA and beyond. We gladly accept self-referrals as well as probation & court-ordered referrals. Our services include Individual Therapy, Group Therapy, Family Therapy, CSAC Supervision, and VASAP. Coming soon: LPC Supervision and LSATP Supervision."
        />
        <meta
          name="twitter:image"
          content="https://omniamh.com/images/desktop.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="Omni Addiction and Mental Health Services Homepage"
        />
        {/* base */}
        <meta name="keywords" content="Individual Therapy, Group Therapy, Family Therapy, CSAC Supervision, VASAP, Omni, Omni Addiction & Mental Health Services, Mental Health, therapy" />
        <meta name="author" content="LaTeshia Gilliam" />
        <meta name="description" content="We are Omni Addiction & Mental Health Services, a private behavioral health clinic offering outpatient Mental Health and Substance Use Therapy. Omni Addiction & Mental Health Services was founded to make more behavioral health services available to the communities of Southside VA and beyond. We gladly accept self-referrals as well as probation & court-ordered referrals. Our services include Individual Therapy, Group Therapy, Family Therapy, CSAC Supervision, and VASAP. Coming soon: LPC Supervision and LSATP Supervision." />
        {/* favicons */}
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
        <Mission />
        <About />
        <Contact />
        <Faq />
        <ScrollToTop />
      </main>
    </>
  );
}
