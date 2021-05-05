import Nav from '@/components/nav'
import Container from '@/components/container'
import EntryForm from '@/components/entry-form'
import Footer from '@/components/footer'
import ButtonLink from '@/components/button-link'
import circle from '../sketch/circle'
import dynamic from 'next/dynamic'

const Canvas = dynamic(import('@/components/canvas'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});


export default function IndexPage() {

    return (
      <div>
        <Canvas sketch={circle} />
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
