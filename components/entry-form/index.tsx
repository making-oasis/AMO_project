import * as React from "react";
import { useState, useEffect, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import $ from "jquery";
import Button from "@/components/button";
import { TextModal } from "@/components/modal";
import { INPUTERRORMESSAGE, THANKSMESSAGE } from "../modal/constants";
import styles from "../../styles/plane.module.css";

const report: string = "default" as const;

const EntryForm = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const ref = useRef<any>();

  useEffect(() => {
    //Planeを飛ばすanimation/jQueryで
    $("." + styles.send).click(() => {
      setTimeout(() => {
        $("#" + styles.plate).removeClass(styles.front);
        $("#" + styles.container).removeClass(styles.beginning);
        $("." + styles.curvable).addClass(styles.curved);
        setTimeout(() => {
          $("#" + styles.container).addClass(styles.hover);
          setTimeout(() => {
            $("#" + styles.container).addClass(styles.fly_away_first);
            setTimeout(() => {
              $("#" + styles.container).addClass(styles.fly_away);
              setTimeout(() => {
                $("#" + styles.plate).addClass(styles.front);
                $("#" + styles.container)
                  .removeClass(
                    `${styles.fly_away} ${styles.fly_away_first} hover`
                  )
                  .addClass(styles.beginning);
                $("." + styles.curvable).removeClass(styles.curved);
                callThanksModal();
              }, 3000);
            }, 600);
          }, 2000);
        }, 2800);
      }, 200);
    });
  }, []);
  //登録処理
  const submitHandler = async (e) => {
    setSubmitting(true);
    e.preventDefault();
    try {
      const res = await fetch("/api/create-entry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          report,
        }),
      });

      console.log(title);
      setSubmitting(false);
      setTitle("");
      setContent("");
      const json = await res.json();
      console.log("success");
      if (!res.ok) throw Error(json.message);
    } catch (e) {
      callerrorModal();
      throw Error(e.message);
    }
  };
  //親コンポから子コンポのhandleOpenメソッドを実行
  const callerrorModal = () => {
    // eslint-disable-next-line mdx/no-unused-expressions
    ref.current && ref.current.handleOpen();
  };
  const callThanksModal = () => {
    // eslint-disable-next-line mdx/no-unused-expressions
    ref.current && ref.current.handleOpen();
  };

  return (
    <div>
      <div id={styles.plate} className={styles.front}>
        <form onSubmit={submitHandler}>
          <div className="my-4">
            <label htmlFor="title">
              <h3 className="font-bold">to</h3>
            </label>
            <TextField
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              label="to"
              variant="standard"
            />
          </div>
          <div className="my-4">
            <label htmlFor="content">
              <h3 className="font-bold">Content</h3>
            </label>
            <TextField
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              label="messages"
              multiline
              rows={4}
              variant="outlined"
            />
          </div>
          <TextModal ref={ref} text={INPUTERRORMESSAGE} />
          <TextModal ref={ref} text={THANKSMESSAGE} />
          <Button className={styles.send} disabled={submitting} type="submit">
            {submitting ? "sending ..." : "send it"}
          </Button>
        </form>
      </div>
      <div id={styles.container} className={styles.beginning}>
        <div id={styles.leftWing}>
          <div className={`${styles.top_left} ${styles.curvable}`}> </div>
          <div className={`${styles.bottom_left} ${styles.curvable}`}> </div>
          <div className={`${styles.wing} ${styles.wing1}`}></div>
          <div className={`${styles.wing} ${styles.wing2}`}></div>
        </div>
        <div id={styles.rightWing}>
          <div className={`${styles.top_right} ${styles.curvable}`}> </div>
          <div className={`${styles.bottom_right} ${styles.curvable}`}> </div>
          <div className={`${styles.wing} ${styles.wing3}`}></div>
          <div className={`${styles.wing} ${styles.wing4}`}></div>
        </div>
      </div>
    </div>
  );
};

export default EntryForm;
