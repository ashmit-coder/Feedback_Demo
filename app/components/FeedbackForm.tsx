'use client'

import React, { useEffect, useState } from 'react'
import RatingSection from './RatingSection'
import { analyzeSentiment } from '../lib/sentimentAnalysis'
import axios from 'axios'

type Colleague = {
  id: number
  name: string
  role: string
  relationship: string
}

type Props = {
  colleague: Colleague | null;
  isFormDisabled: boolean;
}

export default function FeedbackForm({ colleague }: Props) {
  const [feedbackList, setFeedbackList] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  
  const [ratings, setRatings] = useState({
    communication: 0,
    teamwork: 0,
    leadership: 0,
    problemSolving: 0,
    creativity: 0
  });

  
  useEffect(() => {
    setRatings({
      communication: 0,
      teamwork: 0,
      leadership: 0,
      problemSolving: 0,
      creativity: 0
    });
  }, [colleague]); 

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // if (!colleague) {
  //   alert("Please select a colleague.");
  //   return;
  // }
  
  const fetchFeedbacks = async () => {
    try {
      const response = await fetch("/api/feedback/get");
      const data = await response.json();
      setFeedbackList(data);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const sentiment = await analyzeSentiment(feedback);
    if (sentiment < 0) {
      alert('Write feedback');
    }
    let data : any = { user: (colleague || {name:"NULL"}).name , feedback: feedback, communication: ratings.communication,
      teamwork: ratings.teamwork, leadership: ratings.leadership, problem: ratings.problemSolving, creativity: ratings.creativity }
  
    axios.post("/api/feedback", data).then((response: any) => {
      console.log("Feedback saved successfully", response);
      window.location.reload();
    });
  };

  const handleSaveDraft = () => {
    console.log('Draft saved', { colleague, feedback, isAnonymous, ratings });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <h2 className="text-xl font-semibold text-white">Feedback for {colleague?.name}</h2>
      
      <div>
        <label htmlFor="feedback" className="block text-m mb-2 text-white">Your Feedback</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full p-4 border text-black rounded-lg"
          rows={5}
          required
        />
      </div>

      <RatingSection ratings={ratings} setRatings={setRatings} disabled={false} />

      <div>
        <label className="flex items-center text-white">
          <input
            type="checkbox"
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
            className="mr-2"
          />
          Submit Anonymously
        </label>
      </div>

      <div className="flex space-x-5">
        <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 rounded-lg">
          Submit Feedback
        </button>
        <button type="button" onClick={handleSaveDraft} className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-900 rounded-lg">
          Save as Draft
        </button>
      </div>
    </form>
  )
}
