import React from 'react';

const CommentSection = () => {
  const comments = [
    {
      id: 1,
      name: 'Hazard Jhonson',
      date: 'March 19, 2019',
      time: '12:00 am',
      avatar: 'https://via.placeholder.com/50', // Replace with actual avatar URL
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
    },
    {
      id: 2,
      name: 'Alex Williams',
      date: 'March 19, 2019',
      time: '12:00 am',
      avatar: 'https://via.placeholder.com/50', // Replace with actual avatar URL
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      name: 'Hazard Jhonson',
      date: 'March 19, 2019',
      time: '12:00 am',
      avatar: 'https://via.placeholder.com/50', // Replace with actual avatar URL
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
    },
  ];

  return (
    <div className='  container mx-auto   ' >
    <div className=" bg-gray-100 w-[1100px] px-36 ">
      <h2 className="text-3xl font-semibold mb-4">(02) Comments:</h2>
      {comments.map((comment) => (
        <div key={comment.id} className=" border-b border-gray-200 pb-4">
          <div className="flex items-start space-x-4">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={comment.avatar}
              alt={comment.name}
            />
            <div>
              <div className="text-sm font-medium text-gray-800">{comment.name}</div>
              <div className="text-xs text-gray-500">
                {comment.date} at {comment.time}
              </div>
              <p className="mt-2 text-gray-700 text-sm">{comment.content}</p>
              <button className="mt-2 text-sm text-blue-500 hover:underline">Reply</button>
            </div>
          </div>
        </div>
      ))}
    </div>

   
    </div>
    
  );
};

export default CommentSection;
