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

type Feedback = {
  user: string
  feedback: string
  communication: number
  teamwork: number
  leadership: number
  problem: number
  creativity: number
}

export default function FeedbackPage() {
  const [selectedColleague, setSelectedColleague] = useState<Colleague | null>(null);
  const [colleagues, setColleagues] = useState<Colleague[]>([])
  const [mostValuedColleagues, setMostValuedColleagues] = useState<MostValuedColleague[]>([])
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([])
  const [showFeedbacks, setShowFeedbacks] = useState(false)

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
      { id: 1, name: 'Neer', role: 'Project Manager', relationship: 'Team Member', score: 4.8 },
      { id: 2, name: 'Shweta', role: 'Senior Developer', relationship: 'Team Lead', score: 4.7 },
      { id: 3, name: 'Yanshi', role: 'UI/UX Designer', relationship: 'Team Member', score: 4.6 }
    ])

    fetchFeedbacks()
  }, [])

  const fetchFeedbacks = async () => {
    try {
      const response = await fetch('/api/feedback/get')
      const data = await response.json()
      setFeedbackList(data.data || [])
    } catch (error) {
      console.error('Error fetching feedbacks:', error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-6xl text-center font-bold mb-6 text-white">⭐ Provide Feedback ⭐</h1>
      <p className="text-2xl mb-10 text-center text-white">
        Select a colleague from the list below to provide constructive feedback and rate their soft skills!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">       
        <div className="md:col-span-1">
          <ColleagueList colleagues={colleagues} onSelect={setSelectedColleague} />
        </div>
        
        <div className="md:col-span-2">
          <FeedbackForm
            colleague={selectedColleague}
            isFormDisabled={!selectedColleague}
          />
        </div>
      </div>

      
      <div className="mt-12">
        <h2 className="text-2xl font-extrabold text-center mb-4 text-white">Most Valued Colleagues</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mostValuedColleagues.map((colleague) => (
            <li
              key={colleague.id}
              className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src="/anshul.jpg"
                alt={`${colleague.name}'s photo`}
                className="mb-2 w-24 h-24 rounded-full object-cover"
              />
              <div className="text-center">
                <h3 className="text-lg font-bold text-white">{colleague.name}</h3>
                <p className="text-sm text-gray-300">{colleague.role}</p>
                <span className="text-lg font-bold text-green-400">{colleague.score.toFixed(1)}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

     
      <div className="mt-12">
        <button
          onClick={() => setShowFeedbacks(!showFeedbacks)}
          className="block mx-auto px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {showFeedbacks ? 'Hide Feedbacks' : 'View All Feedbacks'}
        </button>
        {showFeedbacks && (
          <div className="mt-8 space-y-6">
            <h2 className="text-3xl text-center font-bold text-white">All Feedbacks</h2>
            {feedbackList.length > 0 ? (
              feedbackList.map((feedback, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-800 text-white rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105"
                >
                  <h3 className="text-lg font-bold mb-2">Feedback for: {feedback.user}</h3>
                  <p className="mb-4">{feedback.feedback}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p><strong>Communication:</strong> {feedback.communication}</p>
                      <p><strong>Teamwork:</strong> {feedback.teamwork}</p>
                    </div>
                    <div>
                      <p><strong>Leadership:</strong> {feedback.leadership}</p>
                      <p><strong>Problem Solving:</strong> {feedback.problem}</p>
                      <p><strong>Creativity:</strong> {feedback.creativity}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-white">No feedback available yet!</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
