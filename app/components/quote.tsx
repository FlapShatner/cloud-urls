import React, { useState } from 'react'
import Button from './button'
import { addQuotesToUrls, downloadQuotedUrls } from '../utils'

const QuoteURLsComponent = () => {
  const [input, setInput] = useState('')
  const [quotedUrls, setQuotedUrls] = useState('')

  const handleInputChange = (event: any) => {
    setInput(event.target.value)
  }

  const handleAddQuotes = () => {
    const quoted = addQuotesToUrls(input)
    setQuotedUrls(quoted)
  }

  return (
    <div>
      <textarea className='mx-8 px-4 py-2' value={input} onChange={handleInputChange} placeholder='Enter URLs, one per line' rows={10} cols={50} />
      <div className='flex gap-2 justify-center mt-2'>
        <Button onClick={handleAddQuotes}>Add Quotes</Button>
        <Button onClick={() => downloadQuotedUrls(quotedUrls)} disabled={!quotedUrls}>
          Download Quoted URLs
        </Button>
      </div>
      {quotedUrls && (
        <div>
          <h3>Quoted URLs:</h3>
          <pre>{quotedUrls}</pre>
        </div>
      )}
    </div>
  )
}

export default QuoteURLsComponent
