import * as React from "react";
import { useState, useRef } from "react";
import Button from "@/components/button";
import TextField from "@material-ui/core/TextField";
import { TextModal } from "@/components/modal";
import { INPUTERRORMESSAGE } from "../modal/constants";

const report: string = "default" as const;

const EntryForm = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const ref = useRef<any>();

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

  return (
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
      <Button disabled={submitting} type="submit">
        {submitting ? "sending ..." : "send it"}
      </Button>
    </form>
  );
};

export default EntryForm;
