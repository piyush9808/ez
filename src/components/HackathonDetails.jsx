import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Firestore instance
import Nav from './Nav'
import AccessTimeIcon from '@mui/icons-material/AccessTime';// Import Material-UI icons for each difficulty level
import CheckCircleIcon from '@mui/icons-material/CheckCircle';  // For Easy
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'; // For Medium
import WarningIcon from '@mui/icons-material/Warning'; // For Hard

import Button from '@mui/material/Button'; // Material-UI button
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const HackathonDetails = () => {
  const { id } = useParams(); // Get hackathon id from URL
  const navigate = useNavigate();
  const [hackathon, setHackathon] = useState(null);

  useEffect(() => {
    const fetchHackathon = async () => {
      const docRef = doc(db, 'hackathons', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setHackathon({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.error('No such document!');
      }
    };

    fetchHackathon();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this hackathon?');
    if (confirmDelete) {
      await deleteDoc(doc(db, 'hackathons', id));
      navigate('/');
    }
  };

  // Function to get the icon based on levelType
  const getLevelIcon = (levelType) => {
    switch (levelType.toLowerCase()) {
      case 'easy':
        return <CheckCircleIcon className="text-green-500" />;
      case 'medium':
        return <ErrorOutlineIcon className="text-yellow-500" />;
      case 'hard':
        return <WarningIcon className="text-red-500" />;
      default:
        return null;
    }
  };

  if (!hackathon) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gray-100">
        {/* Header section */}
        <div className="bg-[#003145] py-32  text-white">

          <div className="container mx-auto  w-2/3  items-start ml-20">

            <div className="flex flex-col  space-y-8">
              {/* Status Badge */}
              <span className="bg-[#FFCE5C] text-yellow-900 px-4 py-2 w-fit space-x-2 rounded-md text-md font-semibold">
              <AccessTimeIcon />              
               {new Date(hackathon.startDate) > new Date()
                  ? `Starts on ${new Date(hackathon.startDate).toLocaleString()}`
                  : `Ended on ${new Date(hackathon.endDate).toLocaleString()}`}
              </span>

              {/* Title */}
              <h1 className="text-5xl font-bold">{hackathon.title}</h1>
              {/* <p className="text-lg mt-2">{hackathon.description}</p> */}

              {/* Difficulty Badge with Icon */}

              <div className="flex items-center space-x-2 w-fit bg-gray-200 text-[#003145] px-3 py-1 rounded-md text-xs">
                {/* Render the appropriate icon based on the levelType */}
                {getLevelIcon(hackathon.levelType)}
                <span>{hackathon.levelType}</span>
              </div>

            </div>

          </div>

        </div>


        {/* Action Buttons */}
        <div className="container px-14 flex  items-end justify-between">

          <div className="border-b-4 px-4 top-8 relative  border-green-500 inline-block ">
            <h2 className="text-2xl font-bold">Overview</h2>
          </div >

          <div className='relative top-4 w-full space-x-6 flex justify-end rounded-xl '>
            <Button
              variant="contained"
              color="success"
             
              onClick={() => navigate(`/hackathon/${id}/edit`)}
              className="px-10 rounded-lg"
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="error"
              
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        </div>


        {/* Main content section */}
        <div className="container mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">

          <p className="text-gray-700 leading-relaxed text-lg">
            {hackathon.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default HackathonDetails;
