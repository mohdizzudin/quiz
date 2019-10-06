import './App.scss'
import React from 'react'
import { hot } from 'react-hot-loader'
import { QuestionAnswer } from './components/question-answer/question-answer'
import { QuestionCard } from './components/question-card/question-card'
import { useQuestionNumber } from './useHook/question-number.state'

function App() {
  const { questionNumber } = useQuestionNumber()

  return (
    <div className='container'>
      <div className='title'>
        <h1>What is this surah`s chapter?</h1>
      </div>
      <div className='app'>
        <div className="row flex-grow-1 justify-content-center">
          <div className="col-8">
            <QuestionCard>
              <h5>{questionNumber}. As-Sajda</h5>
              <small className='mb-0 d-flex align-self-end'>Meccan Surah</small>
            </QuestionCard>
            <QuestionAnswer/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default (process.env.NODE_ENV === 'development' ? hot(module)(App) : App)
