'use client';

import { useAuth } from '@/lib/auth-context';

export default function AuthButton() {
  const { user, loading, signInWithGoogle, logout } = useAuth();
  
  console.log('AuthButton render:', { user: !!user, loading });

  if (loading) {
    return (
      <div className="animate-pulse bg-gray-200 h-10 w-32 rounded-lg"></div>
    );
  }

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <img
          src={user.photoURL || ''}
          alt={user.displayName || ''}
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm text-gray-700">{user.displayName}</span>
        <button
          onClick={logout}
          className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={signInWithGoogle}
      className="px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm md:text-base"
    >
      <span className="hidden sm:inline">Sign in with Google</span>
      <span className="sm:hidden">Sign In</span>
    </button>
  );
}