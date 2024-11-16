"use client";

import Image from "next/image";
import { Badge } from "lucide-react";
import Badges from "./Badges";
import Profile from "./Profile";

export function PassportProfile() {
  return (
    <div className="w-full max-w-5xl mx-auto my-8 p-4 font-montreal 100vh">
      <div className="flex rounded-2xl shadow-lg overflow-hidden relative">
        {/* Book spine shadow */}
        <div className="absolute inset-y-0 left-1/2 w-[4px] bg-gradient-to-r from-gray-200 to-white transform -translate-x-1/2 z-10"></div>

        {/* Left Page - Profile */}
        <div className="w-1/2 bg-white p-8 relative overflow-hidden">
          <div className="absolute top-4 left-4 text-sm text-gray-500">
            Passport No: 20241116
          </div>
          <Profile />
          {/* <div className="flex flex-row items-center justify-center h-full space-y-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 mr-4 border-[#B8B8B8]">
              <Image
                src="/images/noun_none.png"
                alt="Profile"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-montreal">Vitalik Buterin</h2>
              <p className="text-gray-500 mt-0">Member since 2024</p>
            </div>
          </div> */}
          {/* Left page shadow */}
          <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-gray-200 to-transparent"></div>
        </div>

        <Badges />
        {/* Right Page - Badges */}
        {/* <div className="w-1/2 bg-white p-8 relative overflow-hidden">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Badges & Achievements
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((badge) => (
              <div
                key={badge}
                className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Badge className="w-8 h-8 mb-2 text-gray-600" />
                <span className="text-sm text-gray-600">Badge {badge}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>This passport remains the property of Ape ID</p>
            <p>If found, please return to nearest Ape ID office</p>
          </div>
          {/* Right page shadow */}
        {/* <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-gray-200 to-transparent"></div>
        </div> */}
      </div>
    </div>
  );
}
