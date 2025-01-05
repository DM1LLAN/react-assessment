'use client';
import { useState, useRef, useEffect, useMemo } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import apiData from '@/api/api.json';
import Header from '@/app/components/Header';

export default function Itineraries() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const filterRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="p-8">
      <Header />
      
      <div className="mb-8">
        <div className="flex gap-4 max-w-[400px]">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 bg-[#F4F4F4] rounded-lg border-none focus:ring-2 focus:ring-[#01C2D2] outline-none"
              aria-label="Search"
            />
            <SearchIcon className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div className="relative" ref={filterRef}>
            <button 
              type="button"
              className="p-2 bg-[#F4F4F4] rounded-lg hover:bg-gray-200 transition-colors"
              aria-label="Filter"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <svg 
                className="h-6 w-6 text-[#01C2D2]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" 
                />
              </svg>
            </button>

            {isFilterOpen && (
              <div className="absolute left-full top-0 ml-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-10">
                <button className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-100 transition-colors">
                  <SentimentSatisfiedAltIcon className="text-[#01C2D2]" />
                  <span className="text-[#2E1B4D]">Most Popular</span>
                </button>
                <button className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-100 transition-colors">
                  <CurrencyPoundIcon className="text-[#01C2D2]" />
                  <span className="text-[#2E1B4D]">Price, Low to High</span>
                </button>
                <button className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-100 transition-colors">
                  <StarBorderIcon className="text-[#01C2D2]" />
                  <span className="text-[#2E1B4D]">Rate, High to Low</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="text-gray-600">Select the itinerary from the list below</p>
      
    </div>
  );
} 