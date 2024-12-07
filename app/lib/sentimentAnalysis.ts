
export async function analyzeSentiment(text: string): Promise<number> {
    
    const positiveWords = ['good', 'great', 'excellent', 'amazing', 'fantastic']
    const negativeWords = ['bad', 'poor', 'terrible', 'awful', 'horrible']
  
    const words = text.toLowerCase().split(/\s+/)
    let score = 0
  
    words.forEach(word => {
      if (positiveWords.includes(word)) score++
      if (negativeWords.includes(word)) score--
    })
  
    return score / words.length
  }