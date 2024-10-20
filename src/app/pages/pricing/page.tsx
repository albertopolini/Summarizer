'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';

const plans = [
  {
    name: 'Free',
    price: '€0',
    price_description: '/month',
    button_text: 'Get Started',
    features: ['Access to 21 Smallpdf tools', 'Work on website and mobile app', 'Daily document download limit'],
  },
  {
    name: 'Personal',
    price: '€7.5',
    price_description: '/month',
    button_text: 'Free Trial',
    features: ['All features of the Free plan plus:', 'Pro features, like Strong Compress, convert scanned PDFs to Word, and digital seal protection on signatures', 'Unlimited document downloads', 'Desktop applications', 'File storage', 'No adverts', 'Customer support'],
  },
  {
    name: 'Team',
    price: '€6',
    price_description: '/month',
    button_text: 'Free Trial',
    features: ['All features of the Pro plan plus:', 'Easy and flexible billing management', 'Add more users as needed', 'Volume discount pricing', 'Priority customer support'],
  },
  {
    name: 'Business',
    price: 'Custom',
    price_description: '',
    button_text: 'Contact Us',
    features: ['All features of the Team plan plus:', 'Personalized onboarding program', 'Flexible payment options', 'Custom contract', 'Dedicated customer success manager'],
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Header />
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-white text-center">Choose Your Plan</h1>
          <div className="flex mb-8 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2 transition duration-300">Monthly</button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">Yearly</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className="bg-gray-700 rounded-lg p-6 shadow-md min-h-[350px]">
                <h2 className="text-xl font-semibold text-white mb-4">{plan.name}</h2>
                <div className="flex items-center justify-between mb-4">
                  {plan.price !== null ? (
                    <p className="text-2xl font-bold text-blue-400">{plan.price}/month</p>
                  ) : (
                    <p className="text-lg font-medium text-gray-400">Custom Pricing</p>
                  )}
                  <div>
                    {plan.name === 'Free' && <svg className="w-6 h-6 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>}
                    {plan.name === 'Personal' && <svg className="w-6 h-6 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>}
                    {plan.name === 'Team' && <svg className="w-6 h-6 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>}
                    {plan.name === 'Business' && <svg className="w-6 h-6 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>}
                  </div>
                </div>
                <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                  {plan.button_text}
                </button>
                <ul className="text-gray-400 list-disc list-inside space-y-2 mt-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
