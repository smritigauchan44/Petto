import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon, StarIcon, SearchIcon } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});
const VetLocator = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const mapCenter = [27.7172, 85.324];
  const vets = [{
    id: 1,
    name: 'Nepal Animal Medical Center',
    address: 'Jhamsikhel, Lalitpur',
    distance: '3.5 km',
    rating: 4.5,
    isOpen: true,
    phone: '+977 1-5553333',
    location: [27.7072, 85.3239],
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  }, {
    id: 2,
    name: 'Kathmandu Vet Clinic',
    address: 'Thamel, Kathmandu',
    distance: '1.2 km',
    rating: 4.8,
    isOpen: true,
    phone: '+977 1-4444555',
    location: [27.7172, 85.324],
    image: 'https://images.unsplash.com/photo-1532939163844-547f958e91b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  }, {
    id: 3,
    name: 'Patan Veterinary Services',
    address: 'Patan, Lalitpur',
    distance: '5.1 km',
    rating: 4.2,
    isOpen: false,
    phone: '+977 1-5234567',
    location: [27.6747, 85.3206],
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcbf3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  }];
  return <div className="w-full p-4">
      <header className="mb-6">
        <h1 className="text-xl font-bold text-white mb-4">Search for Vets Nearby</h1>
        <div className="relative">
          <input type="text" placeholder="Search for vets or locations..." className="w-full bg-white rounded-xl py-3 pl-10 pr-4 text-sm" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-primary-200" />
        </div>
      </header>
      <div className="bg-white rounded-xl p-4 mb-6">
        <div className="h-64 rounded-lg overflow-hidden">
          <MapContainer center={mapCenter} zoom={13} style={{
          height: '100%',
          width: '100%'
        }}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {vets.map(vet => <Marker key={vet.id} position={vet.location}>
                <Popup>
                  <div className="p-2">
                    <h3 className="font-medium text-sm">{vet.name}</h3>
                    <p className="text-xs text-gray-600">{vet.address}</p>
                    <p className="text-xs text-primary-200 mt-1">
                      {vet.isOpen ? 'Open Now' : 'Closed'}
                    </p>
                  </div>
                </Popup>
              </Marker>)}
          </MapContainer>
        </div>
        <button className="w-full bg-primary-200 text-white py-2 rounded-lg font-medium text-sm mt-3">
          Show Nearby Vets
        </button>
      </div>
      <h2 className="text-lg font-bold text-white mb-3">
        Nearby Veterinarians
      </h2>
      <div className="space-y-4">
        {vets.map(vet => <div key={vet.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <img src={vet.image} alt={vet.name} className="w-full h-32 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-gray-800">{vet.name}</h3>
                <span className="bg-primary-50 text-primary-300 text-xs px-2 py-1 rounded-full">
                  {vet.distance}
                </span>
              </div>
              <div className="flex items-center mt-1">
                <MapPinIcon className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-xs text-gray-600">{vet.address}</span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center">
                  <StarIcon className="h-4 w-4 text-primary-200 mr-1" />
                  <span className="text-sm font-medium">{vet.rating}</span>
                </div>
                <div className={`flex items-center ${vet.isOpen ? 'text-primary-300' : 'text-primary-400'}`}>
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span className="text-xs font-medium">
                    {vet.isOpen ? 'Open Now' : 'Closed'}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <button className="bg-primary-200 text-white text-sm py-2 rounded-lg font-medium flex items-center justify-center">
                  <PhoneIcon className="h-4 w-4 mr-1" /> Call
                </button>
                <button className="bg-primary-50 text-primary-300 text-sm py-2 rounded-lg font-medium">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
};
export default VetLocator;