'use client'

import React, { useState, useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

interface NotesProps {
  lessonId: string
}

const Notes: React.FC<NotesProps> = ({ lessonId }) => {
  const [isMounted, setIsMounted] = useState(false)
  const [debugInfo, setDebugInfo] = useState('')

  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Start typing your notes here...</p>',
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      localStorage.setItem(`notes_${lessonId}`, html)
    },
  })

  useEffect(() => {
    setIsMounted(true)
    setDebugInfo('Component mounted')
    
    const savedNotes = localStorage.getItem(`notes_${lessonId}`)
    if (savedNotes && editor) {
      editor.commands.setContent(savedNotes)
      setDebugInfo(debugInfo + '\nLoaded saved notes')
    }
  }, [lessonId, editor])

  if (!isMounted) {
    return <div>Loading notes...</div>
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Your Notes</h3>
      {editor ? (
        <EditorContent editor={editor} className="prose max-w-none border p-2 min-h-[200px]" />
      ) : (
        <div>Editor is initializing...</div>
      )}
      <div className="mt-2 text-sm text-gray-500">Debug: {debugInfo}</div>
    </div>
  )
}

export default Notes