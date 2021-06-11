import * as React from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Container from "@/components/container";
import EntryForm from "@/components/entry-form";
import Button from "@/components/button";
import styles from "../styles/background.module.css";

//投稿ページ(top page)
const TopPage = () => {
  const changeBackgroundImage = (stylenumber: string) => {
    const main = document.getElementById("main");
    main.classList.remove(
      styles.back1,
      styles.back2,
      styles.back3,
      styles.back4,
      styles.back5,
      styles.back6
    );
    main.classList.add(stylenumber);
  };

  const cities = [
    { name: "Tokyo", className: styles.back2 },
    { name: "sport", className: styles.back3 },
    { name: "New York", className: styles.back4 },
    { name: "San Francisco", className: styles.back5 },
    { name: "Beijing", className: styles.back6 },
  ];

  return (
    <div id="main" className={styles.back1}>
      <span>
        <Nav />
        <Container>
          <EntryForm />
          {cities.map((el) => (
            <Button
              key={el.name}
              onClick={() => changeBackgroundImage(el.className)}
            >
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
