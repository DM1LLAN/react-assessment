'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Raleway } from 'next/font/google';
// import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';

const raleway = Raleway({ subsets: ['latin', 'latin-ext'], variable: '--font-raleway', weight:['500'] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`flex min-h-screen ${raleway.className}`}>
      <aside className="w-48 bg-white relative">
        <div className="absolute right-0 top-[30px] bottom-[30px] w-[1px] bg-[#426294]"></div>
        
        <div className="p-6">
          <Image 
            src="/auxo.svg" 
            alt="Auxo Logo" 
            width={100} 
            height={40}
            style={{ width: 'auto', height: 'auto' }}
            priority
          />
        </div>
        
        <nav className="px-4 py-2 flex justify-center">
          <Link 
            href="/itineraries" 
            className="flex items-center gap-2 px-6 py-2 bg-[#DDF0F2] text-[#01C2D2] text-xl font-light rounded-[8px] hover:bg-[#d3e9eb] transition-colors shadow-[0_8px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
          >
            {/* <ConnectingAirportsIcon className="w-5 h-5" /> */}
            Itineraries
          </Link>
        </nav>

        <div className="absolute bottom-8 w-full">
          <div className="relative">
            <div className="absolute left-[30px] right-[30px] h-[1px] bg-[#00FF85]"></div>
          </div>
          
          <div className="px-6 mt-[20px] flex justify-center">
            <button 
              type="button"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Log out
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 bg-white">
        {children}
      </main>
    </div>
  );
}
