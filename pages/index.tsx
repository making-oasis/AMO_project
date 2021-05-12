import ButtonLink from "@/components/button-link";
import { useEffect } from "react";
import $ from "jquery";
import styles from "../styles/opening.module.css";

//urlクリック時のtopページanimation
const IndexPage = () => {
  useEffect(() => {
    console.log("============== start DOM jQuery ==================");
    $(window)
      .scroll(() => {
        // selectors
        const $window = $(window);
        const $body = $("#" + styles.container);
        const $panel = $("#" + styles.panel);

        const scroll = $window.scrollTop() + $window.height() / 3;
        //console.log(scroll);

        $panel.each(() => {
          const $this = $(this);
          console.log("hello");
          console.log($this.position().top);

          if (
            $this.position().top <= scroll &&
            $this.position().top + $this.height() > scroll
          ) {
            console.log("here");
            $body.removeClass((index, css) => {
              return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
            });

            $body.addClass("color-" + $(this).data("color"));
          } else {
            console.log("this");
          }
        });
      })
      .scroll();
  }, []);
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.panel} data-color="white">
            <div>
              <h1 className={styles.h1}>ここに説明書くよ</h1>
              <p className={styles.p}>
                あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
              </p>
              <p>
                あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
              </p>
              <p>
                あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
              </p>
            </div>
          </div>
          <div className={styles.panel} data-color="violet">
            <h2 className={styles.h2}>あああああああああ</h2>
          </div>
          <div className={styles.panel} data-color="indigo">
            <h2 className={styles.h2}>あああああああああ</h2>
          </div>
          <div className={styles.panel} data-color="blue">
            <h2 className={styles.h2}>あああああああああ</h2>
          </div>
          <div className={styles.panel} data-color="green">
            <h2 className={styles.h2}>あああああああああ</h2>
          </div>
          <div className={styles.panel} data-color="yellow">
            <h2 className={styles.h2}>あああああああああ</h2>
          </div>
          <div className={styles.panel} data-color="orange">
            <h2 className={styles.h2}>あああああああああ</h2>
          </div>
          <div className={styles.panel} data-color="red">
            <h2 className={styles.h2}>あああああああああ</h2>
          </div>
          <div className={styles.panel} data-color="red">
            <div>
              <p className={styles.description}>
                <ButtonLink href="/top">Start</ButtonLink>
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default IndexPage;
