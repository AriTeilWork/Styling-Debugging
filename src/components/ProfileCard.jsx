import React from 'react';

export default function ProfileCard() {
  return (
    <div className="w-72 bg-gray-100 rounded-lg border border-gray-300 p-5 text-center">
      <img
        src="https://via.placeholder.com/100"
        alt="avatar"
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-lg font-bold text-black mt-4">Matti Meikäläinen</h2>
      <p className="text-sm text-gray-600 mt-2">
        Full-stack developer, passionate about coding and coffee
      </p>
      <button className="bg-blue-600 text-white w-30 rounded-md py-2 mt-5">
        Contact Me
      </button>
    </div>
  );
}
