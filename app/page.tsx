'use client'

import { useState } from 'react'
import Image from 'next/image'
import TeamSection from './components/TeamSection'
import FAQ from './components/FAQ'

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const faqs = [
    {
      question: 'What kind of feedback can I collect with this website?',
      answer: 'This website allows you to gather a wide range of feedback, including customer reviews, employee performance evaluations, product suggestions, and even internal team feedback.',
    },
    {
      question: 'How does the website ensure the authenticity of feedback?',
      answer: 'The website utilizes various methods to promote genuine feedback. This includes integration with social media accounts, email verification, and options for flagging suspicious reviews.',
    },
    {
      question: 'Is there a free plan available?',
      answer: 'Yes, we offer a free plan with basic features to help you try out the app. Paid plans offer additional functionalities like advanced analytics and custom branding.',
    },
    {
      question: 'How can I encourage more people to leave feedback?',
      answer: 'The app provides tools to make feedback easy and convenient. You can send personalized reminders, offer incentives for participation, and showcase positive feedback publicly (with permission).',
    },
    {
      question: 'What happens once I receive feedback?',
      answer: 'The app helps you analyze and categorize your feedback. You can easily identify trends, respond to comments, and track the impact of your actions based on feedback received.',
    },
  ];

  const articles = [
    {
      title: 'The Importance of Constructive Feedback',
      link: 'https://niftypm.com/blog/constructive-feedback/',
      image: '/feedback1.jpg',
    },
    {
      title: 'How to Foster a Feedback-Friendly Culture',
      link: 'https://www.kippy.cloud/post/tips-for-fostering-a-proactive-feedback-culture-in-the-workplace',
      image: '/feedback2.jpeg',
    },
    {
      title: 'Analyzing Peer Feedback: Best Practices',
      link: 'https://www.blog.intedashboard.com/blogs/peer-evaluation/best-practices',
      image: '/feedback3.jpeg',
    },
  ];

  
 


  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-8 text-center">
        <h1 className="text-5xl font-extrabold mb-2 text-white">
          Empowering Customers, Building Better Businesses.
        </h1>
      </section>

      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/background.jpg)" }}
      >
        <div className="bg-overlay p-4">
          <section className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2">Feedback Analysis App</h1>
            <p className="text-2xl font-semibold">
              Unveiling the Voice of Customers: Why Feedback Matters for
              Everyone
            </p>
          </section>

          <section className="articles mb-12">
      <article>
        <div className="article-wrapper">
          <figure>
            <img src="https://picsum.photos/id/1011/800/450" alt="" />
          </figure>
          <div className="article-boody">
            <h2>⭐Current Issues⭐</h2>
            <p>
            Many companies struggle with collecting honest feedback.
            Manual processes are time-consuming, and automated systems are
            susceptible to manipulation.
            </p>
            <a href="#" className="read-more">
              Read more <span className="sr-only">about this is some title</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </article>

      <article>
        <div className="article-wrapper">
          <figure>
            <img src="https://picsum.photos/id/1005/800/450" alt="" />
          </figure>
          <div className="article-boody">
            <h2>⭐Fake Reviews⭐</h2>
            <p>
            Fabricated reviews distort customer perception, hindering
            trust and harming legitimate businesses.
            </p>
            <a href="#" className="read-more">
              Read more <span className="sr-only">about this is some title</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </article>

      <article>
        <div className="article-wrapper">
          <figure>
            <img src="https://picsum.photos/id/103/800/450" alt="" />
          </figure>
          <div className="article-boody">
            <h2>⭐Our Solutions⭐</h2>
            <p>
            We advocate for a multi-pronged approach, including
            verification methods, transparent review guidelines, and
            encouraging thoughtful, detailed feedback.
            </p>
            <a href="#" className="read-more">
              Read more <span className="sr-only">about this is some title</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </article>
          </section>
        </div>
      </div>

      <TeamSection/>

      <section className="faq-section mb-12">
        <h2 className="text-6xl font-bold text-center mb-6 text-white">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQ
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={activeAccordion === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </section>

      
      
      

      <section className="mb-12">
  <h2 className="text-6xl text-center font-extrabold mb-4 text-white">Users Testimonials</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-white dark:bg-gray-800 p-6 mb-4 rounded-lg shadow-md transition duration-300 transform hover:shadow-xl hover:-translate-y-1">
      <p className="text-gray-600 text-2xl  italic mb-4">
        "We finally have a clear picture of customer sentiment! This app's insightful feedback analysis has revolutionized how we understand and meet our audience's needs."
      </p>
      <p className="text-sm font-semibold dark:text-white">Anshul Kumar</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">locahost</p>
    </div>
    <div className="bg-white dark:bg-gray-800 p-6 mb-4 rounded-lg shadow-md transition duration-300 transform hover:shadow-xl hover:-translate-y-1">
      <p className="text-gray-600 text-2xl  italic mb-4">
        "Since using this app, our team's productivity has skyrocketed. The user-friendly interface makes gathering and responding to feedback a breeze."
      </p>
      <p className="text-sm font-semibold dark:text-white">Saurabh Verma</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">CodeChef</p>
    </div>
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition duration-300 transform hover:shadow-xl hover:-translate-y-1">
      <p className="text-gray-600 text-2xl italic mb-4">
        "This app has been a game-changer for our internal communication! The real-time feedback loop fosters collaboration and continuous improvement within our teams."
      </p>
      <p className="text-sm font-semibold dark:text-white">Tanmay Khandelwal</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">Striver</p>
    </div>
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition duration-300 transform hover:shadow-xl hover:-translate-y-1">
      <p className="text-gray-600 text-2xl italic mb-4">
        "Gone are the days of clunky surveys and endless spreadsheets! This app allows us to gather valuable customer insights quickly and efficiently."
      </p>
      <p className="text-sm font-semibold dark:text-white">Akshita Agarwal</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">Research Analyst</p>
    </div>
  </div>
</section>




<section className="mb-16 text-center flex flex-col items-center">
      <div className="flex items-center mb-4">
        <div className="mr-5">
          <Image src="/logo.jpg" alt="Logo 1" width={40} height={40} />
        </div>        
        <h2 className="text-6xl font-bold uppercase text-white">
          Ready to Transform Your Feedback Process?
        </h2>        
        <div className="ml-2">
          <Image src="/logo.jpg" alt="Logo 2" width={40} height={40} />
        </div>
      </div>      
      <button
        className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-5 px-10 rounded-full transition duration-300"
        onClick={() => { window.location.href = '/'; }}
      >
        TRY IT NOW
      </button>
    </section>

    <section className="mb-8">
      <h2 className="text-6xl font-semibold mb-8 text-center text-white">Learn More</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="relative bg-white bg-opacity-70 backdrop-blur-md p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          >
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <h3 className="text-xl text-blue-600 font-bold text-center mb-2">{article.title}</h3>
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-lg" />
            </a>
          </div>
        ))}
      </div>
    </section>
      

    <section className="relative mb-10 bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')"}}>
  <div className="absolute inset-0 bg-black opacity-10"></div>
  <div className="relative max-w-8xl mx-auto p-8 flex flex-col md:flex-row justify-center items-center">    
    <form className="bg-white bg-opacity-70 backdrop-blur-lg p-6 rounded-lg shadow-md w-full md:w-2/3">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
        <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
        <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
        <textarea id="message" rows={4} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">Send Message</button>
    </form>
    <div className="mb-20 md:mb-15  text-black w-full md:w-1/2">
      <h2 className="text-5xl font-extrabold text-right mb-3 ">
        Contact Us !
      </h2>
    </div>
  </div>
</section>

    </main>
  );
}