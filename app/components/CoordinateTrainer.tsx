

'use client'

import React, { useState, useEffect } from 'react'
import ChessBoard from '@/app/components/ChessBoard'

const CoordinateTrainer: React.FC = () => {
    const [currentSquare, setCurrentSquare] = useState<string>('')
    const [score, setScore] = useState<number>(0)
    const [feedback, setFeedback] = useState<string>('')

    useEffect(() => {
        generateNewSquare()
    }, [])

    const generateNewSquare = (): void => {
        const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
        const ranks = ['1', '2', '3', '4', '5', '6', '7', '8']
        const file = files[Math.floor(Math.random() * 8)]
        const rank = ranks[Math.floor(Math.random() * 8)]
        setCurrentSquare(file + rank)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            guess: { value: string }
        }
        const guess = target.guess.value.toLowerCase()
        if (guess === currentSquare) {
            setScore(score + 1)
            setFeedback('Correct!')
            generateNewSquare()
        } else {
            setFeedback(`Incorrect. The correct answer is ${currentSquare}.`)
        }
        target.guess.value = ''
    }

    return (
        <>

            <div className="flex flex-col md:flex-row items-center justify-around mt-8">
                <ChessBoard highlightedSquare={currentSquare} />

            </div>
            <div className='mt-14'>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <input
                        type="text"
                        name="guess"
                        placeholder="Enter coordinate (e.g., e4)"
                        required
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default CoordinateTrainer