"use client";

import { useState, useEffect } from 'react';
import { MBTIQuestion, getRandomMBTIQuestions, calculateMBTIType } from '../services/mbtiQuestions';

export default function MBTITest() {
  const [questions, setQuestions] = useState<MBTIQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string>("");
  const [careers, setCareers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const initialQuestions = getRandomMBTIQuestions(8);
    setQuestions(initialQuestions);
  }, []);

  const handleAnswer = async (type: string) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const mbtiResult = calculateMBTIType(newAnswers);
      setResult(mbtiResult);
      setIsLoading(true);
      setError("");

      try {
        const response = await fetch('/api/career-suggestions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ mbtiType: mbtiResult }),
        });
        
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || 'Failed to get career suggestions');
        }

        if (data.careers && Array.isArray(data.careers)) {
          setCareers(data.careers);
        } else {
          throw new Error('Invalid response format');
        }

      } catch (error) {
        console.error('Error:', error);
        setError(error instanceof Error ? error.message : 'Failed to get suggestions');
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (questions.length === 0) {
    return <div className="text-center">Loading questions...</div>;
  }

  if (result) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
        <h2 className="text-2xl font-bold mb-4">Your MBTI Type: {result}</h2>
        
        {isLoading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-2">Getting your career suggestions...</p>
          </div>
        ) : error ? (
          <div className="text-red-500 mb-4">{error}</div>
        ) : careers.length > 0 ? (
          <>
            <h3 className="text-xl font-semibold mb-2">Recommended Careers:</h3>
            <ul className="list-disc pl-5">
              {careers.map((career, index) => (
                <li key={index} className="mb-2">{career}</li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-gray-600">No career suggestions available at the moment.</p>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
      <h2 className="text-2xl font-bold mb-4">Question {currentQuestion + 1} of {questions.length}</h2>
      <p className="mb-4">{questions[currentQuestion].question}</p>
      <div className="space-y-2">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.type)}
            className="w-full p-3 text-left border rounded hover:bg-gray-100 transition-colors"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}