'use client';

import Link from 'next/link';
import AuthButton from './auth-button';
import { useAuth } from '@/lib/auth-context';

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Riley Brown
          </Link>
          
          <div className="flex space-x-4 md:space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base">
              About
            </Link>
            <Link href="/vibecode" className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base">
              VibeCode
            </Link>
            <Link href="/content" className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base hidden sm:block">
              Content & Videos
            </Link>
            <Link href="/vibe-coding" className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base hidden sm:block">
              Vibe Coding
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base">
              Contact
            </Link>
            {user && (
              <Link href="/chat" className="text-blue-600 hover:text-blue-800 transition-colors font-medium text-sm md:text-base">
                Chat with Riley
              </Link>
            )}
          </div>
          
          <AuthButton />
        </div>
      </div>
    </nav>
  );
}