"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "lucide-react";
import Badges from "./Badges";
import Profile from "./Profile";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function PassportProfile() {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-8 p-4 font-montreal 100vh">
      <div className="flex rounded-2xl shadow-lg overflow-hidden relative">
        {/* Afficher le trait blanc seulement si la popup n'est pas visible */}
        {!showPopup && (
          <div className="absolute inset-y-0 left-1/2 w-[4px] bg-gradient-to-r from-gray-200 to-white transform -translate-x-1/2 z-10"></div>
        )}

        {/* Left Page - Profile */}
        <div className="w-1/2 bg-white p-8 relative overflow-hidden">
          <div className="absolute top-4 left-4 text-sm text-gray-500">
            Passport No: 20241116
          </div>
          <Profile />
          {/* Left page shadow */}
          <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-gray-200 to-transparent"></div>
        </div>

        <Badges />
      </div>
      {/* Ajout du bouton "Connect to Real Life" */}
      <div className="text-center mt-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleButtonClick}
        >
          Connect to Real Life
        </button>
      </div>

      {/* Utilisation du composant Dialog */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full h-3/4 overflow-y-auto flex flex-col justify-between">
            <div className="flex-grow">
              <h2 className="text-3xl font-bold mb-6">Connect to Real Life</h2>
              <p className="text-lg mb-6">This is a popup message when you click on "Connect to Real Life".</p>
              <p className="text-lg mb-6">You can add more content or functionality here as needed.</p>
              <p className="text-lg mb-6">This popup is now taller, allowing for more content to be displayed.</p>
              <p className="text-lg mb-6">Feel free to add additional information, images, or interactive elements in this space.</p>
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}