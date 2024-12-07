import React from 'react'

type Ratings = {
  communication: number
  teamwork: number
  leadership: number
  problemSolving: number
  creativity: number
}

type Props = {
  ratings: Ratings
  setRatings: React.Dispatch<React.SetStateAction<Ratings>>
}

export default function RatingSection({ ratings, setRatings }: Props) {
  const handleRatingChange = (aspect: keyof Ratings, value: number) => {
    setRatings(prev => ({ ...prev, [aspect]: value }))
  }

  const renderRating = (aspect: keyof Ratings, label: string) => (
    <div>
      <label className="block mb-2 font-medium dark:text-white">{label}</label>
      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => handleRatingChange(aspect, value)}
            className={`w-10 h-10 rounded-full ${
              ratings[aspect] >= value ? 'bg-yellow-400 dark:bg-yellow-600' : 'bg-gray-200 dark:bg-gray-600'
            }text-black dark:text-white transition-colors duration-200`}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <div className="space-y-4">
      <h3 className=" text-3xl font-extrabold dark:text-white">Ratings</h3>
      {renderRating('communication', 'COMMUNICATION')}
      {renderRating('teamwork', 'TEAMWORK')}
      {renderRating('leadership', 'LEADERSHIP')}
      {renderRating('problemSolving', 'PROBLEM SOLVING')}
      {renderRating('creativity', 'CREATIVITY')}
    </div>
  )
}