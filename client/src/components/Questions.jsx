import React, { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    { id: 1, title: 'Card 1', content: 'Content 1' },
    { id: 2, title: 'Card 2', content: 'Content 2' },
    { id: 3, title: 'Card 3', content: 'Content 3' },
    { id: 4, title: 'Card 4', content: 'Content 4' }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
        <div>
            wassup
        </div>
        <div className="flex justify-center items-center h-screen">
            <div className="relative w-80">
                {data.map((item, index) => (
                <div
                    key={item.id}
                    className={`absolute w-full transform transition-transform duration-300 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0 -translate-x-full'
                    }`}
                >
                    <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p>{item.content}</p>
                    </div>
                </div>
                ))}
                <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md"
                onClick={handlePrev}
                >
                Prev
                </button>
                <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md"
                onClick={handleNext}
                >
                Next
                </button>
            </div>
        </div>
    </div>
  );
};

export default Carousel;
