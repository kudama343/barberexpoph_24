'use client';

import NavigationBar from '../NavigationBar';

const EliteClassPage: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
        <h1 className="text-4xl font-bold mb-4">Elite Class</h1>
        <p className="text-lg">
          Welcome to the Elite Class page. This is a placeholder for Elite Class content.
        </p>
      </main>
    </div>
  );
};

export default EliteClassPage;
