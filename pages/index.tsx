import ButtonLink from "@/components/button-link";
import { useEffect } from "react";
import $ from "jquery";
import Image from "next/image";
import styles from "../styles/opening.module.css";

//urlクリック時のtopページanimation
const IndexPage = () => {
  useEffect(() => {
    console.log("============== start DOM jQuery ==================");
    $(window)
      .scroll(() => {
        // selectors
        const $window = $(window);
        const $body = $("#" + styles.main);
        const $panel = $("#" + styles.panel);
        console.log($window);
        console.log(typeof $panel);

        const scroll = $window.scrollTop() + $window.height() / 3;
        console.log(scroll);

        $panel.each(() => {
          const $this = $(this);
          console.log(typeof $this);
          console.log("hello");

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
            console.log("here");
          }
        });
      })
      .scroll();
  }, []);

  return (
    <>
      <div className={styles.panel}>
        <div>
          <h1 className={styles.h1}>投稿を通して、小さなアクションの経験を</h1>
          <p className={styles.p}>Experience small actions through posts</p>
        </div>
      </div>
      <div className={styles.panel}>
        <div>
          <p className={styles.p}>
            {" "}
            Aは難民選手団へ応援メッセージを送ることができるアプリです。
            <br />{" "}
            「メッセージを送る」という小さなアクションは難民支援に繋がります。
          </p>
          <p>
            <Image src={"/landing/top.png"} width={500} height={400} />
          </p>
        </div>
      </div>
      <div className={styles.panel}>
        <div>
          <h1 className={styles.h1}>
            小さなアクションから関心
            <br />
            そして
            <br />
            より大きなアクションへ
          </h1>
          <p>
            <Image src={"/landing/top2.png"} width={500} height={400} />
          </p>
          <p className={styles.p}>
            {" "}
            その積み重ねが大きな変化を生み出します。
            <br /> そしてそのメッセージは実際に難民選手団へ届きます。
          </p>
        </div>
      </div>
      <div className={styles.panel} data-color="red">
        <div>
          <p className={styles.description}>
            私たちは、この「メッセージを送る」というアクションを通して
            <br />
            より多くの人に難民問題に関心をもってもらえることを願っています。
            <br />
            メッセージを送ることで難民選手団を応援しましょう！
            <br />
            <ButtonLink href="/top">Start</ButtonLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
