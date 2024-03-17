import React from 'react';

const Card = ({ title, content }) => {
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
  
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-orange-200">
      <div className='absolute top-12 text-center'> 
        <div className='border border-black bg-white px-6 py-4'>
            <div className='text-center'> 
                Question goes here
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