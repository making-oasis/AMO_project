/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useState } from "react";
// import Link from "next/link";
// import { mutate } from "swr";
import moment from "moment";

import ButtonLink from "@/components/button-link";
// import Button from "@/components/button";
import styles from "../../../styles/tabs/entries.module.css";

type Entry = {
  id: number;
  handleName: string;
  content: string;
  created_at: string;
};

const Entry: React.FC<Entry> = ({ id, handleName, content, created_at }) => {
  // const [deleting, setDeleting] = useState(false);
  
  const date = (): string => {
    return moment(created_at).format("YYYY/MM/DD HH:mm:ss")
  };

  // async function deleteEntry() {
  //   setDeleting(true);
  //   const res = await fetch(`/api/delete-entry?id=${id}`, { method: "DELETE" });
  //   const json = await res.json();
  //   if (!res.ok) throw Error(json.message);
  //   mutate("/api/get-entries");
  //   setDeleting(false);
  // }
  return (
    <div>
      <div className="flex items-center">
          <p className={styles.p}>HandleName : {handleName}</p>
        <div className="flex ml-4">
          <ButtonLink
            href={`/entry/edit/${id}?handleName=${handleName}&content=${content}`}
            className={styles.button}
            // "h-5 py-0 mx-1"
          >
            Reportする
          </ButtonLink>
          {/* <Button
            disabled={deleting}
            onClick={deleteEntry}
            className="h-5 py-0 mx-1"
          >
            {deleting ? "Deleting ..." : "Delete"}
          </Button> */}
          <p className={styles.p1}>Posted Date :{date()}</p>
        </div>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Entry;
