import * as React from 'react';
import { useState } from 'react'
import Button from '@/components/button'
import TextField from '@material-ui/core/TextField';

type Post = {
    title: string;
    content: string;
};

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
        }),
      })
      setSubmitting(false);
      setTitle('');
      setContent('');
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
    } catch (e) {
      throw Error(e.message)
    }
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
          onChange={(e) => setTt(e.target.value)}
          label="to"
          variant="standard"
          defaultValue="Default Value"
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
          defaultValue="Default Value"
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
