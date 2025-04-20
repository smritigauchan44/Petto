import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon, StarIcon, SearchIcon } from 'lucide-react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
const VetLocator = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const {
    isLoaded
  } = useLoadScript({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY' // Replace with actual API key
  });
  const mapCenter = {
    lat: 27.7172,
    lng: 85.324
  }; // Kathmandu coordinates
  const vets = [{
    id: 1,
    name: 'Kathmandu Vet Clinic',
    address: 'Thamel, Kathmandu',
    distance: '1.2 km',
    rating: 4.8,
    isOpen: true,
    phone: '+977 1-4444555',
    location: {
      lat: 27.7172,
      lng: 85.324
    },
    image: 'https://images.unsplash.com/photo-1599912346258-efd90528f9bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  }
  // ... other vet entries
  ];
  const mapOptions = {
    styles: [{
      featureType: 'all',
      elementType: 'geometry',
      stylers: [{
        color: '#FFF1E5'
      }]
    }, {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{
        color: '#FED7A7'
      }]
    }]
  };
  if (!isLoaded) return <div>Loading...</div>;
  return <div className="w-full p-4">
      <header className="mb-6">
        <h1 className="text-xl font-bold text-white mb-4">Vet Locator</h1>
        <div className="relative">
          <input type="text" placeholder="Search for vets or locations..." className="w-full bg-white rounded-xl py-3 pl-10 pr-4 text-sm" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-primary-200" />
        </div>
      </header>
      <div className="bg-white rounded-xl p-4 mb-6">
        <div className="h-64 rounded-lg overflow-hidden">
          <GoogleMap zoom={14} center={mapCenter} mapContainerClassName="w-full h-full" options={mapOptions}>
            {vets.map(vet => <MarkerF key={vet.id} position={vet.location} title={vet.name} />)}
          </GoogleMap>
        </div>
        <button className="w-full bg-primary-200 text-white py-2 rounded-lg font-medium text-sm mt-3">
          Show Nearby Vets
        </button>
      </div>
      {/* Rest of the component with updated colors */}
    </div>;
};
export default VetLocator;