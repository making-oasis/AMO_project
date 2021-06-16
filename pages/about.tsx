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
          Refugee athletes is a team composed of athletes from diverse
          countries, different from national teams in the Olympics representing
          their own countries.
        </p>

        <p>
          Experience sending messages.
          <br />
          We would like to raise attentions through small actions , leading to
          bigger actions.
        </p>

        <p className={styles.p2}>
          We hope that more people have an attention to refugee issues by
          “sending a message”. We thought that this hope will come true by Fly
          your message. Many people can take an action on the web, even if
          people are restricted to meet others (in) face to face because of
          COVID-19.
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
          for refugees all over the world by using Fly your message! our message
          will be sent to refugees. We believe that these messages will touch
          them to the heart.
        </p>
      </Container>
    </>
  );
};

export default AboutPage;
