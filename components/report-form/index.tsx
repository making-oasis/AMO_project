import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import Button from '../button'

const ReportForm = () => {
  const [_report, setReport] = useState<string>('')
  const [submitting, setSubmitting] = useState<boolean>(false)
  const router = useRouter()
  const { id, report } = router.query

  useEffect(() => {
    if (typeof report === 'string') {
      setReport(report)
    }
  }, [report])

  async function submitHandler(e) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/report', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          report: _report,
        }),
      })
      const json = await res.json()
      setSubmitting(false)
      if (!res.ok) throw Error(json.message)
      Router.push('/')
    } catch (e) {
      throw Error(e.message)
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="my-4">
        <label htmlFor="report">
          <h3 className="font-bold">削除理由を以下に掲載してください。(reasons for delete)</h3>
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
        {submitting ? 'Saving ...' : 'Save'}
      </Button>
    </form>
  )
}

export default ReportForm
