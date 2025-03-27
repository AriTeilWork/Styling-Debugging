import React from 'react';
import './ProfileCard.css';
export default function ProfileCard() {
    return (
      <div className="w-72 bg-gray-100 border border-gray-300 rounded-lg p-5 text-center mx-auto">
        <img
          src="https://via.placeholder.com/100"
          alt="avatar"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h2 className="text-lg font-bold text-black mt-3">Matti Meikäläinen</h2>
        <p className="text-sm text-gray-600 mt-2">
          Full-stack developer, passionate about coding and coffee
        </p>
        <button className="bg-blue-600 text-white rounded px-5 py-2 mt-5 hover:bg-blue-700">
          Contact Me
        </button>
      </div>
    );
  }