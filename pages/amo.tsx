import Nav from "@/components/nav";
import Container from "@/components/container";
import Image from "next/image";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import ButtonLink from "@/components/button-link";
import styles from "../styles/tabs/amo.module.css";

const AmoPage = () => {
  const iconStyle: React.CSSProperties = { padding: 10, fontSize: 50 };

  return (
    <>
      <Nav />
      <Container>
        <ButtonLink className="h-5 py-0 mx-1" href="/en/amo">
          to English page (英語ページへ)
        </ButtonLink>
        <div className={styles.image}>
          <Image src={"/tabs/amo.jpeg"} width={350} height={350} />
        </div>
        <h2 className={styles.h2}>AMO(Apps for Making Oasis)とは</h2>
        <p className={styles.p1}>
          AMOはアプリ開発などを学生と共に行い社会課題解決に必要なITを駆使できる人材の育成をミッションとした学生支援団体です。SDGsなどの社会問題に取り組む団体様と共に、ITに関する技術、知識、ノウハウを持つメンバーが協力して、社会を担う次世代のリーダーを育成します。
        </p>
        <h2 className={styles.h2}>AMOのコンセプト</h2>
        <p className={styles.p1}>
          誰一人として取りこぼすことのない愛（イタリア語で”amo”）に満ちた社会になってほしい。また人材育成を通して、索漠とした砂漠のように先が見えない社会課題の現状に、少しでも希望を与えるオアシスのような役割がしたい。そのような思いを込めてAMO（Apps
          for Making Oasis）と名付けました。
        </p>
        <h2 className={styles.h2}>なぜ「IT」？</h2>
        <p className={styles.p1}>
          私たちが注目しているのは、IT技術の「情報を伝える力、人と人をつなげる力」です。
          このIT技術を基盤として、WEBサービス、SNSなど、人と人が繋がり情報が授受されるプラットフォームが形成されています。ITの力だけで社会課題が解決されるわけではないですが、解決のための貴重な力である人の関心を集めることで、助けを求めている人々に対して力になれるのではと考えました。
          ただしAMOのメンバーだけでは、見えている世界も、できる範囲にも限界があります。そこで、若い学生の「育成」に軸足を置き、一緒に社会のために行動できるITを駆使できる人材を育てていくことに決めました。
          学校の環境では主に手段としてのITを教えられますが、イシューベースで一緒に考えプロジェクトを経験する場を提供することで、社会起点で物事を考えれ、ITを駆使できる人材を少しでも多く生み出せればと思います。
        </p>
        <h2 className={styles.h2}>contacts for AMO</h2>
        <Button
          size="small"
          color="primary"
          href="https://twitter.com/apps_oasis"
        >
          <FontAwesomeIcon style={iconStyle} icon={faTwitter} />
          AMOのtwitterはこちらから
        </Button>
        <br />
        <Button
          size="small"
          color="primary"
          href="https://www.facebook.com/makingoasis2021"
        >
          <FontAwesomeIcon style={iconStyle} icon={faFacebook} />
          AMOのFaceBookはこちらから
        </Button>
        <br />
        <Button size="small" color="primary" href="https://making-oasis.com">
          <FontAwesomeIcon style={iconStyle} icon={faLink} />
          AMOのHPはこちらから
        </Button>
      </Container>
    </>
  );
};

export default AmoPage;
