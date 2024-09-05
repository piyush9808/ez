import React from 'react';

const SearchFilter = ({ searchTerm, setSearchTerm, filter, setFilter }) => {
  return (
    <div className="flex items-center justify-between space-x-4 mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        className="border px-4 py-2 rounded-md w-full"
      />
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border px-4 py-2 rounded-md"
      >
        <option value="all">All</option>
        <option value="upcoming">Upcoming</option>
        <option value="past">Past</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};

export default SearchFilter;
