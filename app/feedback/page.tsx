'use client'

import { useState, useEffect } from 'react'
import FeedbackForm from '../components/FeedbackForm'
import ColleagueList from '../components/ColleagueList'

type Colleague = {
  id: number
  name: string
  role: string
  relationship: string
}

type MostValuedColleague = {
  id: number
  name: string
  role: string
  score: number
  relationship: string
}

export default function FeedbackPage() {
  const [selectedColleague, setSelectedColleague] = useState<Colleague | null>(null)
  const [colleagues, setColleagues] = useState<Colleague[]>([])
  const [mostValuedColleagues, setMostValuedColleagues] = useState<MostValuedColleague[]>([])

  useEffect(() => {
    setColleagues([
      { id: 1, name: 'Anshul', role: 'Developer', relationship: 'Team Member' },
      { id: 2, name: 'Shubham', role: 'Designer', relationship: 'Team Lead' },
      { id: 3, name: 'Ashmit', role: 'Project Manager', relationship: 'Team Lead' },
      { id: 4, name: 'Manas', role: 'Senior Developer', relationship: 'Team Member' },
      { id: 5, name: 'Tanmay', role: 'QA Engineer', relationship: 'Team Member' },
      { id: 6, name: 'Saurabh', role: 'Business Analyst', relationship: 'Team Member' },
      { id: 7, name: 'Harshil', role: 'Product Owner', relationship: 'Team Lead' },
      { id: 8, name: 'Neer', role: 'Scrum Master', relationship: 'Team Member' },
      { id: 9, name: 'Bhaumik', role: 'Software Engineer', relationship: 'Team Member' },
      { id: 10, name: 'Yash', role: 'DevOps Engineer', relationship: 'Team Member' },
      { id: 11, name: 'Akshita', role: 'System Analyst', relationship: 'Team Member' },
      { id: 12, name: 'Shweta', role: 'Technical Lead', relationship: 'Team Lead' },
      { id: 13, name: 'Yanshi', role: 'UI/UX Designer', relationship: 'Team Member' },
      { id: 14, name: 'Sach', role: 'Database Admin', relationship: 'Team Member' },
      { id: 15, name: 'Sima', role: 'Support Engineer', relationship: 'Team Member' }
    ])

    setMostValuedColleagues([
      { id: 1, name: 'Neer', role: 'Project Manager',relationship: 'Team Member', score: 4.8 },
      { id: 2, name: 'Shweta', role: 'Senior Developer',relationship: 'Team Lead', score: 4.7 },
      { id: 3, name: 'Yanshi', role: 'UI/UX Designer',relationship: 'Team Member', score: 4.6 }
    ])
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl text-center font-bold mb-6">⭐Provide Feedback⭐</h1>
      <p className=" text-xl mb-10">Here are some ways to provide constructive feedback to your colleagues. Select your colleagues from the dropdown below and dont forget to score them on the basis of their softskills!!</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <ColleagueList 
            colleagues={colleagues} 
            onSelect={setSelectedColleague} 
          />
          {selectedColleague && (
            <FeedbackForm 
              colleague={selectedColleague}
            />
          )}
        </div>
        <div className="md:col-span-1">
          <h2 className="text-2xl font-extrabold text-center mb-4 dark:text-white">Most Valued Colleagues</h2>
          <ul className="space-y-3">
            {mostValuedColleagues.map((colleague) => (
              <li key={colleague.id} className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow transition-transform duration-300 hover:shadow-lg hover:scale-105">
                <img
                  src="/person1.svg"
                  alt={`${colleague.name}'s photo`}
                  className="mb-2 w-24 h-24 rounded-full object-cover"
                />
                <div className="text-center">
                  <h3 className=" text-lg font-extrabold dark:text-white">{colleague.name}</h3>
                  <p className="text-lg text-gray-600 font-semibold dark:text-gray-300">{colleague.role}</p>
                  <p className="text-sm text-gray-600 font-semibold dark:text-gray-300">Relationship: {colleague.relationship}</p>
                  <span className="text-lg font-bold text-green-500 dark:text-green-400">{colleague.score.toFixed(1)}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}