'use client';

import React, { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/Header';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push('/'); // Redirect to home page after successful login
    } catch (error) {
      console.error('Login error:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
      <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">Login to Summarify</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-400">Don't have an account?</p>
          <Link href="/signup" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
            Sign up here
          </Link>
        </div>
        <div className="mt-4 text-center">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
