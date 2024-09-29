
import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Chess Learning Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/lessons/coordinate-trainer" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h2 className="mb-2 text-2xl font-bold">Coordinate Trainer</h2>
          <p>Learn to quickly identify chess board coordinates.</p>
        </Link>
        <Link href="/lessons/alkhine-defense" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h2 className="mb-2 text-2xl font-bold">Alekhine's Defense</h2>
          <p>Study the key ideas behind Alekhine's Defense.</p>
        </Link>
      </div>
    </main>
  )
}