import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { LayoutGroup } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa"; // Make sure react-icons is installed

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="manifest.json" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Allure" />
        <meta name="apple-mobile-web-app-title" content="Allure" />
        <meta name="msapplication-starturl" content="/" />
        <link rel="apple-touch-icon" sizes="96x96" href="/logo.jpg" />
        <link rel="apple-touch-icon" sizes="192x192" href="/logo.jpg" />
        <link rel="apple-touch-icon" sizes="512x512" href="/logo.jpg" />
        <meta name="apple-mobile-web-app-status-bar" content="#fcd5ce" />

        <link rel="icon" href="/logo.jpg" />
        <meta name="theme-color" content="#fcd5ce" />

        <meta property="og:title" content="Allure" />
        <meta property="og:description" content="Hair and Beauty by Pholoso" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/wecloud/image/upload/v1625824185/artist-portfolio/twitter_card-100_innx4h.jpg"
        />
        <meta property="og:url" content="https://artist-portfolio.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Allure" />
        <meta name="twitter:image:alt" content="Allure" />
        <meta name="twitter:site" content="@satvikvirmani" />
      </Head>

      <LayoutGroup>
        <Component {...pageProps} />
      </LayoutGroup>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.link/kf72fn" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </>
  );
}

export default MyApp;
