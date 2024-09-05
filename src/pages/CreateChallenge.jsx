import React, { useState } from 'react';
import { createHackathon } from '../functions/hackathonservice'; // Import CRUD function

const CreateChallenge = () => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [levelType, setLevelType] = useState('Easy');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hackathon = {
      title,
      startDate,
      endDate,
      description,
      imageUrl,
      levelType
    };
    await createHackathon(hackathon);
    alert('Hackathon created!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <h1 className="text-2xl mb-4">Create Hackathon</h1>
      <div className="mb-4">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label>Start Date</label>
        <input
          type="datetime-local"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label>End Date</label>
        <input
          type="datetime-local"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full"
        ></textarea>
      </div>
      <div className="mb-4">
        <label>Image</label>
       
      </div>
      <div className="mb-4">
        <label>Level Type</label>
        <select
          value={levelType}
          onChange={(e) => setLevelType(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Save Changes
      </button>
    </form>
  );
};

export default CreateChallenge;
