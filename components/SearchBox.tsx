'use client';

import React, { FC, useState } from 'react';
import { SearchIcon } from './icons';

interface SearchBoxProps {
  onSearch: (query: string) => void;
  query: string;
  setQuery: any;
}

const SearchBox: FC<SearchBoxProps> = ({ onSearch, query, setQuery }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className='relative'>
      <input
        type='text'
        placeholder='Find a shipment by title or tag ...'
        value={query}
        onChange={handleInputChange}
        className='w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none'
      />
      <div className='absolute right-4 top-1/2 -translate-y-1/2 transform'>
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBox;
