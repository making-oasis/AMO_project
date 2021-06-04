import * as React from "react";
import { useState, useRef, VFC } from "react";
import { ErrorModal } from "@/components/modal/error_modal";
import { SuccessModal } from "@/components/modal/success_modal";
import TextField from "@material-ui/core/TextField";
import Button from "@/components/button";
import { INPUTERRORMESSAGE, THANKSMESSAGE } from "../modal/constants";
import styles from "../../styles/plane.module.css";

const toMessage: string = "default" as const;
const report: string = "default" as const;
const wait = async (ms: number) => {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
};
const EntryForm: VFC = () => {
  const [handleName, setHandlename] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  //refを使い回すと片方のmodalの関数を実行できないためrefとreff用意。
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const reff = useRef<any>();

  //animation
  const handleClick = async () => {
    const plate = document.getElementById(styles.plate);
    const container = document.getElementById(styles.container);
    const curvables = document.querySelectorAll("." + styles.curvable);

    await wait(200);
    plate.classList.remove(styles.front);
    container.classList.remove(styles.beginning);
    curvables.forEach((curvable) => curvable.classList.add(styles.curved));

    await wait(2800);
    container.classList.add(styles.hover);

    await wait(2000);
    container.classList.add(styles.fly_away_first);

    await wait(600);
    container.classList.add(styles.fly_away);

    await wait(3000);
    //submit成功modal表示
    callSuccessModal();
    plate.classList.add(styles.front);
    container.classList.add(styles.beginning);
    container.classList.remove(
      styles.fly_away,
      styles.fly_away_first,
      styles.hover
    );
    curvables.forEach((curvable) => curvable.classList.remove(styles.curved));
  };
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
          toMessage,
          handleName,
          content,
          report,
        }),
      });
      setSubmitting(false);
      setHandlename("");
      setContent("");
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      console.log("success");
      handleClick();
    } catch (e) {
      callerrorModal();
      throw Error(e.message);
    }
  };

  //登録失敗成功時のmodal呼び出し
  const callSuccessModal = () => {
    console.log("submit success");
    // eslint-disable-next-line mdx/no-unused-expressions
    ref.current && ref.current.handleOpenSuccess();
  };
  const callerrorModal = () => {
    console.log("submit error");
    // eslint-disable-next-line mdx/no-unused-expressions
    reff.current && reff.current.handleOpen();
  };

  return (
    <div>
      <div id={styles.plate} className={styles.front}>
        <div className="my-4">
          <label htmlFor="handleName">
            <h3 className="font-bold">HandleName</h3>
          </label>
          <TextField
            name="handleName"
            value={handleName}
            onChange={(e) => setHandlename(e.target.value)}
            label="HandleName"
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
            label="Content"
            multiline
            rows={4}
            variant="outlined"
          />
        </div>
        <Button
          className={styles.send}
          disabled={submitting}
          onClick={submitHandler}
          type="submit"
        >
          {submitting ? "sending ..." : "send it"}
        </Button>
        <SuccessModal ref={ref} text={THANKSMESSAGE} />
        <ErrorModal ref={reff} text={INPUTERRORMESSAGE} />
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
