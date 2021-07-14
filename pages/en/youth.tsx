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
import styles from "../../styles/tabs/youth.module.css";

const UnhcrPage = () => {
  const iconStyle: React.CSSProperties = { padding: 10, fontSize: 50 };
  return (
    <>
      <Nav />
      <Container>
        <ButtonLink className="h-5 py-0 mx-1" href="/unhcr">
          to Japanese page (日本語ページへ)
        </ButtonLink>
        <div className={styles.flex}>
          <h1 className={styles.h2}>About Youth × UNHCR for Refugees</h1>

          <div className={styles.image}>
            <Image src={"/tabs/youth2.png"} width={400} height={400} />
          </div>
          <p>
            There are many student organizations throughout Japan that are
            working to support refugees.In order to further expand the circle of
            refugee support with the power of young people, the "Youth x UNHCR
            for Refugees Project" was born by volunteer members in the wake of
            "World Refugee Day" in 2020 as a platform.
          </p>
          <p className={styles.p1}>The concept is.</p>
          <p className={styles.main}>
            "Now is the time to tell the story of refugees in order to expand
            the circle of thoughts, A youth project that connects with ale and
            creates light ”
          </p>

          <p className={styles.p1}>
            While people all over the world are facing difficulties due to the
            effects of the new coronavirus infection (COVID-19), the members of
            this project are running this project as a prayer for peace and to
            create a world where no one is left behind, including those who have
            become refugees.
          </p>
          <p className={styles.p1}>
            By uniting students and organizations that share the same feelings,
            we can deliver a wide range of voices. We hope that the number of
            people who are interested in refugee issues in Japan will increase,
            and that this will lead to individual action.
          </p>

          <p className={styles.p1}>This project</p>
          <p className={styles.main}>
            "Fly your message - Deliver! Blue paper airplane with your message
            on it"
          </p>

          <p className={styles.p1}>➢Purpose.</p>
          <p className={styles.p1}>
            We will deepen our understanding of refugee issues using paper
            planes, which are also a symbol of Youth x UNHCR for Refugees,
            communicate our intentions for cooperation and solidarity, and
            create a movement to support refugees.
          </p>
          <p className={styles.p1}>➢Purpose / background .</p>
          <p className={styles.p1}>
            The new coronavirus continues to cause severe conditions and
            humanitarian crises around the world.The humanitarian crisis is
            becoming more serious. Now is the time for young people in Japan to
            deepen their understanding of the refugee issue and show their
            solidarity together. We believe in power of sports, and sports
            empower refugee people.
          </p>
        </div>
        <h1 className={styles.h2}>About UNHCR</h1>
        <p className={styles.p2}>
          The office of the United Nations High Commissioner for Refugees
          (UNHCR) was created in 1950, during the aftermath of the Second World
          War, to help millions of Europeans who had fled or lost their
          homes.Today, over 70 years later, our organization is still hard at
          work, protecting and assisting refugees around the world. In order to
          respond to the growing and complex refugee problem, UNHCR receives
          support from governments and private sectors around the world.
        </p>
        <ButtonLink className={styles.fixbutton} href="/top">
          To Post page
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
                <p className={styles.fontp}>Click here for WEB</p>
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://www.unhcr.org/jp/36315-wrd2021-youth-unhcr-for-refugees.html"
              >
                <FontAwesomeIcon style={iconStyle} icon={faLink} />
                <p className={styles.fontp}>Click here for WEB</p>
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
                <p className={styles.fontp}>Click here for WEB</p>
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
                <p className={styles.fontp}>Click here for WEB</p>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default UnhcrPage;
