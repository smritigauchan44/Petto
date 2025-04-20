import React from 'react';
// ... existing imports
const Community = () => {
  const posts = [{
    id: 1,
    user: {
      name: 'Ashutosh Shrestha',
      username: 'auosh489',
      image: 'https://images.unsplash.com/photo-1594819047050-99defca82545?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    content: 'My dog just had a fresh new haircut and grooming session! #VetLife #PetCare #Petto',
    image: 'https://images.unsplash.com/photo-1599912346258-efd90528f9bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    likes: 42,
    comments: 8,
    timeAgo: '2 hours ago'
  }, {
    id: 2,
    user: {
      name: 'Sirona Thapa',
      username: 'sirowna',
      image: 'https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    content: 'Looking for an affordable vet clinics that provide spaying and neutering facilities? I have multiple community cats that I look after. Drop some suggestions, would be a great help!!',
    image: null,
    likes: 13,
    comments: 21,
    timeAgo: '5 hours ago'
  }];
  return <div className="w-full p-4">
      {/* ... existing JSX with updated color classes */}
    </div>;
};
export default Community;