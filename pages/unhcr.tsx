import Nav from "@/components/nav";
import Container from "@/components/container";
import ButtonLink from "@/components/button-link";
import Image from "next/image";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/tabs/youth.module.css";

const UnhcrPage = () => {
  const iconStyle: React.CSSProperties = { padding: 10, fontSize: 50 };
  return (
    <>
      <Nav />
      <Container>
        <ButtonLink className="h-5 py-0 mx-1" href="/en/youth">
          to English page (英語ページへ)
        </ButtonLink>
        <div className={styles.flex}>
          <h1 className={styles.h2}>Youth×UNHCR for Refugeesについて</h1>

          <div className={styles.image}>
            <Image src={"/tabs/youth2.png"} width={400} height={400} />
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
          <p className={styles.p1}>➢目的</p>
          <p className={styles.p1}>
            Youth×UNHCR for Refugeesの象徴である紙ひこうきを用いて、協力
            と連帯の意思を発信し、難民問題についての理解を広げ、難民支援の
            ムーブメントを起こす。
          </p>
          <p className={styles.p1}>➢趣旨・背景</p>
          <p className={styles.p1}>
            新型コロナウイルスの影響により世界中で困難な状況が続き、人道的な危機も深刻化している。こうした今だからこそ、ユースである私たちが力を合わせ、難民問題について理解を深め、日本から連帯の意志を発信したいと考えた。
            また、東京オリンピック・パラリンピックでは難民選手団が結成された。UNHCRも「難民の若者のためのスポーツと福祉プログラム」を掲げている。6月20日の「世界難民の日」からオリンピック・パラリンピック開催時期こそが、本プロジェクトにもっともふさわしいと考える。
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
        <ButtonLink className={styles.fixbutton} href="/top">
          投稿ページへ
        </ButtonLink>
        <div className={styles.back}>
          <div className={styles.boxContainer}>
            <div className={styles.contact}>
              <h2 className={styles.h3}>Youth×UNHCR for Refugees</h2>
              <Button
                size="small"
                color="primary"
                href="https://twitter.com/yu4refugees"
              >
                <FontAwesomeIcon style={iconStyle} icon={faTwitter} />
                <p className={styles.fontp}>Youth×UNHCR for Refugees</p>
              </Button>
              <br />
              <Button
                size="small"
                color="primary"
                href="https://www.instagram.com/yu4refugees/?hl=ja"
              >
                <FontAwesomeIcon style={iconStyle} icon={faInstagram} />
                <p className={styles.fontp}>Youth×UNHCR for Refugees</p>
              </Button>
              <br />
              <Button
                size="small"
                color="primary"
                href="https://www.facebook.com/yu4refugees/"
              >
                <FontAwesomeIcon style={iconStyle} icon={faFacebook} />
                <p className={styles.fontp}>Youth×UNHCR for Refugees</p>
              </Button>
              <br />
              <Button
                size="small"
                color="primary"
                href="https://www.youtube.com/channel/UCuDDgBQ4rpHJzEfYNsTZrJA"
              >
                <FontAwesomeIcon style={iconStyle} icon={faYoutube} />
                <p className={styles.fontp}> Youth × UNHCR for Refugees</p>
              </Button>
              <br />
              <Button
                size="small"
                color="primary"
                href="https://www.unhcr.org/jp/youthxunhcr-for-refugees"
              >
                <FontAwesomeIcon style={iconStyle} icon={faLink} />
                <p className={styles.fontp}>WEBはこちら</p>
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://www.unhcr.org/jp/36315-wrd2021-youth-unhcr-for-refugees.html"
              >
                <FontAwesomeIcon style={iconStyle} icon={faLink} />
                <p className={styles.fontp}>WEBはこちら</p>
              </Button>
            </div>
            <div className={styles.contact}>
              <h2 className={styles.h3}>国連 UNHCR協会</h2>
              <Button
                size="small"
                color="primary"
                href="https://twitter.com/japanforunhcr?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              >
                <FontAwesomeIcon style={iconStyle} icon={faTwitter} />
                <p className={styles.fontp}>国連UNHCR協会</p>
              </Button>
              <br />
              <Button
                size="small"
                color="primary"
                href="https://www.instagram.com/japanforunhcr/"
              >
                <FontAwesomeIcon style={iconStyle} icon={faInstagram} />
                <p className={styles.fontp}>国連UNHCR協会</p>
              </Button>
              <br />
              <Button
                size="small"
                color="primary"
                href="https://www.facebook.com/japanforunhcr/"
              >
                <FontAwesomeIcon style={iconStyle} icon={faFacebook} />
                <p className={styles.fontp}>国連UNHCR協会</p>
              </Button>
              <br />
              <Button
                size="small"
                color="primary"
                href="https://www.youtube.com/user/JapanforUNHCR"
              >
                <FontAwesomeIcon style={iconStyle} icon={faYoutube} />
                <p className={styles.fontp}>国連UNHCR協会</p>
              </Button>
              <br />
              <Button
                size="small"
                color="primary"
                href="https://www.japanforunhcr.org/"
              >
                <FontAwesomeIcon style={iconStyle} icon={faLink} />
                <p className={styles.fontp}>WEBはこちら</p>
              </Button>
            </div>
            <div className={styles.contact}>
              <h2 className={styles.h3}>UNHCR駐日事務所</h2>
              <Button
                size="small"
                color="primary"
                href="https://twitter.com/UNHCR_Tokyo"
              >
                <FontAwesomeIcon style={iconStyle} icon={faTwitter} />
                <p className={styles.fontp}>
                  UNHCR Japan 国連難民高等弁務官駐日事務所
                </p>
              </Button>
              <br />
              <Button
                size="small"
                color="primary"
                href="https://www.facebook.com/unhcrorjp/"
              >
                <FontAwesomeIcon style={iconStyle} icon={faFacebook} />
                <p className={styles.fontp}>
                  UNHCR Japan 国連難民高等弁務官駐日事務所
                </p>
              </Button>
              <br />
              <Button
                size="small"
                color="primary"
                href="https://www.youtube.com/channel/UCiG4dK6TaS_5-nao6YCd7ZA"
              >
                <FontAwesomeIcon style={iconStyle} icon={faYoutube} />
                <p className={styles.fontp}>
                  UNHCR Japan 国連難民高等弁務官駐日事務所
                </p>
              </Button>
              <br />

              <Button
                size="small"
                color="primary"
                href="https://www.unhcr.org/jp/"
              >
                <FontAwesomeIcon style={iconStyle} icon={faLink} />
                <p className={styles.fontp}>WEBはこちら</p>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default UnhcrPage;
