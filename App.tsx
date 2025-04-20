import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import PetProfile from './pages/PetProfile';
import HealthTracker from './pages/HealthTracker';
import VetLocator from './pages/VetLocator';
import MedicineTracker from './pages/MedicineTracker';
import Community from './pages/Community';
import Navigation from './components/Layout/Navigation';
export function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'profile':
        return <PetProfile />;
      case 'health':
        return <HealthTracker />;
      case 'vet':
        return <VetLocator />;
      case 'medicine':
        return <MedicineTracker />;
      case 'community':
        return <Community />;
      default:
        return <Dashboard />;
    }
  };
  return <div className="bg-[#FDAD4C] w-full min-h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto pb-16">{renderPage()}</div>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>;
}