import React from 'react'

type Props = {
  ratings: {
    communication: number
    teamwork: number
    leadership: number
    problemSolving: number
    creativity: number
  }
  setRatings: React.Dispatch<
    React.SetStateAction<{
      communication: number
      teamwork: number
      leadership: number
      problemSolving: number
      creativity: number
    }>
  >
  disabled: boolean
}

const RatingSection: React.FC<Props> = ({ ratings, setRatings, disabled }) => {
  const handleRatingChange = (category: keyof typeof ratings, value: number) => {
    if (!disabled) {
      setRatings((prevRatings) => ({
        ...prevRatings,
        [category]: value,
      }))
    }
  }

  return (
    <div className="space-y-4">
      {Object.entries(ratings).map(([category, value]) => (
        <div key={category} className="flex items-center justify-between">
          <label className="capitalize text-xl text-white mx-8">{category}</label>
          <div className="flex items-center space-x-3">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                type="button"
                onClick={() => handleRatingChange(category as keyof typeof ratings, rating)}
                disabled={disabled}
                className={`w-20 h-15 flex items-center justify-center rounded-full border-2 text-lg font-semibold ${
                  value >= rating ? 'bg-blue-500 border-blue-600 text-white' : 'bg-gray-700 border-gray-500 text-gray-300'
                } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                {rating} 
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default RatingSection
