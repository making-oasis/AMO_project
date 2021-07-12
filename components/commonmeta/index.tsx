import Head from "next/head";

type Props = {
  title: string;
  description: string;
};

const CommonMeta: React.FunctionComponent<Props> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`${process.env.SITE_URL}/ogp_large.png`}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CommonMeta;
