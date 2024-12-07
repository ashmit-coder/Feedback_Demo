import React from 'react';

interface FAQProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQ: React.FC<FAQProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4 flex items-start">
      <div className="flex-grow">
        <button
          className="flex justify-between items-center w-full text-left"
          onClick={onClick}
        >
          <span className="text-xl font-bold dark:black text-white">{question}</span>
          <span className={`transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''} text-white`}>⬇⬇</span>
        </button>
        <div className={`mt-2 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <p className=" text-xl text-gray-500">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;