import React from 'react'

type Colleague = {
  id: number
  name: string
  role: string
  relationship: string
}

type Props = {
  colleagues: Colleague[]
  onSelect: (colleague: Colleague) => void
}

export default function ColleagueList({ colleagues, onSelect }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value, 10)
    const selectedColleague = colleagues.find(c => c.id === selectedId)
    if (selectedColleague) {
      onSelect(selectedColleague)
    }
  }

  return (
    <div className="mb-6">
      <h2 className="text-4xl font-semibold mb-3 text-white">Select a Colleague</h2>
      <select
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
        onChange={handleChange}
        defaultValue=""
      >
        <option value="" disabled>Select a colleague</option>
        {colleagues.map((colleague) => (
          <option key={colleague.id} value={colleague.id}>
            {colleague.name} - {colleague.role}
          </option>
        ))}
      </select>
    </div>
  )
}