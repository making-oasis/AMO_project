import Link from 'next/link'
import Container from '@/components/container'
import ButtonLink from '@/components/button-link'
import Image from 'next/image';

export default function Nav({ title = 'AMO' }) {
  return (
    <Container className="py-4">
      <nav>
        <div className="flex justify-between items-center">
          <Link href="/top">
            <a><Image src={"/amo.jpeg"} width={100}　height={100}  /></a>
          </Link>
          <div className="flex justify-end items-center">
            <div>
            <Link href="/new">
            <a className="font-bold text-1xl pr-4">All Messages</a>
            </Link>{' '}
            </div>
            <Link href="/about">
              <a className="font-bold text-1xl pr-4">ABOUT</a>
            </Link>{' '}
            <Link href="/unhcr">
              <a className="font-bold text-1xl pr-3">UNHCRについて</a>
            </Link>{' '}
            <Link href="/amo">
              <a className="font-bold text-1xl pr-3">AMOについて</a>
            </Link>{' '}
              <ButtonLink href="/contact">Contact</ButtonLink>
          </div>
        </div>
      </nav>
    </Container>
  )
}
