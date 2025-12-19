import React from "react";
import { FiCalendar, FiHeart, FiMessageCircle, FiUser } from "react-icons/fi";
import { RiHome4Fill } from "react-icons/ri";

const Sprof = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* Header */}
      <div className="bg-gray-200 p-4 text-lg font-semibold border-b">Profil</div>

      {/* User ID */}
      <div className="p-4 border-b text-gray-600 text-sm">User 19874</div>

      {/* Menu */}
      <div className="p-4 space-y-6 text-[15px]">
        <div className="cursor-pointer">Gestion de compte</div>
        <div className="cursor-pointer">Paramètres</div>
        <div className="cursor-pointer">Confidentialité</div>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-auto border-t bg-white flex justify-around py-2 text-xs text-gray-600">
        <div className="flex flex-col items-center cursor-pointer">
          <RiHome4Fill className="text-xl" />
          <span>Maison</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <FiCalendar className="text-xl" />
          <span>Reservation</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <FiHeart className="text-xl" />
          <span>Favoris</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <FiMessageCircle className="text-xl" />
          <span>Messages</span>
        </div>
        <div className="flex flex-col items-center text-blue-500 cursor-pointer">
          <FiUser className="text-xl " />
          <span>Profil</span>
        </div>
      </div>
    </div>
  );
};

export default Sprof;