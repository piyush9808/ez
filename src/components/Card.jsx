import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const HackathonCard = ({ hackathon }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { title, startDate, endDate, imageUrl, levelType, id } = hackathon; // Destructure properties
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const isUpcoming = new Date(startDate) > new Date();
  const hasEnded = new Date(endDate) < new Date();

  // Navigate to the hackathon details page
  const handleNavigate = () => {
    navigate(`/hackathon/${id}`);
  };

  // Calculate countdown
  useEffect(() => {
    if (isUpcoming) {
      const countdown = setInterval(() => {
        const now = new Date();
        const start = new Date(startDate);
        const timeDifference = start - now;

        if (timeDifference > 0) {
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
          const seconds = Math.floor((timeDifference / 1000) % 60);
          setTimeLeft({ days, hours, minutes, seconds });
        } else {
          clearInterval(countdown);
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [startDate, isUpcoming]);

  return (
    <div className="bg-white  rounded-lg shadow-lg overflow-hidden w-full">  
      
      <div>
        <img src={imageUrl} alt={title} className="h-48 w-full object-cover" />
      </div>
      
      <div className="p-6 bg-white flex flex-col w-full justify-center items-center">
        <span
          className={`inline-block px-2 py-1 rounded-md text-xs font-semibold mb-2 ${
            isUpcoming ? 'bg-yellow-200 text-yellow-800' : 'bg-red-200 text-red-800'
          }`}
        >
          {isUpcoming ? 'Upcoming' : hasEnded ? 'Past' : 'Ongoing'}
        </span>

        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        {/* Countdown for Upcoming Events */}
        {isUpcoming && (
          <div className="text-center text-lg font-semibold text-gray-700 mb-4">
            <div className="text-2xl">
              {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes}
            </div>
            <div className="text-sm text-gray-500">
              Days &nbsp;&nbsp; Hours &nbsp;&nbsp; Mins &nbsp;&nbsp;
            </div>
          </div>
        )}

        {/* Show Ended message if the event has ended */}
        {hasEnded && (
          <div className="text-center text-lg font-semibold text-gray-700 mb-4">
            <p>Ended on</p>
            <p className="text-gray-500">{new Date(endDate).toLocaleString()}</p>
          </div>
        )}

        <button
          onClick={handleNavigate}
          className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
        >
          Participate Now
        </button>
      </div>

    </div>
  );
};

export default HackathonCard;
