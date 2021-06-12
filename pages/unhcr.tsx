import Nav from "@/components/nav";
import Container from "@/components/container";
//import Image from "next/image";
import ButtonLink from "@/components/button-link";
import Image from "next/image";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/tabs/youth.module.css";

const UnhcrPage = () => {
  const iconStyle: React.CSSProperties = { padding: 10, fontSize: 50 };
  return (
    <>
      <Nav />
      <Container>
        <ButtonLink className="h-5 py-0 mx-1" href="/ja/youth">
          to English page (英語ページへ)
        </ButtonLink>
        <div className={styles.flex}>
          <h1 className={styles.h2}>Youth×UNHCR for Refugeesについて</h1>

          <div className={styles.image}>
            <Image src={"/tabs/image.png"} width={900} height={350} />
          </div>
          <p>
            日本全国には難民支援に取り組む学生団体がたくさんあります。
            若者の力で難民支援の輪をさらに広げるため、プラットフォームとして2020年の「世界難民の日」をきっかけに、『Youth×UNHCR
            for Refugees プロジェクト』が、有志メンバーによって誕生しました。
          </p>
          <p className={styles.p1}>コンセプトは、</p>
          <p className={styles.main}>
            ”今こそ想いの輪を広げるため、難民の人々のストーリーを伝え、
            <br />
            エールでつながり、光をうみだすユースプロジェクト”
          </p>

          <p className={styles.p1}>
            新型コロナウイルス感染症（COVID-19）の影響により、世界中の人々が困難に立ち向かっているなか、メンバーらは平和への祈りを込め、難民となった人々をはじめ、誰もが取り残されない世界を創るために、このプロジェクトを運営しています。
          </p>
          <p className={styles.p1}>
            同じ想いの学生・団体がひとつになれば、さまざまな声を広く届けることができるー
            日本で難民問題に関心を持つ人が増え、一人ひとりの行動につながることを願い、学生たちが立ち上がりました。
          </p>

          <p className={styles.p1}>今回のプロジェクト</p>
          <p className={styles.main}>
            ”Fly your message ― 届け！ 想いをのせた青い紙ひこうき”{" "}
          </p>
        </div>
        <h1 className={styles.h2}>UNHCRについて</h1>
        <p className={styles.p2}>
          国連難民高等弁務官事務所（UNHCR：The Office of the United Nations High
          Commissioner for
          Refugees）は、第二次世界大戦後の1950年、避難を余儀なくされたり、家を失った何百万人ものヨーロッパ人を救うために設立されました。
          <br />
          設立から半世紀以上経った今日も、UNHCRは、世界中の難民の保護や支援に取り組んでいます。
          <br />
          難民問題の拡大、複雑化に対応するため、UNHCRは、世界各地の政府、民間から支援を受けています。
        </p>
        <h2 className={styles.h2}>
          contacts for Youth×UNHCR for Refugees / UNHCR
        </h2>
        <Button
          size="small"
          color="primary"
          href="https://twitter.com/apps_oasis"
        >
          <FontAwesomeIcon style={iconStyle} icon={faTwitter} />
          Youthのtwitterはこちらから
        </Button>
        <br />
        <Button
          size="small"
          color="primary"
          href="https://www.facebook.com/makingoasis2021"
        >
          <FontAwesomeIcon style={iconStyle} icon={faFacebook} />
          YouthのFaceBookはこちらから
        </Button>
        <br />
        <Button size="small" color="primary" href="https://making-oasis.com">
          <p>
            <Image src={"/tabs/youth.png"} width={50} height={50} />
          </p>
          YouthのHPはこちらから
        </Button>
      </Container>
    </>
  );
};

export default UnhcrPage;
