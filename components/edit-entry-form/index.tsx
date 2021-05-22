import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import Button from "../button";

export const EntryForm = () => {
  const [_toMessage, setTomessage] = useState<string>("");
  const [_fromMessage, setFrommessage] = useState<string>("");
  const [_content, setContent] = useState<string>("");
  const [_report, setReport] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const router = useRouter();
  const { id, toMessage, fromMessage, content, report } = router.query;

  useEffect(() => {
    if (typeof toMessage === "string") {
      setTomessage(toMessage);
    }
    if (typeof fromMessage === "string") {
      setFrommessage(fromMessage);
    }
    if (typeof content === "string") {
      setContent(content);
    }
    if (typeof report === "string") {
      setReport(report);
    }
  }, [toMessage, fromMessage, content, report]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/edit-entry", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          toMessage: _toMessage,
          fromMessage: _fromMessage,
          content: _content,
          report: _report,
        }),
      });
      const json = await res.json();
      setSubmitting(false);
      if (!res.ok) throw Error(json.message);
      Router.push("/");
    } catch (e) {
      throw Error(e.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="my-4">
        <label htmlFor="to">
          <h3 className="font-bold">To</h3>
        </label>
        <input
          id="to"
          className="shadow border rounded w-full"
          type="text"
          name="to"
          value={_toMessage}
          onChange={(e) => setTomessage(e.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="from">
          <h3 className="font-bold">From</h3>
        </label>
        <input
          id="from"
          className="shadow border rounded w-full"
          type="text"
          name="from"
          value={_fromMessage}
          onChange={(e) => setFrommessage(e.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="content">
          <h3 className="font-bold">Content</h3>
        </label>
        <textarea
          className="shadow border resize-none focus:shadow-outline w-full h-48"
          id="content"
          name="content"
          value={_content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="report">
          <h3 className="font-bold">
            削除理由を以下に掲載してください。(reasons for delete)
          </h3>
        </label>
        <input
          id="report"
          className="shadow border rounded w-full"
          type="text"
          name="report"
          value={_report}
          onChange={(e) => setReport(e.target.value)}
        />
      </div>
      <Button disabled={submitting} type="submit">
        {submitting ? "Saving ..." : "Save"}
      </Button>
    </form>
  );
};
