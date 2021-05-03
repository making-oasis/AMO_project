import Nav from '@/components/nav'
import Container from '@/components/container'
import EntryForm from '@/components/entry-form'
import Footer from '@/components/footer'

export default function IndexPage() {

    return (
      <div>
        <Nav />
        <Container>
          <div>
            <EntryForm />
          </div>
        </Container>
        <Footer />
      </div>
    )
}
