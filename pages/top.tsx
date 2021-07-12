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
      styles.back6
    );
    main.classList.add(stylenumber);
  };

  const cities = [
    { name: "TOWN", className: styles.back2 },
    { name: "run", className: styles.back3 },
    { name: "World", className: styles.back4 },
    { name: "nature", className: styles.back6 },
  ];

  return (
    <div id="main" className={styles.back1}>
      <span>
        <Nav />
        <Container>
          <div className={styles.buttons}>
            {cities.map((el) => (
              <Button
                key={el.name}
                onClick={() => changeBackgroundImage(el.className)}
              >
                {el.name}
              </Button>
            ))}
          </div>
          <EntryForm />
        </Container>
        <Footer />
      </span>
    </div>
  );
};

export default TopPage;
