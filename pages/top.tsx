import * as React from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Container from "@/components/container";
import EntryForm from "@/components/entry-form";
import Button from "@/components/button";
import styles from "../styles/background.module.css";

//投稿ページ(top page)
const TopPage = () => {
  const test = () => {
    console.log("test1");
    const ground = document.getElementById("ground");
    ground.classList.remove(
      styles.back1,
      styles.back2,
      styles.back3,
      styles.back4,
      styles.back5,
      styles.back6
    );
    ground.classList.add(styles.back2);
  };
  const test2 = () => {
    console.log("test2");
    const ground = document.getElementById("ground");
    ground.classList.remove(
      styles.back1,
      styles.back2,
      styles.back3,
      styles.back4,
      styles.back5,
      styles.back6
    );
    ground.classList.add(styles.back3);
  };
  const test3 = () => {
    console.log("test3");
    const ground = document.getElementById("ground");
    ground.classList.remove(
      styles.back1,
      styles.back2,
      styles.back3,
      styles.back4,
      styles.back5,
      styles.back6
    );
    ground.classList.add(styles.back4);
  };
  const test4 = () => {
    console.log("test4");
    const ground = document.getElementById("ground");
    ground.classList.remove(
      styles.back1,
      styles.back2,
      styles.back3,
      styles.back4,
      styles.back5,
      styles.back6
    );
    ground.classList.add(styles.back5);
  };
  const test5 = () => {
    console.log("test5");
    const ground = document.getElementById("ground");
    ground.classList.remove(
      styles.back1,
      styles.back2,
      styles.back3,
      styles.back4,
      styles.back5,
      styles.back6
    );
    ground.classList.add(styles.back6);
  };

  return (
    <div id="ground" className={styles.back1}>
      <span>
        <Nav />
        <Container>
          <EntryForm />
          <Button onClick={test}>1</Button>
          <Button onClick={test2}>2</Button>
          <Button onClick={test3}>3</Button>
          <Button onClick={test4}>4</Button>
          <Button onClick={test5}>5</Button>
        </Container>
        <Footer />
      </span>
    </div>
  );
};

export default TopPage;
