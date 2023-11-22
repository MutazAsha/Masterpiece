import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
const Faqs = () => {
  const [questionStates, setQuestionStates] = useState({
    question1: 'closed',
    question2: 'closed',
    question3: 'closed',
    question4: 'closed',
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const toggleAnswer = (questionId) => {
    setQuestionStates((prevStates) => ({
      ...prevStates,
      [questionId]: prevStates[questionId] === 'closed' ? 'open' : 'closed',
    }));
  };

  const faqData = [
    {
      question: 'How can I get started?',
      answer:
        "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
    },
    {
      question: 'What is the pricing structure?',
      answer:
        'Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget.',
    },
    {
      question: 'What kind of support do you provide?',
      answer:
        'We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer:
        'Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.',
    },
  ];

  return (
    <div>
      <section data-aos="fade-up" className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 w-10/12"> {/* Adjust max-w-6xl as needed */}
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-[#27374D] sm:text-4xl lg:text-5xl">
              Explore Common Questions
            </h2>
          </div>
          <div className="max-w-full mx-auto mt-8 space-y-4 md:mt-16">
            {faqData.map((faq, index) => (
              <div
                key={`question${index + 1}`}
                className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
              >
                <button
                  type="button"
                  id={`question${index + 1}`}
                  data-state={questionStates[`question${index + 1}`]}
                  onClick={() => toggleAnswer(`question${index + 1}`)}
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                >
                  <span className="flex text-lg font-semibold text-black">{faq.question}</span>
                  <svg
                    id={`arrow${index + 1}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-400"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  id={`answer${index + 1}`}
                  style={{ display: questionStates[`question${index + 1}`] === 'open' ? 'block' : 'none' }}
                  className="px-4 pb-5 sm:px-6 sm:pb-6"
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 textbase mt-9">
            Still have questions?
            <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
            <Link to="/contact" className="text-neutral-600 dark:text-neutral-200">
            Contact our support
              </Link>
        
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
