import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-K3X5GGQ",
    };
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <>
      <Head>
        {/* <link rel="shortcut icon" href="/images/AdsVenture-favicon.png" /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
