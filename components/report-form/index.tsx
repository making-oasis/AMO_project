import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ButtonLink from "@/components/button-link";
import Button from "../button";

const ReportForm = () => {
  const [_report, setReport] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const router = useRouter();
  const { id, handleName, content, report } = router.query;

  useEffect(() => {
    if (typeof report === "string") {
      setReport(report);
    }
  }, [handleName, content, report]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/report", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          report: _report,
        }),
      });
      const json = await res.json();
      setSubmitting(false);
      if (!res.ok) throw Error(json.message);
      //Router.push('/')
    } catch (e) {
      throw Error(e.message);
    }
  };

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="my-4">
        <label htmlFor="title">
          <h3 className="font-bold">HandleName</h3>
          {handleName}
        </label>
      </div>
      <div className="my-4">
        <label htmlFor="content">
          <h3 className="font-bold">Content</h3>
          {content}
        </label>
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
      <Button disabled={submitting} onClick={handleOpen} type="submit">
        {submitting ? "REPORTING ..." : "REPORT"}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">
              reported!
              <br />
              報告しました！
            </h2>
            <ButtonLink href={`/messages`} className="h-5 py-0 mx-1">
              To message list
            </ButtonLink>
          </div>
        </Fade>
      </Modal>
    </form>
  );
};

export default ReportForm;
