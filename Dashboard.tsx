import React from 'react';
import { BellIcon, CalendarIcon, ClockIcon, UserIcon, HeartPulseIcon, StethoscopeIcon, UsersIcon } from 'lucide-react';
const Dashboard = () => {
  return <div className="w-full p-4">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">PETTO</h1>
          <p className="text-white/80 text-sm">Your Solution to Pet Care!</p>
        </div>
        <div className="relative">
          <BellIcon className="h-6 w-6 text-white" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </div>
      </header>
      <div className="bg-white rounded-xl p-4 mb-6 flex items-center">
        <img src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" alt="Dog" className="w-16 h-16 rounded-full object-cover border-2 border-white mr-4" />
        <div>
          <h2 className="text-lg font-bold text-gray-800">
            Hi, there! Bruno's owner!
          </h2>
          <p className="text-gray-600 text-sm">
            Bruno's next checkup is in 3 days
          </p>
        </div>
      </div>
      <section className="mb-6">
        <h2 className="text-lg font-bold text-white mb-3">Upcoming</h2>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center mb-3">
            <div className="bg-primary-50 p-2 rounded-lg mr-3">
              <CalendarIcon className="h-5 w-5 text-primary-300" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Vaccination</h3>
              <p className="text-xs text-gray-500">Kathmandu Vet Clinic</p>
            </div>
            <div className="ml-auto flex items-center">
              <ClockIcon className="h-4 w-4 text-gray-400 mr-1" />
              <span className="text-xs text-gray-500">Tomorrow, 10:30 AM</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-primary-50 p-2 rounded-lg mr-3">
              <ClockIcon className="h-5 w-5 text-primary-300" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Reminders!</h3>
              <p className="text-xs text-gray-500">Medicines: Antibiotics</p>
            </div>
            <div className="ml-auto flex items-center">
              <ClockIcon className="h-4 w-4 text-gray-400 mr-1" />
              <span className="text-xs text-gray-500">Today, 8:00 PM</span>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-6">
        <h2 className="text-lg font-bold text-white mb-3">Features</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center">
            <div className="bg-primary-50 p-3 rounded-lg mb-2">
              <UserIcon className="h-6 w-6 text-primary-300" />
            </div>
            <h3 className="text-sm font-medium text-gray-800">
              Bruno's Profile
            </h3>
            <p className="text-xs text-gray-500 text-center mt-1">
              Update Bruno's new milestone
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center">
            <div className="bg-primary-50 p-3 rounded-lg mb-2">
              <HeartPulseIcon className="h-6 w-6 text-primary-300" />
            </div>
            <h3 className="text-sm font-medium text-gray-800">
              Medical Records
            </h3>
            <p className="text-xs text-gray-500 text-center mt-1">
              Vaccinations, health metrics & timely record
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center">
            <div className="bg-primary-50 p-3 rounded-lg mb-2">
              <StethoscopeIcon className="h-6 w-6 text-primary-300" />
            </div>
            <h3 className="text-sm font-medium text-gray-800">
              Nearby Vet Clinics
            </h3>
            <p className="text-xs text-gray-500 text-center mt-1">
              Vets around Teku
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center">
            <div className="bg-primary-50 p-3 rounded-lg mb-2">
              <UsersIcon className="h-6 w-6 text-primary-300" />
            </div>
            <h3 className="text-sm font-medium text-gray-800">
              Petto Community
            </h3>
            <p className="text-xs text-gray-500 text-center mt-1">
              Connect with pet owners
            </p>
          </div>
        </div>
      </section>
    </div>;
};
export default Dashboard;