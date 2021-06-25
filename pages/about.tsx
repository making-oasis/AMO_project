import Nav from "@/components/nav";
import Container from "@/components/container";
import ButtonLink from "@/components/button-link";
import styles from "../styles/tabs/about.module.css";

const AboutPage = () => {
  return (
    <>
      <Nav />
      <Container>
        <ButtonLink className="h-5 py-0 mx-1" href="/en/about">
          to Japanese page (日本語ページへ)
        </ButtonLink>
        <h2 className={styles.h2}>
          An Ethiopian track and field athlete training alone, hoping to meet
          his separated family. <br />A Syrian athlete dreaming to play karate
          in Tokyo 2020 to rebuild the future <br />
          with like-situated athletes with different origins, especially for
          children.
        </h2>

        <p>Do you know “Refugee Olympic Team”？</p>

        <p className={styles.p2}>
          The Refugee Olympic Team is composed of athletes from various
          countries, which is different from national Olympic teams representing
          their own countries. So, you can see them wearing different jerseys.
        </p>

        <p>
          To send messages is a small but huge first step.
          <br /> Your small actions are going to make a huge difference.
        </p>

        <p className={styles.p2}>
          We hope that more and more people have interest in refugee issues by
          taking a small action. Despite the Covid-19, Fly your message can
          connect people online and inspire them to take further actions for
          refugees.
        </p>

        <p className={styles.isolate}>
          Don’t know anything about refugee issues?{" "}
        </p>

        <p className={styles.main}>
          You can start from knowing.
          <br />
          Forgot to think about it? Come back and get involved again.
          <br />
          Don’t know how to get involved? Take this chance as the first step.
        </p>

        <p className={styles.last}>
          “Fly your message” always supports your small actions. Fly your
          message and cheer for refugee athletes! Delivered all the way from
          Japan, your messages will become more powerful and encourage them.
        </p>
      </Container>
    </>
  );
};

export default AboutPage;
