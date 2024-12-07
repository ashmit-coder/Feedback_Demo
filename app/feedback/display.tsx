'use client'

import { useState, useEffect } from 'react'

type Feedback = {
  user: string
  feedback: string
  communication: number
  teamwork: number
  leadership: number
  problem: number
  creativity: number
}

export default function FeedbackDisplay() {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([])

  useEffect(() => {
    fetchFeedbacks()
  }, [])

  const fetchFeedbacks = async () => {
    try {
      const response = await fetch('/api/feedback/get')
      const data = await response.json()
      setFeedbackList(data.data || [])
    } catch (error) {
      console.error('Error fetching feedback data:', error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-center font-bold mb-6 text-white">All Feedbacks</h1>

      {feedbackList.length > 0 ? (
        <div className="space-y-10">
          {feedbackList.map((feedback, index) => (
            <div
              key={index}
              className="p-4 bg-gray-800 text-white rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105"
            >
              <h2 className="text-lg font-bold mb-2">Feedback for: {feedback.user}</h2>
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
          ))}
        </div>
      ) : (
        <p className="text-white text-center">No feedback available yet!</p>
      )}
      
    </div>
  )
}
