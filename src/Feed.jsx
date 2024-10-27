// Feed.js
import React from "react";

const Feed = () => {
  return (
    <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
      <div className="bg-white p-4 rounded mb-4">
        <textarea
          placeholder="What's on your mind?"
          className="w-full p-2 bg-gray-100 rounded"
        />
        <div className="flex justify-end mt-2">
          <button className="bg-blue-500 text-white p-2 rounded">Post</button>
        </div>
      </div>
      <div className="bg-white p-4 rounded mb-4">
        <div className="font-bold">Daily Naya Diganta</div>
        <p>
          Some news content in Bengali. This would represent a news feed or
          status post.
        </p>
      </div>
    </div>
  );
};

export default Feed;
