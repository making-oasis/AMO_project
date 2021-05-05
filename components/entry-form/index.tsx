import React from 'react';
import { useState, useEffect } from 'react'
import Button from '@/components/button'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export default function EntryForm() {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [submitting, setSubmitting] = useState(false)

  async function submitHandler(e) {
    setSubmitting(true)
    e.preventDefault()
    try {
      const res = await fetch('/api/create-entry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
        }),
      })
      setSubmitting(false);
      setTitle('');
      setContent('');
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
    } catch (e) {
      handleOpen();
      //throw Error(e.message)
    }
  }

  const useStyles = makeStyles((theme) => ({
  　　modal: {
  　　  display: 'flex',
  　　  alignItems: 'center',
  　　  justifyContent: 'center',
  　　},
  　　paper: {
  　　  backgroundColor: theme.palette.background.paper,
  　　  border: '2px solid #000',
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

  useEffect(() => {
  });

  return (
    <form onSubmit={submitHandler}>
      <div className="my-4">
        <label htmlFor="title">
          <h3 className="font-bold">title</h3>
        </label>
        <input
          id="title"
          className="shadow border rounded w-full"
          type="text"
          name="title"
          value={title}
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
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <Button disabled={submitting} type="submit">
        {submitting ? 'Creating ...' : 'Create'}
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
            <h2 id="transition-modal-title">submit error</h2>
            <p id="transition-modal-description">登録に失敗しました。</p>
          </div>
        </Fade>
      </Modal>
    </form>
  )
}
