import React, { useState, useEffect } from 'react';
import SearchFilter from './Search';
import HackathonCard from './Card';
import { db } from '../firebase'; // Import Firestore database
import { collection, getDocs, query, where } from 'firebase/firestore';

const ExploreChallenges = () => {
  const [hackathons, setHackathons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchHackathons = async () => {
      const hackathonsCollection = collection(db, 'hackathons');
      const querySnapshot = await getDocs(hackathonsCollection);
      const hackathonList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setHackathons(hackathonList);
    };
    fetchHackathons();
  }, []);

  const filteredHackathons = hackathons.filter(hackathon => {
    const isMatch = hackathon.title.toLowerCase().includes(searchTerm.toLowerCase());

    if (filter === 'all') return isMatch;
    if (filter === 'upcoming') return isMatch && new Date(hackathon.startDate) > new Date();
    if (filter === 'past') return isMatch && new Date(hackathon.endDate) < new Date();
    if (filter === 'easy') return isMatch && hackathon.levelType === 'Easy';
    if (filter === 'medium') return isMatch && hackathon.levelType === 'Medium';
    if (filter === 'hard') return isMatch && hackathon.levelType === 'Hard';
    return isMatch;
  });

  return (
    <div className="min-h-screen bg-gray-100 px-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Explore Challenges</h1>
        <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} filter={filter} setFilter={setFilter} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHackathons.length > 0 ? (
            filteredHackathons.map(hackathon => <HackathonCard key={hackathon.id} hackathon={hackathon} />)
          ) : (
            <p className="text-center col-span-full">No hackathons found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreChallenges;
