'use client';

import React, { useState } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import Header from './components/Header';
import FileUpload from './components/FileUpload';
import SummaryList from './components/SummaryList';
import Footer from './components/Footer';

export default function Home() {
  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen bg-gray-900">
        <Header />
        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8"> {/* Expanded main content */}
          <div className="max-w-7xl mx-auto"> {/* Expanded max-width */}
            <h1 className="text-4xl font-bold text-white mb-6">Get detailed summaries in seconds.</h1>
            <p className="text-xl text-gray-300 mb-12">Instantly distill lengthy content into concise summaries with SummarizeAI</p>
            
            <h2 className="text-2xl font-semibold text-blue-400 mb-8">What do you want to summarize today?</h2>
            <FileUpload />
            {isProcessing && (
              <div className="text-center my-8 p-6 bg-gray-800 rounded-lg">
                <p className="text-lg text-blue-400 mb-2">Processing your document...</p>
                <p className="text-sm text-gray-300">This may take a few moments depending on the document size and complexity.</p>
              </div>
            )}
            <SummaryList />
          </div>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}
