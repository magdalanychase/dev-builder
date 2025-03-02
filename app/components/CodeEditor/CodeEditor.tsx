import './CodeEditor.css'
import { useState } from 'react'

export default function CodeEditor() {
  const [code, setCode] = useState('')
  return (
    <>
      <textarea value={code} onChange={(e) => setCode(e.target.value)} className='CodeEditor' placeholder="// Start Coding Here" />
    </>
  )
}