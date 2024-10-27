// Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-4">
      <div className="flex flex-col items-start">
        <div className="text-lg mb-4">Profile</div>
        <ul className="space-y-4">
          <li>Friends (108 Online)</li>
          <li>Memories</li>
          <li>Saved</li>
          <li>Groups</li>
          <li>Video</li>
          <li>Marketplace</li>
          <li>Feeds</li>
        </ul>
        <div className="mt-4">Your Shortcuts</div>
        <ul className="space-y-4">
          <li>CSE Cultural Club</li>
          <li>UAP Developer Community</li>
          <li>Nooboss Gaming</li>
          <li>Fairyland Merge & Magic</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
