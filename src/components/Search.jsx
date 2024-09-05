import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchFilter = ({ searchTerm, setSearchTerm, filter, setFilter }) => {
  return (
    <div className='w-full  flex justify-center'>

    <div className="flex   w-[70%] justify-around space-x-4 mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="🔍 Search"
        className="border px-4 py-2 rounded-xl w-full cursor-pointer text-black"
      />
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border cursor-pointer px-4 py-2 rounded-xl text-black"
      >

        <label htmlFor="">ALl</label>
        <option value="all">Filter</option>
        <option value="upcoming">Upcoming</option>
        <option value="past">Past</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

    </div>
    </div>
  );
};

export default SearchFilter;
