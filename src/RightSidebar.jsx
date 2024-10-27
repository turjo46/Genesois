// RightSidebar.js
import React from "react";

const RightSidebar = () => {
  return (
    <div className="w-64 bg-gray-100 h-screen p-4">
      <div className="mb-4">
        <h2 className="font-bold">Sponsored</h2>
        <div className="bg-white p-2 my-2">Join group chat on Telegram</div>
        <div className="bg-white p-2 my-2">Need Help With IELTS?</div>
      </div>
      <div className="mb-4">
        <h2 className="font-bold">Birthdays</h2>
        <p>Yeasir Arafat Sawon and Abu Noman have birthdays today.</p>
      </div>
      <div>
        <h2 className="font-bold">Contacts</h2>
        <div className="space-y-2">
          <p>Di Pu II</p>
          <p>Mashrufa Mehnaz Audri</p>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
