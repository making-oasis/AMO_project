import Nav from "@/components/nav";
import Container from "@/components/container";
import ButtonLink from "@/components/button-link";
import styles from "../../styles/tabs/about.module.css";

const AboutPage = () => {
  return (
    <>
      <Nav />
      <Container>
        <ButtonLink className="h-5 py-0 mx-1" href="/about">
          to English page (英語ページへ)
        </ButtonLink>
        <h2 className={styles.h2}>
          生き別れた家族との再開を願い、ひとりで練習を続けるエチオピア人の陸上選手、
          <br />
          異国の同胞たち、特に子どもたちと共に未来を切り開きたいと、
          <br />
          東京オリンピックで追加協議に採用された空手に出場することを夢見るシリア人選手。
        </h2>

        <p>皆さんは「難民選手団」を知っていますか？</p>

        <p className={styles.p2}>
          難民選手団は他の参加国とは違い、複数の国の選手団で結成されたチームです。国同士で競うオリンピックの中で、難民選手団は特定の国の代表選手で結成されているわけではありません。そのため、着ているユニフォームも選手ごとに異なります。
        </p>

        <p>
          投稿を通して、小さなアクションの経験を
          <br />
          小さなアクションから、関心、そして、より大きなアクションへ
        </p>

        <p className={styles.p2}>
          私たちは、この「メッセージを送る」というアクションを通して、より多くの人に難民問題に関心をもってもらえることを願っています。
          この願いはwebアプリケーションだからこそ実現できると考えました。
          コロナウイルスという状況下で対面での接触ができない中でも、より多くの人が簡単にweb上から場所を問わず応援することができます。
        </p>

        <p className={styles.main}>
          難民問題のことを何もしらない人は知識として。
          <br />
          難民問題について忘れていた人は、再度問題意識を取り返すために。
          <br />
          難民問題に興味はあるが、何をしたら良いかがわからない人は、
          <br />
          一歩を踏み出すきっかけに。
        </p>

        <p className={styles.last}>
          そうした人たちが「自分には何かできることはないだろうか」と考える入り口としてFly
          your messageは誕生しました。 Fly your
          messageを使う人たちで一体となり、難民の方を応援しましょう！！！
          また、そのメッセージは難民の方へ届けることができます。 Fly your
          messageを通して、個人が関心を持ち書いたメッセージが難民の方の力の源になることを信じています。
        </p>
      </Container>
    </>
  );
};

export default AboutPage;
