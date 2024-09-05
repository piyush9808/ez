import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Firestore instance
import Nav from './Nav';

const EditHackathon = () => {
  const { id } = useParams(); // Get hackathon id from URL
  const navigate = useNavigate();
  const [hackathon, setHackathon] = useState({
    title: '',
    startDate: '',
    endDate: '',
    description: '',
    imageUrl: '',
    levelType: 'Easy',
  });

  useEffect(() => {
    const fetchHackathon = async () => {
      const docRef = doc(db, 'hackathons', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setHackathon({ ...docSnap.data() });
      } else {
        console.error('No such document!');
      }
    };

    fetchHackathon();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHackathon((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDoc(doc(db, 'hackathons', id), hackathon);
    alert('Hackathon updated successfully!');
    navigate(`/hackathon/${id}`);
  };

  return (
    <>
      <Nav />
      <div className="text-3xl w-full h-20 content-center  font-bold text-gray-900 bg-[#F8F9FD]">
        <p className='ml-14'>
          Challenge Details</p>
      </div>
      <div className="min-h-screen  flex  py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full space-y-8">
         
          <form onSubmit={handleSubmit} className=" p-8 space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Challenge Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={hackathon.title}
                onChange={handleInputChange}
                className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="datetime-local"
                id="startDate"
                name="startDate"
                value={hackathon.startDate}
                onChange={handleInputChange}
                className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="datetime-local"
                id="endDate"
                name="endDate"
                value={hackathon.endDate}
                onChange={handleInputChange}
                className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={hackathon.description}
                onChange={handleInputChange}
                rows="5"
                className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <div className="space-y-2">
              <label htmlFor="levelType" className="block text-sm font-medium text-gray-700">
                Level Type
              </label>
              <select
                id="levelType"
                name="levelType"
                value={hackathon.levelType}
                onChange={handleInputChange}
                className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            

            <button
              type="submit"
              className="w-full bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div></>
  );
};

export default EditHackathon;
