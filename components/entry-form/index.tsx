import * as React from 'react';
import { useState } from 'react'
import Button from '@/components/button'
import TextField from '@material-ui/core/TextField';
//import { DEFAULT_REPORT } from './constants'
import { TransitionsModal } from '@/components/modal'

const report: string = "default" as const;

const EntryForm = () => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [submitting, setSubmitting] = useState<boolean>(false)

  const submitHandler = async (e) => {
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
          report,
        }),
      })

      console.log(title);
      setSubmitting(false);
      setTitle('');
      setContent('');
      const json = await res.json()
      console.log("success");
      setModal();
      if (!res.ok) throw Error(json.message)
    } catch (e) {
      console.log("error");
      throw Error(e.message)
    }
  }

  const setModal = () => {
    console.log("success");
    return (
      <TransitionsModal />
    );
  }

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
      <Button disabled={submitting} type="submit">
        {submitting ? 'sending ...' : 'send it'}
      </Button>
    </form>
  )
}

export default EntryForm;
