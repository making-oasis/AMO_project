import * as React from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Container from "@/components/container";
import EntryForm from "@/components/entry-form";
import Button from "@/components/button";
import styles from "../styles/background.module.css";

//投稿ページ(top page)
const TopPage = () => {
  const test = (any: string) => {
    const ground = document.getElementById("ground");
    ground.classList.remove(
      styles.back1,
      styles.back2,
      styles.back3,
      styles.back4,
      styles.back5,
      styles.back6
    );
    ground.classList.add(any);
  };

  const cities = [
    { name: "Dallas", label: styles.back2 },
    { name: "Austin", label: styles.back3 },
    { name: "New York", label: styles.back4 },
    { name: "San Francisco", label: styles.back5 },
    { name: "Beijing", label: styles.back6 },
  ];

  return (
    <div id="ground" className={styles.back1}>
      <span>
        <Nav />
        <Container>
          <EntryForm />
          {cities.map((el) => (
            <Button key={el.name} onClick={() => test(el.label)}>
              {el.name}
            </Button>
          ))}
        </Container>
        <Footer />
      </span>
    </div>
  );
};

export default TopPage;
