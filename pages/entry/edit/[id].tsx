import Container from "@/components/container";
import Nav from "@/components/nav";
import ReportForm from "@/components/report-form";
import styles from "../../../styles/backgroundPosts/post.module.css";

export default function EditEntryPage() {
  return (
    <>
      <Nav />
      <Container>
        <div>
          <h2 className={styles.en}>
            You can report the deletion of the message here.
            <br />
            Please enter the reason for deletion. The administrator will delete
            it.
          </h2>
          <h2 className={styles.h2}>
            ここでメッセージの削除報告をすることができます。
            <br />
            削除理由を記入してください。管理者が削除いたします。
          </h2>
        </div>
        <ReportForm />
      </Container>
    </>
  );
}
