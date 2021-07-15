import "../styles/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>fly-your-message</title>
        <meta property="og:title" content="fly-your-message" />
        <meta
          property="og:description"
          content="このWebアプリは、難民の方々に応援メッセージを届けることが出来るアプリです。
難民の方にメッセージをを届けることが出来るWebアプリを作りました。"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
