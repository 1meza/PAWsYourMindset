import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

const Card = ({ letter }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Additional text for each card
  const additionalText = {
    A: 'I would openly address the mistake with the team, take responsibility as the leader, and initiate a collaborative discussion to identify the root causes and potential solutions. By turning this setback into a learning opportunity, we can strengthen our teamwork and improve our processes for future projects.',
    B: 'I would assign blame to the team member responsible for the mistake and publicly reprimand them to set an example for the rest of the team. This would ensure accountability and motivate others to be more careful in their work.',
    C: 'Additional text for card cI would downplay the significance of the mistake and continue with the project without addressing it directly. Its important to maintain morale and focus on the projects goals rather than dwelling on setbacks.',
    D: 'I would delegate the task of fixing the mistake to someone else without involving the team. This way, we can avoid unnecessary stress and maintain productivity while ensuring that the project stays on track.'
  };

  return (
    <button
      className="cursor-default relative inline-block text-4xl group p-4 sm:p-8 md:p-12 lg:p-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ pointerEvents: 'auto' }}
    >
      <div className="relative z-10 block px-16 py-8 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-4 border-gray-900 rounded-lg group-hover:text-black">
        <div className="absolute inset-0 w-full h- px-16 py-8 rounded-lg bg-gray-50"></div>
        <div className="absolute left-0 w-128 h-128 -ml-8 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-32 bg-gray-900 group-hover:-rotate-180 ease"></div>
        <div className="relative">
          {/* Conditionally render the additional text when hovered */}
          {!isHovered && letter}
          {isHovered && <div className="text-sm">{additionalText[letter]}</div>}
        </div>
      </div>
    </button>
  );
};

const Questions = () => {

const [questions, setQuestions] = useState([]);

useEffect(() => {
    // Replace the URL with your actual backend URL
    fetch('https://pa-ws-your-mindset-backen.vercel.app/PawsYourMindset/questions')
        .then(response => response.json())
        .then(data => setQuestions(data))
        .catch(error => console.error('Error fetching data:', error));
}, []); // Empty dependency array means this effect runs once on mount

console.log(questions);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-orange-200">
        <div className="flex justify-between w-full px-4 absolute top-0">
        <div class="mx-auto flex items-center justify-center gap-10 px-6 py-5">
          <Link to="/">
            <ul class="bg-white border-gray-900 hover:border-zinc-300 hover:bg-gray-900 group flex-1 -skew-x-[30deg] transform border">
              <li class="m-4 skew-x-[30deg] transform bg-transparent px-9 text-center first-letter:uppercase">
                <b class="block text-lg group-hover:text-white">TEST</b>
              </li>
            </ul>
          </Link>  

          <Link to="/Versus">     
            <ul class="bg-white border-gray-900 hover:border-zinc-300 hover:bg-gray-900 group flex-1 -skew-x-[30deg] transform border">
              <li class="m-4 skew-x-[30deg] transform bg-transparent px-9 text-center first-letter:uppercase">
                <b class="block text-lg group-hover:text-white">Fixed vs Growth</b>
              </li>
            </ul>
          </Link>
 
          <Link to="/Team">
            <ul class="bg-white border-gray-900 hover:border-zinc-300 hover:bg-gray-900 group flex-1 -skew-x-[30deg] transform border">
              <li class="m-4 skew-x-[30deg] transform bg-transparent px-9 text-center first-letter:uppercase">
                <b class="block text-lg group-hover:text-white">Team</b>
              </li>
            </ul>
          </Link>
        </div>
      </div>
      <div className="absolute top-32 w-full flex justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-black bg-white px-6 py-4">
            <div className="text-center text-bold font-bold"> 
            { questions.map((question, index) => {
                    return (
                        <div key={index}>
                            <h1>{question.question}</h1>
                            <h2>{question.answer}</h2>
                        </div>
                    )
                })}            
            </div>
        </div>
    </div>
      <div className="flex justify-center items-end">
        <div className="flex gap-4 mt-60">
            <Card letter="A" />
            <Card letter="B" />
            <Card letter="C" />
            <Card letter="D" />
        </div>
    </div>
    </div>
  );
};

export default Questions;