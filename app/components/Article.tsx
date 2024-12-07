import React from 'react';

const articles = [
  {
    title: 'The Importance of Constructive Feedback in Society',
    description: 'Constructive feedback plays a critical role in personal and professional growth. It fosters positive change by encouraging improvement and reinforcing good practices.',
    link: 'https://niftypm.com/blog/constructive-feedback/',
    image: '/feedback1.jpg'
  },
  {
    title: 'How to Foster a Feedback-Friendly Culture',
    description: 'Building a feedback-friendly culture is essential for continuous improvement. Learn strategies to encourage open communication, transparency, and actionable insights within teams.',
    link: 'https://www.kippy.cloud/post/tips-for-fostering-a-proactive-feedback-culture-in-the-workplace',
    image: '/feedback2.jpeg'
  },
  {
    title: 'Analyzing Peer Feedback: Best Practices',
    description: 'Analyzing peer feedback effectively helps identify strengths and areas for growth. This article provides best practices to ensure feedback is used constructively and leads to meaningful improvements.',
    link: 'https://www.blog.intedashboard.com/blogs/peer-evaluation/best-practices',
    image: '/feedback3.jpeg'
  }
];

const Articles: React.FC = () => {
  return (
    <div className="mb-10 grid grid-cols-1 text-center md:grid-cols-3 gap-8 max-w-[114rem] mx-auto px-6 py-12 bg-gray-100">
      {articles.map((article, index) => (
        <div 
          key={index} 
          className="bg-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        >
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-[18rem] object-cover"
          />
          <div className="grid grid-rows-[auto_1fr_auto] gap-4 p-5">
            <h1 className="text-3xl font-medium text-gray-900">{article.title}</h1>
            <div className="text-base text-gray-600 tracking-wide leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: article.description }} />
            </div>
            <a 
              href={article.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 text-xl text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-300 transition-colors duration-300 text-center inline-block"
            >
              Explore <span className="ml-2">&rarr;</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;