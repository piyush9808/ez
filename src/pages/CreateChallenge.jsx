import React, { useState } from 'react';
import { createHackathonWithImage } from '../functions/hackathonservice'; // Import CRUD function
import Nav from '../components/Nav';

const CreateChallenge = () => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null); // For file input
  const [levelType, setLevelType] = useState('Easy');

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hackathon = {
      title,
      startDate,
      endDate,
      description,
      levelType,
      imageUrl: '' 
    };

    await createHackathonWithImage(hackathon, imageFile);
    alert('Hackathon created!');
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full space-y-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">Challenge Details</h1>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Challenge Name
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
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
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="5"
                className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <div className="space-y-2">
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Image
              </label>
              {imageFile && (
                <div className="mb-4">
                  <img
                    src={URL.createObjectURL(imageFile)}
                    alt="Selected Image"
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <button
                    onClick={() => setImageFile(null)}
                    type="button"
                    className="text-green-600 mt-2 underline"
                  >
                    Change Image
                  </button>
                </div>
              )}
              {!imageFile && (
                <input
                  type="file"
                  id="image"
                  onChange={handleFileChange}
                  className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="levelType" className="block text-sm font-medium text-gray-700">
                Level Type
              </label>
              <select
                id="levelType"
                value={levelType}
                onChange={(e) => setLevelType(e.target.value)}
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
      </div>
    </>
  );
};

export default CreateChallenge;
