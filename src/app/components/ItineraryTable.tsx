'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Itinerary } from '@/app/utilities/types';
import { Poppins } from 'next/font/google';
import { getAgencyLogoPath } from '@/app/utilities/logoUtils';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-poppins',
});

interface ItineraryTableProps {
  itineraries: Itinerary[];
}

export default function ItineraryTable({ itineraries }: ItineraryTableProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const router = useRouter();

  const handleItineraryClick = (itinerary: Itinerary) => {
    setSelectedId(itinerary.id);
    router.push(`/itineraries/legs?id=${itinerary.id}`);
  };

  return (
    <div className={`mt-4 ${poppins.className}`}>
      <div className="grid grid-cols-4 py-2 text-sm text-gray-600 text-center">
        <div>Id Itinerarie</div>
        <div>Price</div>
        <div>Agent</div>
        <div>Agent rating</div>
      </div>

      <div className="space-y-3">
        {itineraries.map((itinerary) => (
          <div 
            key={itinerary.id}
            onClick={() => handleItineraryClick(itinerary)}
            className={`grid grid-cols-4 py-4 items-center bg-white rounded-xl border border-[#00000040] cursor-pointer text-center
              hover:bg-[#ccffe7] transition-colors duration-200
              ${itinerary.id === selectedId ? 'bg-[#d0fce4]' : ''}`}
          >
            <div>{itinerary.id}</div>
            <div>{itinerary.price}</div>
            <div className="flex items-center justify-center gap-2">
              <Image 
                src={getAgencyLogoPath(itinerary.agent)}
                alt={itinerary.agent}
                width={24}
                height={24}
                className="rounded object-contain"
                style={{ width: '24px', height: '24px' }}
              />
              {itinerary.agent}
            </div>
            <div>{itinerary.agent_rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 