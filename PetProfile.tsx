import React from 'react';
import { PlusIcon, EditIcon, PawPrintIcon, CalendarIcon } from 'lucide-react';
const PetProfile = () => {
  const pets = [{
    id: 1,
    name: 'Bruno',
    species: 'Dog',
    breed: 'Beagle',
    age: '3 years',
    weight: '30 kg',
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  }, {
    id: 2,
    name: 'Miso',
    species: 'Cat',
    breed: 'Persian',
    age: '2 years',
    weight: '4.5 kg',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  }];
  return <div className="w-full p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-white">Pet Profiles</h1>
        <button className="bg-white text-[#FDAD4C] rounded-full p-2 shadow-sm">
          <PlusIcon className="h-5 w-5" />
        </button>
      </header>
      <div className="space-y-4">
        {pets.map(pet => <div key={pet.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative">
              <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
              <button className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-sm">
                <EditIcon className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">{pet.name}</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                  <PawPrintIcon className="h-4 w-4 text-gray-600 mr-1" />
                  <span className="text-xs text-gray-700">
                    {pet.species} - {pet.breed}
                  </span>
                </div>
                <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                  <CalendarIcon className="h-4 w-4 text-gray-600 mr-1" />
                  <span className="text-xs text-gray-700">{pet.age}</span>
                </div>
                <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                  <div className="h-4 w-4 text-gray-600 mr-1" />
                  <span className="text-xs text-gray-700">{pet.weight}</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4">
                <button className="bg-blue-50 text-blue-700 text-xs py-2 rounded-lg font-medium">
                  Medical Records
                </button>
                <button className="bg-green-50 text-green-700 text-xs py-2 rounded-lg font-medium">
                  Vaccinations
                </button>
                <button className="bg-purple-50 text-purple-700 text-xs py-2 rounded-lg font-medium">
                  Diet Options
                </button>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
};
export default PetProfile;