import React from 'react';
import { PlusIcon, CheckCircleIcon, XCircleIcon, ClockIcon, PillIcon, CalendarIcon } from 'lucide-react';
const MedicineTracker = () => {
  const medications = [{
    id: 1,
    name: 'Antibiotics',
    dosage: '2 pills',
    frequency: 'Twice daily',
    timeOfDay: ['8:00 AM', '8:00 PM'],
    startDate: 'April 24, 2025',
    endDate: 'July 17, 2025',
    status: 'active',
    pet: 'Bruno',
    nextDose: '8:00 PM Today',
    takenToday: [true, false]
  }, {
    id: 2,
    name: 'Vitamin Supplement',
    dosage: '1 tablet',
    frequency: 'Once daily',
    timeOfDay: ['9:00 AM'],
    startDate: 'March 24, 2025',
    endDate: 'Dec 15, 2025',
    status: 'active',
    pet: 'Momo',
    nextDose: '9:00 AM Tomorrow',
    takenToday: [true]
  }, {
    id: 3,
    name: 'Anti-inflammatory',
    dosage: '1 pill',
    frequency: 'Twice daily',
    timeOfDay: ['7:00 AM', '7:00 PM'],
    startDate: 'Jul 5, 2025',
    endDate: 'Jul 12, 2025',
    status: 'completed',
    pet: 'Miso',
    nextDose: null,
    takenToday: [true, true]
  }];
  return <div className="w-full p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-white">Medicine Tracker</h1>
        <button className="bg-white text-[#FDAD4C] rounded-full p-2 shadow-sm">
          <PlusIcon className="h-5 w-5" />
        </button>
      </header>
      <section className="mb-6">
        <h2 className="text-lg font-bold text-white mb-3">
          Today's Medications
        </h2>
        <div className="space-y-3">
          {medications.filter(med => med.status === 'active').map(med => <div key={med.id} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="bg-primary-50 p-2 rounded-lg mr-3">
                      <PillIcon className="h-5 w-5 text-primary-300" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{med.name}</h3>
                      <p className="text-xs text-gray-500">
                        {med.dosage} • For {med.pet}
                      </p>
                    </div>
                  </div>
                  <div className="bg-primary-50 text-primary-300 text-xs px-2 py-1 rounded-full">
                    {med.frequency}
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex items-center mb-1">
                    <ClockIcon className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-xs text-gray-600">
                      Next dose: {med.nextDose || 'Completed'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-xs text-gray-600">
                      {med.startDate} to {med.endDate}
                    </span>
                  </div>
                </div>
                <div className="mt-3 border-t border-gray-100 pt-3">
                  <p className="text-xs text-gray-500 mb-2">Today's doses:</p>
                  <div className="flex gap-2">
                    {med.timeOfDay.map((time, index) => <div key={time} className="flex-1">
                        <div className={`flex items-center justify-center p-2 rounded-lg ${med.takenToday[index] ? 'bg-green-100' : 'bg-gray-100'}`}>
                          {med.takenToday[index] ? <CheckCircleIcon className="h-5 w-5 text-green-600" /> : <XCircleIcon className="h-5 w-5 text-gray-400" />}
                        </div>
                        <p className="text-xs text-center mt-1">{time}</p>
                      </div>)}
                  </div>
                </div>
                {!med.takenToday.every(taken => taken) && <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium text-sm mt-3">
                    Mark as Taken
                  </button>}
              </div>)}
        </div>
      </section>
      <section>
        <h2 className="text-lg font-bold text-white mb-3">
          Medication History
        </h2>
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
          {medications.filter(med => med.status === 'completed').map(med => <div key={med.id} className="p-4 border-b border-gray-100 last:border-b-0">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-lg mr-3">
                      <PillIcon className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{med.name}</h3>
                      <p className="text-xs text-gray-500">
                        {med.dosage} • For {med.pet}
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">
                    Completed
                  </div>
                </div>
                <div className="mt-2 ml-11">
                  <div className="flex items-center">
                    <CalendarIcon className="h-3.5 w-3.5 text-gray-400 mr-1" />
                    <span className="text-xs text-gray-600">
                      {med.startDate} to {med.endDate}
                    </span>
                  </div>
                </div>
              </div>)}
        </div>
      </section>
    </div>;
};
export default MedicineTracker;