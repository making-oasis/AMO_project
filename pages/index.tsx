import styles from '../styles/Home.module.css'
import ButtonLink from '@/components/button-link'

const IndexPage = () => {

    return (
       <>
       <div className={styles.container}>
        <main className={styles.main}>
        <h1 className={styles.title}>
              Welcome to AMOapp
        </h1>
          <p>ここで初期リロード時のアプリケーションの使用方法を視覚的に見せるアニメーションを</p>
        <p className={styles.description}>
           <ButtonLink href="/top">Start</ButtonLink>
        </p>
        </main>
        </div>
  </>
  )
}

export default IndexPage
