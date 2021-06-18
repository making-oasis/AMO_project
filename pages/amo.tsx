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
        <ButtonLink className="h-5 py-0 mx-1" href="/ja/amo">
          to Japanese page (日本語ページへ)
        </ButtonLink>
        <div className={styles.image}>
          <Image src={"/tabs/amo.jpeg"} width={350} height={350} />
        </div>
        <h2 className={styles.h2}>What is AMO (Apps for Making Oasis)?</h2>
        <p className={styles.p1}>
          AMO was founded to nurture one’s ability to utilize IT when tackling
          world wide issues. AMO members that are familiar with IT skills,
          knowledge and expertise corporate with organizations that work on
          world wide issues like SDGs to nurture the next generation leaders.
        </p>
        <h2 className={styles.h2}>The concept of AMO</h2>
        <p className={styles.p1}>
          -To make a society full of love (in Italian “amo”) that embraces all.
          -To be an oasis that gives hope to a world full of issues, where the
          future is as uncertain as a desert by nurturing leaders. With these in
          mind, we named the organization AMO.
        </p>
        <h2 className={styles.h2}>Why IT ? </h2>
        <p className={styles.p1}>
          We focus on the aspect that IT has ,the ability to convey information
          and connect people. Through IT, platforms like Web services and SNS
          ,where people get connected and where information is delivered, are
          created. Although IT itself can not solve world wide issues ,we
          believe that we can support those who need help by drawing peoples’
          attention. However, the extent AMO members can reach and the extent
          AMO members can see is very limited. This is why we chose to focus on
          educating young students and nurturing people who can utilize IT to
          make the world a better place together. In educational institutions,
          IT is taught as a means. To nurture leaders that can think in a social
          perspective and utilize IT, we provide opportunities to participate in
          a project where students can train their ability to think based on
          social issues.
        </p>
        <h2 className={styles.h2}>AMO</h2>
        <Button
          size="small"
          color="primary"
          href="https://twitter.com/apps_oasis"
        >
          <FontAwesomeIcon style={iconStyle} icon={faTwitter} />
          <p className={styles.fontp}>Click here for AMO's TWITTER</p>
        </Button>
        <br />
        <Button
          size="small"
          color="primary"
          href="https://www.facebook.com/makingoasis2021"
        >
          <FontAwesomeIcon style={iconStyle} icon={faFacebook} />
          <p className={styles.fontp}>Click here for AMO's Facebook</p>
        </Button>
        <br />
        <Button size="small" color="primary" href="https://making-oasis.com">
          <FontAwesomeIcon style={iconStyle} icon={faLink} />
          <p className={styles.fontp}>Click here for AMO's HP</p>
        </Button>
      </Container>
    </>
  );
};

export default AmoPage;
