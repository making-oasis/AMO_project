/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Link from "next/link";
import { mutate } from "swr";

import ButtonLink from "@/components/button-link";
import Button from "@/components/button";

type Entry = {
  id: number;
  title: string;
  content: string;
};

const Entry: React.FC<Entry> = ({ id, title, content }) => {
  const [deleting, setDeleting] = useState(false);

  async function deleteEntry() {
    setDeleting(true);
    const res = await fetch(`/api/delete-entry?id=${id}`, { method: "DELETE" });
    const json = await res.json();
    if (!res.ok) throw Error(json.message);
    mutate("/api/get-entries");
    setDeleting(false);
  }
  return (
    <div>
      <div className="flex items-center">
        <Link href={`/entry/${id}`}>
          <a className="font-bold py-2">{title}</a>
        </Link>
        <div className="flex ml-4">
          <ButtonLink
            href={`/entry/edit/${id}?title=${title}&content=${content}`}
            className="h-5 py-0 mx-1"
          >
            Reportする
          </ButtonLink>
          <Button
            disabled={deleting}
            onClick={deleteEntry}
            className="h-5 py-0 mx-1"
          >
            {deleting ? "Deleting ..." : "Delete"}
          </Button>
        </div>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Entry;
