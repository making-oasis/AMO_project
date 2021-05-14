import Nav from "@/components/nav";
import Container from "@/components/container";
import Image from "next/image";
import styles from "../styles/about.module.css";

const AmoPage = () => {
  return (
    <>
      <Nav />
      <Container>
        <h1 className={styles.h1}>What is AMO?</h1>
        <h2 className={styles.h2}>this is About page</h2>
        <div className={styles.flex}>
          <p>
            <Image src={"/sample.jpg"} width={600} height={400} />
          </p>
          <p className={styles.p1}>
            Hiding behind the couch until lured out by a feathery toy instead of
            drinking water from the cat bowl, make sure to steal water from the
            toilet so hide at bottom of staircase to trip human stinky cat, or
            favor packaging over toy, sit on human they not getting up ever so
            x. Run outside as soon as door open caticus cuteicus 𝕄𝔼𝕆𝕎, and chase
            imaginary bugs, and scratch my tummy actually i hate you now fight
            me scratch leg; meow for can opener to feed me. do not try to mix
            old food with new one to fool me! do i like standing on litter cuz i
            sits when i have spaces, my cat buddies have no litter i live in
            luxury cat life and throw down all the stuff in the kitchen. Find
            empty spot in cupboard and sleep all day i want to go outside let me
            go outside nevermind inside is better so i like cats because they
            are fat and fluffy scratch my tummy actually i hate you now fight me
            and lick the other cats thug cat. love you, then bite you push your
            rip human flee in terror
          </p>
        </div>
      </Container>
    </>
  );
};

export default AmoPage;
