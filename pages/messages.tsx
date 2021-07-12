import Nav from "@/components/nav";
import Container from "@/components/container";
import Skeleton from "react-loading-skeleton";
import { useEntries } from "@/lib/swr-hooks";
import Entries from "@/components/entries";
import ButtonLink from "@/components/button-link";
import styles from "../styles/backgroundPosts/post.module.css";

export default function NewEntryPage() {
  const { entries, isLoading } = useEntries();

  if (isLoading) {
    return (
      <div className={styles.backgroundimage}>
        <Nav />
        <Container>
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
        </Container>
      </div>
    );
  }

  return (
    <div className={styles.backgroundimage}>
      <Nav />
      <Container>
        <h1 className={styles.h1}>
          Total message {Object.keys(entries).length}
        </h1>
        <ButtonLink className={styles.fixbutton} href="/top">
          投稿ページ(Post page)へ
        </ButtonLink>
        <Entries entries={entries} />
      </Container>
    </div>
  );
}
