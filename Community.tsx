import React from 'react';
import { MessageSquareIcon, HeartIcon, MessageCircleIcon, ShareIcon, PlusIcon, MoreVerticalIcon } from 'lucide-react';
const Community = () => {
  const posts = [{
    id: 1,
    user: {
      name: 'Sirona Thapa',
      username: 'sirowna',
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    content: 'Looking for an affordable vet clinics that provide spaying and neutering facilities? I have multiple community cats that I look after. Drop some suggestions, would be a great help!!',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    likes: 13,
    comments: 21,
    timeAgo: '5 hours ago'
  }, {
    id: 2,
    user: {
      name: 'Ashutosh Shrestha',
      username: 'auosh489',
      image: 'https://images.unsplash.com/photo-1604734760685-90828b7a67c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    content: 'My dog just had a fresh new haircut and grooming session! #VetLife #PetCare #Petto',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    likes: 42,
    comments: 8,
    timeAgo: '2 hours ago'
  }];
  const topics = ['Pet Health', 'Adopt Here!', 'Pet Training', 'Grooming Services', 'Local Events'];
  return <div className="w-full p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-white">Petto Community</h1>
        <button className="bg-white text-[#FDAD4C] rounded-full p-2 shadow-sm">
          <PlusIcon className="h-5 w-5" />
        </button>
      </header>
      <div className="mb-6 overflow-x-auto">
        <div className="flex space-x-2 pb-1">
          {topics.map(topic => <button key={topic} className="bg-white text-[#FDAD4C] text-sm px-4 py-2 rounded-full whitespace-nowrap">
              {topic}
            </button>)}
        </div>
      </div>
      <div className="space-y-6">
        {posts.map(post => <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="p-4">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img src={post.user.image} alt={post.user.name} className="w-10 h-10 rounded-full object-cover mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-800">
                      {post.user.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      @{post.user.username} • {post.timeAgo}
                    </p>
                  </div>
                </div>
                <button>
                  <MoreVerticalIcon className="h-5 w-5 text-gray-400" />
                </button>
              </div>
              <p className="text-gray-700 mt-3">{post.content}</p>
            </div>
            {post.image && <img src={post.image} alt="Post" className="w-full h-64 object-cover" />}
            <div className="p-4 border-t border-gray-100">
              <div className="flex justify-between">
                <button className="flex items-center text-gray-600">
                  <HeartIcon className="h-5 w-5 mr-1" />
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center text-gray-600">
                  <MessageCircleIcon className="h-5 w-5 mr-1" />
                  <span className="text-sm">{post.comments}</span>
                </button>
                <button className="flex items-center text-gray-600">
                  <ShareIcon className="h-5 w-5 mr-1" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 flex items-center">
              <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" alt="User avatar" className="w-8 h-8 rounded-full object-cover mr-3" />
              <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 flex items-center">
                <input type="text" placeholder="Write a comment..." className="bg-transparent border-none outline-none text-sm flex-1" />
                <MessageSquareIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>)}
      </div>
    </div>;
};
export default Community;