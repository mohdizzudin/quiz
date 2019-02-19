import React from 'react'
import './question-card.scss'

export function QuestionCard({ children }: any) {
  return (
    <div className='question-card bg-white p-4 rounded'>
      {children}
    </div>
  )
}
