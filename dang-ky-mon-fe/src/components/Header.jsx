
import React from 'react';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
      <div className="flex items-center">
        <div className="relative mx-4 lg:mx-0">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="w-5 h-5 text-gray-500" />
          </span>
          <input
            className="w-32 pl-10 pr-4 rounded-md sm:w-64 focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="flex items-center">
        {/* Notification and User menu can go here */}
        <span className="relative block">
          <img
            className="object-cover w-10 h-10 mx-auto rounded-full"
            src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=100&h=100&fit=crop&ixid=eyJhcHBfaWQiOjF9"
            alt="Your avatar"
          />
        </span>
      </div>
    </header>
  );
};

export default Header;
