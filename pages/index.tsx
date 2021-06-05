import ButtonLink from "@/components/button-link";
import Image from "next/image";
import styles from "../styles/opening.module.css";

const IndexPage = () => {
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
            <p className={styles.pp}>そして</p>
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
