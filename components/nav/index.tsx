/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import Container from "@/components/container";
import styles from "../../styles/nav.module.css";

const Nav = () => {
  return (
    <Container className="py-4">
      <nav>
        <div className="flex-auto justify-between items-center">
          <Link href="/top">
            <a className="font-bold text-3xl">
              <p className={styles.logo}>Fly your message</p>
            </a>
          </Link>
          <div className="flex justify-end items-center">
            <div className={styles.links}>
              <Link href="/messages">
                <a className="font-bold text-1xl pr-4">All Messages</a>
              </Link>{" "}
              <Link href="/about">
                <a className="font-bold text-1xl pr-4">ABOUT</a>
              </Link>{" "}
              <Link href="/unhcr">
                <a className="font-bold text-1xl pr-3">
                  Youth×UNHCR for Refugees
                </a>
              </Link>{" "}
              <Link href="/amo">
                <a className="font-bold text-1xl pr-3">AMO</a>
              </Link>{" "}
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Nav;
