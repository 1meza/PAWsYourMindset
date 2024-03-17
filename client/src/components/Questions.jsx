import React from 'react';



const Card = ({ title, content }) => {
  return (
    <div className="max-w-sm m-4 rounded overflow-hidden border border-black border-solid bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mt-2">{content}</p>
      </div>
    </div>
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
                <h1 className='text-4xl font-bold'>Questions</h1>
                {questions.map((question, index) => (
                    <div key={index}>
                        <h2>{question.question}</h2>
                    </div>
                ))}
            </div>
        </div>
      </div>
      <div className="flex flex-row">
        <Card title="Card 1" content="Content for card 1." />
        <Card title="Card 2" content="Content for card 2." />
        <Card title="Card 3" content="Content for card 3." />
        <Card title="Card 4" content="Content for card 4." />
      </div>
    </div>
  );
};

export default Questions;