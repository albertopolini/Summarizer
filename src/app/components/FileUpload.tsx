import React, { useState } from 'react';

const FileUpload: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsLoading(true);
      // Simulating file upload progress
      const interval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            setIsLoading(false);
            return 100;
          }
          return prevProgress + 10;
        });
      }, 500);
    }
  };

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8 mb-8 w-full">
      <div className="w-full h-full">
        {!isLoading ? (
          <div className="flex items-center justify-center w-full h-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                <p className="mb-2 text-sm text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-400">PDF, DOC, DOCX (MAX. 10MB)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={handleFileUpload} />
            </label>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col justify-center">
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-400">Uploading...</span>
                <span className="text-sm font-medium text-blue-400">{uploadProgress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" style={{ width: `${uploadProgress}%` }}></div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-2">Preparing your document for summarization...</p>
            <ul className="text-sm text-gray-400 list-disc list-inside">
              <li>Analyzing document structure</li>
              <li>Extracting text content</li>
              <li>Preparing for AI processing</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
