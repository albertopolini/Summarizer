import React from 'react';

const SummaryList: React.FC = () => {
  // This is a placeholder. In a real application, you would fetch and display actual summaries.
  const summaries = [
    { id: 1, title: 'Document 1', date: '2023-05-15' },
    { id: 2, title: 'Document 2', date: '2023-05-16' },
    { id: 3, title: 'Document 3', date: '2023-05-17' },
  ];

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8">
      <h2 className="text-2xl font-semibold text-white mb-4">Your Summaries</h2>
      <ul className="space-y-4">
        {summaries.map((summary) => (
          <li key={summary.id} className="bg-gray-700 bg-opacity-50 rounded-lg p-4 hover:bg-opacity-75 transition-colors duration-300">
            <h3 className="text-lg font-medium text-white">{summary.title}</h3>
            <p className="text-sm text-gray-400">Summarized on {summary.date}</p>
            <button className="mt-2 text-blue-400 hover:text-blue-300 transition-colors duration-300">View Summary</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SummaryList;
