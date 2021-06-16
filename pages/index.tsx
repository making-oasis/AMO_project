import ButtonLink from "@/components/button-link";
import Image from "next/image";
import { gsap } from "gsap";
import Title from "@/components/gsap/Title";
import { CSSTransition } from "react-transition-group";
import styles from "../styles/landing/opening.module.css";
import styless from "../styles/App.module.scss";

const IndexPage = () => {
  const onEnter = (node) => {
    gsap.from(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: 30,
        delay: 0.6,
        ease: "power3.InOut",
        opacity: 0,
        stagger: {
          amount: 0.6,
        },
      }
    );
  };

  return (
    <>
      <div className={styles.panel}>
        <div className={styless.container}>
          <CSSTransition
            in={true}
            timeout={1200}
            classNames="page"
            onEntering={onEnter}
            unmountOnExit
          >
            <div className={styless.page}>
              <div className={styless.inner}>
                <Title
                  lineContent="Fly your message"
                  lineContent2=""
                  lineContent3=""
                />
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>
      <div className={styles.panel}>
        <div>
          <p className={styles.h1}>投稿を通して小さなアクションの経験を</p>
          <p className={styles.h1}>Experience small actions through posts</p>
        </div>
      </div>

      <div className={styles.panel}>
        <div>
          <p className={styles.p}>
            Fly your
            messageは難民選手団へ応援メッセージを送ることができるアプリです。
            <br />
            「メッセージを送る」という小さなアクションは難民支援に繋がります。
          </p>
          <div className={styles.p}>
            <Image src={"/landing/bule.png"} width={500} height={400} />
          </div>
          <p className={styles.p}>
            Fly your message is an application that allows you to send a support
            message to the refugee team.
          </p>
          <p className={styles.p}>
            The small action of "sending a message" leads to refugee assistance.
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
          <h1 className={styles.h1}>
            small actions , leading to bigger actions.
          </h1>
          <div className={styles.p}>
            <Image src={"/landing/top2.png"} width={500} height={400} />
          </div>
          <p className={styles.ppp}>
            その積み重ねが大きな変化を生み出します。
            <br />
            そしてそのメッセージは実際に難民選手団へ届きます。
          </p>
          <p className={styles.p}>
            The accumulation makes a big change.
            <br />
            Your message will be sent to refugees.
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
          </p>
          <p className={styles.description}>
            We hope that more people have an attention to refugee issues by
            “sending a message”.
            <br />
            Let’s cheer for refugees all over the world by using Fly your
            message!
          </p>
        </div>
      </div>
      <div className={styles.bodyy}>
        <div className={styles.panel} data-color="red">
          <div>
            <p className={styles.button}>
              <ButtonLink href="/top">Start</ButtonLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
