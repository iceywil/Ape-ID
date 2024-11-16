"use client";

import Image from "next/image";
import { Badge } from "lucide-react";
import Badges from "./Badges";
import Profile from "./Profile";
import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import PassportClosed from "./PassportClosed";
import Register from "./register";
import SetText from "./setText";

export function PassportProfile() {
  const { user } = useDynamicContext();
  const isLoggedIn = useIsLoggedIn();

  return isLoggedIn ? (
    <div className="w-full max-w-5xl mx-auto my-8 p-4 font-montreal 100vh">
      <div className="flex rounded-2xl shadow-lg overflow-hidden relative">
        <div className="absolute inset-y-0 left-1/2 w-[4px] bg-gradient-to-r from-gray-200 to-white transform -translate-x-1/2 z-10"></div>
        <div className="w-1/2 bg-white p-8 relative overflow-hidden">
          <div className="absolute top-4 left-4 text-sm text-gray-500">
            Passport No: 20241116
          </div>
          <Profile />
          <Register />
          <SetText />
          <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-gray-200 to-transparent"></div>
        </div>
        <Badges />
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <PassportClosed
        className="flex self-center"
        width={323 * 1.5}
        height={445 * 1.5}
      />
    </div>
  );
}
