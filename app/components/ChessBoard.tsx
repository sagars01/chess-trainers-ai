'use client'

import React from 'react'

interface ChessBoardProps {
  highlightedSquare: string
}

const ChessBoard: React.FC<ChessBoardProps> = ({ highlightedSquare }) => {
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  const ranks = ['8', '7', '6', '5', '4', '3', '2', '1']

  return (
    <div className="grid grid-cols-8 gap-0.5 border border-gray-800">
      {ranks.map((rank) =>
        files.map((file) => {
          const square = `${file}${rank}`
          return (
            <div
              key={square}
              className={`w-12 h-12 flex items-center justify-center relative
                ${(files.indexOf(file) + ranks.indexOf(rank)) % 2 === 0 ? 'bg-amber-100' : 'bg-amber-800'} 
                ${square === highlightedSquare ? 'ring-2 ring-red-500' : ''}`}
            >
              {rank === '1' && <span className="absolute bottom-0.5 right-0.5 text-xs">{file}</span>}
              {file === 'a' && <span className="absolute top-0.5 left-0.5 text-xs">{rank}</span>}
            </div>
          )
        })
      )}
    </div>
  )
}

export default ChessBoard