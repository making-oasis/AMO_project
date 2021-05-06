import Nav from '@/components/nav'
import Container from '@/components/container'
import EntryForm from '@/components/entry-form'
import Footer from '@/components/footer'
import styles from '../styles/plane.module.css'
import { useEffect, useState } from 'react'
import $ from 'jquery';

const TopPage= () => {

  useEffect(() => {
    console.log("============== hello world ==================");
    $("." + styles.send).click( ()=> {
      setTimeout( ()=> {
        $("#" + styles.plate).removeClass(styles.front);
        $("#" + styles.container).removeClass(styles.beginning);
        $("." + styles.curvable).addClass(styles.curved);
        setTimeout( ()=>  {
          $("#" + styles.container).addClass(styles.hover);
          setTimeout( ()=>  {
            $("#" + styles.container).addClass(styles.fly_away_first);
            setTimeout(()=> {
              $("#" + styles.container).addClass(styles.fly_away);
              setTimeout( ()=>  {
                $("#" + styles.plate).addClass(styles.front);
                $("#" + styles.container)
                  .removeClass(
                    `${styles.fly_away} ${styles.fly_away_first} hover`
                  )
                  .addClass(styles.beginning);
                $("." + styles.curvable).removeClass(styles.curved);
              }, 3000);
            }, 600);
          }, 2000);
        }, 2800);
      }, 200);
    });
  }, []);

  const send = () => {
    console.log("hello")
  }

  return (
    <div>
      {/* <Canvas sketch={circle} /> */}
      <Nav />
      <Container>
        <div>
        </div>
        <div>
          <div id={styles.plate} className={styles.front}>
            <EntryForm />
            <button className={styles.send} onClick={send}> Send it </button> <br />
          </div>
          <div id={styles.container} className={styles.beginning}>
            <div id={styles.leftWing}>
              <div className={`${styles.top_left} ${styles.curvable}`}> </div>
              <div className={`${styles.bottom_left} ${styles.curvable}`}>
                {" "}
              </div>
              <div className={`${styles.wing} ${styles.wing1}`}></div>
              <div className={`${styles.wing} ${styles.wing2}`}></div>
            </div>
            <div id={styles.rightWing}>
              <div className={`${styles.top_right} ${styles.curvable}`}> </div>
              <div className={`${styles.bottom_right} ${styles.curvable}`}>
                {" "}
              </div>
              <div className={`${styles.wing} ${styles.wing3}`}></div>
              <div className={`${styles.wing} ${styles.wing4}`}></div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
export default TopPage
