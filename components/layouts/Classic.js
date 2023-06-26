import React from "react";
import Head from "next/head";
import Header from "../organismes/header/Header";
import Footer from "../organismes/footer/Footer";

const Classic = (props) => {
  const description = props.description || null;
  const title = props.title || null;
  const canonical = props.canonical || "";
  const robots = props.robots || "follow";
  const tags = props.tags || null;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content={"index, " + robots} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="fr" />
        <link rel="canonical" href={"https://www.terabois.fr/" + canonical} />
        <meta name="keywords" content={tags} />
        <link rel="icon" href="/img/logos/logo.png" />
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Classic;
