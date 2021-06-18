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
            messageは、難民アスリートへ応援メッセージを送るためのアプリです。
            <br />
            「メッセージを送る」という小さなアクションは難民支援につながります。
          </p>
          <div className={styles.p}>
            <Image src={"/landing/bule.png"} width={500} height={400} />
          </div>
          <p className={styles.p}>
            “Fly your message” is an application that allows you to send a
            supportive message to refugee athletes.
          </p>
          <p className={styles.p}>The small action leads to refugee support.</p>
        </div>
      </div>
      <div className={styles.panel}>
        <div>
          <h1 className={styles.action}>
            小さなアクションから関心を高め
            <br />
            <p className={styles.pp}>そして</p>
            より大きなアクションへ
          </h1>
          <h1 className={styles.action}>
            small actions , leading to bigger actions.
          </h1>
          <div className={styles.p}>
            <Image src={"/landing/top2.png"} width={500} height={400} />
          </div>
          <p className={styles.ppp}>
            始めの一歩は小さくても
            <br />
            その積み重ねがやがて大きな変化を生み出します。
            <br />
            The small first step is going to make a huge difference.
          </p>
          <p className={styles.p}>
            メッセージは実際に難民アスリートのもとに届けられます。
            <br />
            Your message will be delivered to refugee athletes.
          </p>
        </div>
      </div>

      <div className={styles.panel} data-color="red">
        <div>
          <p className={styles.description}>
            小さなアクションを通して、より多くの人に難民問題に関心を持ってほしい。私たちはそう願っています
            <br />
            メッセージを送り、難民アスリートを応援しましょう！
          </p>
          <p className={styles.description}>
            We hope that more and more people have interest in refugee issues by
            taking a small action.
            <br />
            Fly your message and cheer for refugee athletes!
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
