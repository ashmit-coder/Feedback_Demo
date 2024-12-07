import React from 'react'

type ValuedColleague = {
  id: number
  name: string
  role: string
  score: number
}

type Props = {
  colleagues: ValuedColleague[]
}

export default function MostValuedColleagues({ colleagues }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow w-full md:w">
      <h2 className="text-xl font-extrabold text-center mb-4 dark:text-white">Most Valued Colleagues</h2>
      <ul className="space-y-3">
        {colleagues.map((colleague) => (
          <li key={colleague.id} className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <img
              src="/person1.svg"
              alt={`${colleague.name}'s photo`}
              className="mb-2 w-24 h-24 rounded-full object-cover"
            />
            <div className="text-center">
              <h3 className="font-semibold dark:text-white">{colleague.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{colleague.role}</p>
              <span className="text-lg font-bold text-green-500 dark:text-green-400">{colleague.score.toFixed(1)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}