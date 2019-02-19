import { Dispatch, SetStateAction, useState } from 'react'

function useQuestionNumber(
  setInitialQuestionNumber: number = 1
): UseQuestionNumber {
  const [questionNumber, setQuestionNumber] = useState(setInitialQuestionNumber)

  return {
    questionNumber,
    setQuestionNumber,
  }
}

interface UseQuestionNumber {
  questionNumber: number
  setQuestionNumber: Dispatch<SetStateAction<number>>
}

export { useQuestionNumber }
