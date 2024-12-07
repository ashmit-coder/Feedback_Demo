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
          <span className="text-lg font-semibold dark:black">{question}</span>
          <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} dark:text-blue-800`}>⬇⬇</span>
        </button>
        <div className={`mt-2 transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <p className="text-gray-600 dark:text-gray-300">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;