import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const HackathonCard = ({ hackathon }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { title, startDate, endDate, imageUrl, levelType, id } = hackathon; // Destructure properties

  const isUpcoming = new Date(startDate) > new Date();
  const status = isUpcoming ? 'Upcoming' : 'Past';

  // Navigate to the hackathon details page
  const handleNavigate = () => {
    navigate(`/hackathon/${id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
        <div>
      <img src={imageUrl}  alt={title} className="h-48 w-full  object-cover" />
      
      </div>
      <div className="p-4">
        <span
          className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
            isUpcoming ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {status}
        </span>
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">
          {isUpcoming ? `Starts in ${new Date(startDate).toLocaleDateString()}` : `Ended on ${new Date(endDate).toLocaleDateString()}`}
        </p>
        <p className="text-sm mt-2">Level: {levelType}</p>
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
