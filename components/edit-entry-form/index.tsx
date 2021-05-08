import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import Button from "../button";

export default function EntryForm() {
  const [_title, setTitle] = useState<string>("");
  const [_content, setContent] = useState<string>("");
  const [_report, setReport] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const router = useRouter();
  const { id, title, content, report } = router.query;

  useEffect(() => {
    if (typeof title === "string") {
      setTitle(title);
    }
    if (typeof content === "string") {
      setContent(content);
    }
    if (typeof report === "string") {
      setReport(report);
    }
  }, [title, content, report]);

  async function submitHandler(e) {
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
          title: _title,
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
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="my-4">
        <label htmlFor="title">
          <h3 className="font-bold">Title</h3>
        </label>
        <input
          id="title"
          className="shadow border rounded w-full"
          type="text"
          name="title"
          value={_title}
          onChange={(e) => setTitle(e.target.value)}
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
}
