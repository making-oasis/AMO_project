import Head from "next/head";

type Props = {
  title: string;
  description: string;
};

const CommonMeta: React.FunctionComponent<Props> = ({ title, description }) => {
  const url = "https://fly-your-message.com/";
  const imgUrl = "https://making-oasis.com/blue-ap/img/thumnail.jpg";

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(1200)} />
      <meta property="og:image:height" content={String(630)} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CommonMeta;
