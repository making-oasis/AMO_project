import Nav from "@/components/nav";
import Container from "@/components/container";
import ButtonLink from "@/components/button-link";
import styles from "../styles/tabs/about.module.css";

const AboutPage = () => {
  return (
    <>
      <Nav />
      <Container>
        <ButtonLink className="h-5 py-0 mx-1" href="/ja/about">
          to Japanese page (日本語ページへ)
        </ButtonLink>
        <h2 className={styles.h2}>
          An Ethiopian track and field athlete training alone, hoping to meet
          his meeting family. <br />A Syrian athlete dreaming to play karate in
          the Oympics to build the future <br />
          with his countrymen from other countries, especially children.
        </h2>

        <p>Do you know “Refugee athletes”？</p>

        <p className={styles.p2}>
          難民選手団は他の参加国とは違い、複数の国の選手団で結成されたチームです。国同士で競うオリンピックの中で、難民選手団は特定の国の代表選手で結成されているわけではありません。そのため、着ているユニフォームも選手ごとに異なります。
        </p>

        <p>
          Experience sending messages.
          <br />
          小さなアクションから、関心、そして、より大きなアクションへ
        </p>

        <p className={styles.p2}>
          私たちは、この「メッセージを送る」というアクションを通して、より多くの人に難民問題に関心をもってもらえることを願っています。
          この願いはwebアプリケーションだからこそ実現できると考えました。
          コロナウイルスという状況下で対面での接触ができない中でも、より多くの人が簡単にweb上から場所を問わず応援することができます。
        </p>

        <p className={styles.main}>
          Those who don’t know anything about refugee issues, Please start to
          know the issue.
          <br />
          Those who forgot refugee issues. Please be aware the issue.
          <br />
          Those who are interested in refugee issues but don’t know what to do,
          <br />
          Please use this web application as an opportunity to take your first
          step
        </p>

        <p className={styles.last}>
          Fly your message was created to support your small action. Let’s cheer
          for refugees all over the world by using Fly your message!our message
          will be sent to refugees. We believe that these messages will touch
          them to the heart.
        </p>
      </Container>
    </>
  );
};

export default AboutPage;
