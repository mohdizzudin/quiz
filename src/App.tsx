import './App.scss'
import React from 'react'
import { hot } from 'react-hot-loader'
import { QuestionCard } from './components/question-card/question-card'
import { useQuestionNumber } from './useHook/question-number.state'

function App() {
  const { questionNumber } = useQuestionNumber()

  return (
    <div className='container'>
      <div className='app'>
        <div className="row flex-grow-1 justify-content-center">
          <div className="col-8">
            <QuestionCard>
              <h4>{questionNumber}) As-Sajda</h4>
              <p className='mb-0 d-flex align-self-end'>Meccan Surah</p>
            </QuestionCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default (process.env.NODE_ENV === 'development' ? hot(module)(App) : App)
