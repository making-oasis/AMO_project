import Container from "@/components/container";
import Nav from "@/components/nav";
//import EditEntryForm from '@/components/edit-entry-form'
import ReportForm from "@/components/report-form";

export default function EditEntryPage() {
  return (
    <>
      <Nav />
      <Container>
        <h2>
          ここでメッセージの削除報告をすることができます。削除理由を記入してください。管理者が削除いたします。
        </h2>
        <ReportForm />
      </Container>
    </>
  );
}
