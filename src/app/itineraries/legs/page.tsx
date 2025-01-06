'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import apiData from '@/api/api.json';
import Image from 'next/image';
import { getAgencyLogoPath } from '@/app/utilities/logoUtils';
import FlightIcon from '@mui/icons-material/Flight';
import Header from '@/app/components/Header';
import Radio from '@mui/material/Radio';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function LegsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const itineraryId = searchParams.get('id');
  const [selectedLeg, setSelectedLeg] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const itinerary = apiData.itineraries.find(i => i.id === itineraryId);
  const [activeLegIndex, setActiveLegIndex] = useState(0);

  const legs = itinerary
    ? itinerary.legs
        .map(legId => apiData.legs.find(l => l.id === legId))
        .filter(leg => leg !== undefined)
    : [];

  if (!mounted) {
    return null; // o un loading spinner
  }

  if (!itinerary || legs.length === 0) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">No legs found</h1>
        <button 
          onClick={() => router.push('/itineraries')}
          className="px-4 py-2 bg-[#01C2D2] text-white rounded-lg hover:bg-[#00a1b0] transition-colors"
        >
          Back to Itineraries
        </button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <Header title={
        <div className="flex items-center gap-2">
          Flight Details
          <span className="text-[#01C2D2]">{itineraryId}</span>
        </div>
      } />
      
      <div>
        <button 
          onClick={() => router.push('/itineraries')}
          className="mb-4 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
        >
          ← Back to Itineraries
        </button>

        <div className="space-y-4 max-w-xl mx-auto pt-20">
          {legs.map((leg, index) => (
            <div key={leg.id} className="flex items-start gap-2">
              <Radio
                checked={selectedLeg === leg.id}
                onChange={() => setSelectedLeg(leg.id)}
                value={leg.id}
                name="leg-radio-buttons"
                sx={{
                  color: '#01C2D2',
                  '&.Mui-checked': {
                    color: '#01C2D2',
                  },
                }}
              />

              <div className={`flex-1 bg-white rounded-xl shadow-sm overflow-hidden ${
                selectedLeg === leg.id ? 'bg-[#ccffe7]' : 'bg-white'
              }`}>
                <div className="flex justify-between items-center px-4 py-2 bg-[#E0E0E0] rounded-tr-xl">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      <Image 
                        src={getAgencyLogoPath(itinerary.agent)}
                        alt={itinerary.agent}
                        width={16}
                        height={16}
                        className="rounded object-contain"
                        style={{ width: '16px', height: '16px' }}
                      />
                      <span className="text-gray-700 text-xs">{itinerary.agent}</span>
                    </div>
                    
                    <ArrowForwardIosIcon 
                      sx={{ 
                        color: '#01C2D2',
                        fontSize: '1rem'
                      }} 
                    />

                    <div className="flex items-center gap-2">
                      <Image 
                        src={getAgencyLogoPath(leg.airline_name)}
                        alt={leg.airline_name}
                        width={16}
                        height={16}
                        className="rounded object-contain"
                        style={{ width: '16px', height: '16px' }}
                      />
                      <span className="text-gray-700 text-xs">{leg.airline_name}</span>
                    </div>
                  </div>
                  <span className="text-[#01C2D2] text-xs">{leg.id}</span>
                </div>

                <div className="p-4">
                  <div className="mb-4">
                    <div className="text-xs text-gray-600">
                      AIRLINE ID: {leg.airline_id}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-lg font-semibold">{leg.departure_airport}</div>
                      <div className="flex items-center justify-center mt-1">
                        <AirplanemodeActiveIcon 
                          className="text-gray-400 mr-1" 
                          sx={{ 
                            fontSize: 16,
                            transform: 'rotate(90deg)'
                          }} 
                        />
                        <div className="text-xs text-gray-500">
                          {new Date(leg.departure_time).toLocaleString([], {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        STOPS: {leg.stops}
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-lg font-semibold">{leg.arrival_airport}</div>
                      <div className="flex items-center justify-center mt-1">
                        <AirplanemodeActiveIcon 
                          className="text-gray-400 mr-1" 
                          sx={{ 
                            fontSize: 16,
                            transform: 'rotate(90deg)'
                          }} 
                        />
                        <div className="text-xs text-gray-500">
                          {new Date(leg.arrival_time).toLocaleString([], {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        DURATION MINS: {leg.duration_mins}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 