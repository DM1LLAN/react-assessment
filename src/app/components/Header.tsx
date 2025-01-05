'use client';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { ReactNode } from 'react';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-poppins',
});

interface HeaderProps {
  title?: ReactNode;
}

export default function Header({ title = 'Welcome' }: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className={`text-2xl font-medium ${poppins.className}`}>{title}</h1>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <Image 
            src="/PepeLadino.webp"
            alt="Profile" 
            width={32} 
            height={32}
            style={{ width: '32px', height: '32px' }}
            className="rounded-full"
            priority
          />
          <span className="text-sm">Pepe Ladino</span>
        </div>
        <button 
          type="button"
          className="p-2 bg-[#6C9DE81F] rounded-lg hover:bg-[#6C9DE830] transition-colors"
        >
          <QuestionMarkIcon sx={{ color: '#01C2D2' }} />
        </button>
      </div>
    </div>
  );
} 