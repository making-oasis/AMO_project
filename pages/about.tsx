import Nav from "@/components/nav";
import Container from "@/components/container";
import ButtonLink from "@/components/button-link";
import YouTube from "react-youtube";
import styles from "../styles/tabs/about.module.css";

const AboutPage = () => {
  return (
    <>
      <Nav />
      <Container>
        <ButtonLink className="h-5 py-0 mx-1" href="en/about">
          to English page (英語ページへ)
        </ButtonLink>

        <div className={styles.youtube}>
          <YouTube videoId="PH9uZZhdZMk" />
          <p>
            UNHCR制作の動画「The
            Journey（ザ・ジャーニー）」。オリンピック・パラリンピックを目指す難民アスリートの姿を描いた短編動画です。
          </p>
        </div>

        <h2 className={styles.h2}>
          生き別れた家族との再会を願い、ひとりで練習に励むエチオピア人の陸上選手。
          <br />
          異国の同胞たち、そして子どもたちと共に未来を切り拓きたいと、
          <br />
          東京オリンピック空手競技への出場を夢見るシリア人選手。
        </h2>

        <p>皆さんは「難民選手団」を知っていますか？</p>

        <p className={styles.p2}>
          難民選手団は、出身国の異なるアスリートで結成されたチーム。一国を代表して競うオリンピックの中で、難民選手団だけは、特定の国の代表ではありません。そのため、着ているユニフォームも選手ごとに異なります。
        </p>

        <p>
          投稿を通して、小さなアクションの経験を。
          <br />
          小さなアクションから関心を高め、より大きなアクションへ
        </p>

        <p className={styles.p2}>
          「メッセージを送る」という小さなアクションを通して、より多くの人に難民問題に関心を持ってほしい。私たちはそう願っています。
          <br />
          そしてこの願いは、Fly your message
          によってかなえられると考えました。コロナ禍では接触の機会が限られますが、Fly
          your
          messageによって、だれでもどこからでも、応援メッセージを送ることができるからです。
        </p>

        <p className={styles.isolate}>難民問題について</p>

        <p className={styles.main}>
          知らなかった人は、知ることから。
          <br />
          忘れていた人は、改めて。
          <br />
          何かしたかった人は、はじめの一歩に。
        </p>

        <p className={styles.last}>
          「自分にも何かできることはないだろうか」
          そんな気持ちを後押しするために、Fly your messageは誕生しました。
          メッセージは、難民の人々へ届けられます。
          <br />
          Fly your
          messageを通して、難民アスリートのみなさんをともに応援しましょう！！
        </p>
      </Container>
    </>
  );
};

export default AboutPage;
