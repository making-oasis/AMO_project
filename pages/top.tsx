import Nav from '@/components/nav'
import Container from '@/components/container'
import EntryForm from '@/components/entry-form'
import Footer from '@/components/footer'
import ButtonLink from '@/components/button-link'
//import { useEntries } from '@/lib/swr-hooks'

export default function IndexPage() {

    return (
      <div>
        <Nav />
        <Container>
          <div>
            <ButtonLink href="/new">e</ButtonLink>
          </div>
          <div>
            <EntryForm />
          </div>

        </Container>
        <Footer />
      </div>
    )
}
