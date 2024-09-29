'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'

interface NotesProps {
  lessonId: string
}

const Notes: React.FC<NotesProps> = ({ lessonId }) => {
  const [content, setContent] = useState('')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const savedNotes = localStorage.getItem(`notes_${lessonId}`)
    if (savedNotes) {
      setContent(savedNotes)
    }
  }, [lessonId])

  const handleChange = (value: string) => {
    setContent(value)
    localStorage.setItem(`notes_${lessonId}`, value)
  }

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  if (!isClient) {
    return <div className="bg-white p-4 rounded-lg shadow">Loading notes...</div>
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Your Notes</h3>
      <div className="quill-wrapper">
        <ReactQuill 
          theme="snow"
          value={content}
          onChange={handleChange}
          modules={modules}
          formats={formats}
        />
      </div>
    </div>
  )
}

export default Notes