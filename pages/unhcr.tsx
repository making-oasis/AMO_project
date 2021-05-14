import Nav from "@/components/nav";
import Container from "@/components/container";
import styles from "../styles/about.module.css";

const UnhcrPage = () => {
  return (
    <>
      <Nav />
      <Container>
        <h1 className={styles.h1}>What Unhcr?</h1>
        <h2 className={styles.h2}>this is About page</h2>
      </Container>
    </>
  );
};

export default UnhcrPage;
