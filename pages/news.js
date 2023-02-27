import Head from "next/head";
import News from "../components/news";
import CMS from "../cms";

const Newspage = () => {
  const META = CMS.META,
        PAGE = CMS.CONTENT.NEWS;

  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content={META.THEME} />
      <meta name="description" content={PAGE.DESC} />
      <meta name="title" content={PAGE.TITLE} />
      <meta property="og:title" content={PAGE.TITLE} />
      <meta property="og:description" content={PAGE.DESC} />
      <meta property="og:url" content={META.URL} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/cutout.png" />
      <link rel="canonical" href={META.URL} />
      <title>{PAGE.TITLE}</title>
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="78x78" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <div id="__paralax">
      <News />
    </div>
  </>);
};

export default Newspage;