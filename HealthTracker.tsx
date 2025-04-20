import React from 'react';
import { CalendarIcon, PlusIcon, ArrowRightIcon } from 'lucide-react';
const HealthTracker = () => {
  return <div className="w-full p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-white">Health Tracker</h1>
        <button className="bg-white text-[#FDAD4C] rounded-full p-2 shadow-sm">
          <PlusIcon className="h-5 w-5" />
        </button>
      </header>
      <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
        <div className="flex items-center mb-4">
          <img src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" alt="Dog" className="w-12 h-12 rounded-full object-cover mr-3" />
          <div>
            <h2 className="font-bold text-gray-800">Bruno</h2>
            <p className="text-xs text-gray-500">Corgi, 4 years</p>
          </div>
          <button className="ml-auto text-blue-600 text-sm flex items-center">
            Change <ArrowRightIcon className="h-3 w-3 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-primary-50 rounded-lg p-3">
            <p className="text-xs text-gray-500 mb-1">Weight</p>
            <div className="flex items-end">
              <span className="text-xl font-bold text-gray-800">24</span>
              <span className="text-sm text-gray-600 ml-1 mb-0.5">kg</span>
            </div>
          </div>
          <div className="bg-primary-50 rounded-lg p-3">
            <p className="text-xs text-gray-500 mb-1">Height</p>
            <div className="flex items-end">
              <span className="text-xl font-bold text-gray-800">35</span>
              <span className="text-sm text-gray-600 ml-1 mb-0.5">cm</span>
            </div>
          </div>
          <div className="bg-primary-50 rounded-lg p-3">
            <p className="text-xs text-gray-500 mb-1">Temperature</p>
            <div className="flex items-end">
              <span className="text-xl font-bold text-gray-800">38.5</span>
              <span className="text-sm text-gray-600 ml-1 mb-0.5">°C</span>
            </div>
          </div>
          <div className="bg-primary-50 rounded-lg p-3">
            <p className="text-xs text-gray-500 mb-1">Heart Rate</p>
            <div className="flex items-end">
              <span className="text-xl font-bold text-gray-800">85</span>
              <span className="text-sm text-gray-600 ml-1 mb-0.5">bpm</span>
            </div>
          </div>
        </div>
      </div>
      <section className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold text-white">Health History</h2>
          <button className="text-white text-sm flex items-center">
            View All <ArrowRightIcon className="h-3 w-3 ml-1" />
          </button>
        </div>
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-start">
              <div className="bg-red-100 p-2 rounded-lg mr-3">
                <div className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Fever Detected</h3>
                <p className="text-xs text-gray-500">Temperature: 39.5°C</p>
                <div className="flex items-center mt-1">
                  <CalendarIcon className="h-3.5 w-3.5 text-gray-400 mr-1" />
                  <span className="text-xs text-gray-500">
                    Yesterday, 3:30 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-lg mr-3">
                <div className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Weight Increase</h3>
                <p className="text-xs text-gray-500">
                  New weight: 30kg (+0.5kg)
                </p>
                <div className="flex items-center mt-1">
                  <CalendarIcon className="h-3.5 w-3.5 text-gray-400 mr-1" />
                  <span className="text-xs text-gray-500">April 04, 2025</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <div className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Vaccination</h3>
                <p className="text-xs text-gray-500">Rabies Vaccine</p>
                <div className="flex items-center mt-1">
                  <CalendarIcon className="h-3.5 w-3.5 text-gray-400 mr-1" />
                  <span className="text-xs text-gray-500">March 08, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button className="w-full bg-white text-[#FDAD4C] py-3 rounded-xl font-medium shadow-sm">
        Add New Health Record
      </button>
    </div>;
};
export default HealthTracker;