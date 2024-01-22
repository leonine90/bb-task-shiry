'use client';

import React, { FC } from 'react';
import { SearchIcon } from './icons';

interface SearchBoxProps {
  onSearch: (query: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  isSearchToggled?: boolean;
}

const SearchBox: FC<SearchBoxProps> = ({
  onSearch,
  onFocus,
  onBlur,
  query,
  setQuery,
  placeholder = '',
  isSearchToggled = true,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className='relative'>
      <input
        placeholder={placeholder}
        type='text'
        value={query}
        onChange={handleInputChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`${isSearchToggled ? 'w-full' : 'z-10 w-14 bg-transparent'} relative rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none`}
      />
      <div className='absolute right-4 top-1/2 -translate-y-1/2 transform'>
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBox;
