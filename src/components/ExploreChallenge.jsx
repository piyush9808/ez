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
    <>
    
      <div className="">

        <div className="container mx-auto">
          <div className='bg-[#002A3B] text-white px-8 py-24'>
            <h1 className="text-4xl font-bold text-center mb-8">Explore Challenges</h1>

            <SearchFilter  searchTerm={searchTerm} setSearchTerm={setSearchTerm} filter={filter} setFilter={setFilter} />

          </div>

          <div className='bg-[#003145] py-10 px-24 gap-7 space-x-10'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredHackathons.length > 0 ? (
                filteredHackathons.map(hackathon => <HackathonCard key={hackathon.id} hackathon={hackathon} />)
              ) : (
                <p className="text-center col-span-full">No hackathons found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreChallenges;
