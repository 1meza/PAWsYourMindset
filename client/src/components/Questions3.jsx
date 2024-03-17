import React, { useState } from 'react';
import { Link } from 'react-router-dom'


const Card = ({ letter }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Additional text for each card
  const additionalText = {
    A: 'I create a culture of fear by penalizing team members for mistakes, instilling a sense of dread that discourages them from admitting when theyve erred.',
    B: 'I ignore mistakes altogether, preferring to focus on celebrating successes rather than dwelling on failures.',
    C: 'I lead by example, openly acknowledging my own mistakes and emphasizing the importance of learning from them. I provide constructive feedback in a supportive manner, highlighting areas for improvement rather than assigning blame. This fosters an environment where team members feel comfortable acknowledging their mistakes and actively seeking opportunities for growth.',
    D: 'I publicly shame team members who make mistakes, using their errors as cautionary tales to deter others from following suit.'
  };

  return (
    <Link to="/Questions4" className="btn btn-primary">
        <button
        className="cursor-pointer relative inline-block text-4xl group p-4 sm:p-8 md:p-12 lg:p-16"
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
    </Link>
  );
};

const Questions3 = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center  bg-blue-900">
        <div className="flex justify-between w-full px-4 absolute top-0">
        <div class="mx-auto flex items-center justify-center gap-10 px-6 py-5">
          <Link to="/">
            <ul class="bg-white border-gray-900 hover:border-zinc-300 hover:bg-gray-900 group flex-1 -skew-x-[30deg] transform border">
              <li class="m-4 skew-x-[30deg] transform bg-transparent px-9 text-center first-letter:uppercase">
                <b class="block text-lg group-hover:text-white">Home</b>
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
            In a professional setting, how do you encourage a culture where team members feel comfortable acknowledging their mistakes and actively seek opportunities for improvement?
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

export default Questions3;