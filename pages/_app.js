import "../styles/globals.css";
import Layout from "../components/Layout";
import { Open_Sans } from "@next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-openSans" });

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <main>
        <style jsx global>
          {`
            :root {
              --openSans-font: ${openSans.style.fontFamily};
            }
          `}
        </style>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
