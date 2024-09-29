"use client"
import React from 'react'
import Notes from './Notes'

interface LessonLayoutProps {
  children: React.ReactNode
  theory: React.ReactNode
  lessonId: string
  title: string
}

const LessonLayout: React.FC<LessonLayoutProps> = ({ children, theory, lessonId, title }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="lg:w-1/4 bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Theory</h2>
        {theory}
      </div>
      <div className="lg:w-1/2">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        {children}
      </div>
      <div className="lg:w-1/4">
        <Notes lessonId={lessonId} />
      </div>
    </div>
  )
}

export default LessonLayout