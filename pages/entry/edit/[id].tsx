import Container from '@/components/container'
import Nav from '@/components/nav'
import EditEntryForm from '@/components/edit-entry-form'
import ReportForm from '@/components/report-form'

export default function EditEntryPage() {
  return (
    <>
      <Nav title="Edit" />
      <Container>
        <h2>ここで削除報告依頼をする</h2>
        <EditEntryForm />
        <ReportForm />
      </Container>
    </>
  )
}
