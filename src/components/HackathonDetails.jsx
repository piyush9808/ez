import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Firestore instance

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

  if (!hackathon) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{hackathon.title}</h1>
        <p className="text-lg text-gray-600 mb-4">{hackathon.description}</p>

        <div className="mb-4">
          <span
            className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
              new Date(hackathon.startDate) > new Date()
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {new Date(hackathon.startDate) > new Date()
              ? `Starts on ${new Date(hackathon.startDate).toLocaleString()}`
              : `Ended on ${new Date(hackathon.endDate).toLocaleString()}`}
          </span>
        </div>

        <p className="text-gray-500 mb-6">Level: {hackathon.levelType}</p>

        <div className="flex space-x-4">
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            onClick={() => navigate(`/hackathon/${id}/edit`)}
          >
            Edit
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed">{hackathon.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HackathonDetails;
