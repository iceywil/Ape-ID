"use client";

import Image from "next/image";
import { Badge } from "lucide-react";
import Badges from "./Badges";
import Profile from "./Profile";
import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import PassportClosed from "./PassportClosed";
import Register from "./register";
import SetText from "./setText";
import { Separator } from "@/components/ui/separator";
import { IRL } from "./irl";
import Data from "./Data";
//import getUserData from "@/app/data/retrieve_user.mjs";

export function PassportProfile() {
  const { user } = useDynamicContext();
  const isLoggedIn = useIsLoggedIn();

  //let data = getUserData(user?.userId);
  console.log("userId", user?.userId);

  return !isLoggedIn ? (
    <div className="w-full max-w-5xl mx-auto my-8 p-4 font-montreal 100vh">
      <div className="flex rounded-2xl shadow-lg overflow-hidden relative">
        <div className="absolute inset-y-0 left-1/2 w-[4px] bg-gradient-to-r from-gray-200 to-white transform -translate-x-1/2 z-10"></div>
        <div className="w-1/2 bg-white py-8 px-12 relative overflow-hidden">
          <div className="absolute top-4 left-4 text-sm text-gray-500">
            Passport No: 20241119
          </div>
          <Profile />
          <Separator className="my-4" />
          <Register />
          <Separator className="my-4" />
          <SetText />
          <Separator className="my-4" />
          <Data verifiedCredentialsArray={user?.verifiedCredentials} />
          <Separator className="my-4" />
          <IRL />
          <img src="/images/ananouns.png" alt="IRL" className="w-full" />
          <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-gray-200 to-transparent"></div>
        </div>
        <Badges />
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center mt-16">
      <PassportClosed
        className="flex self-center"
        width={323 * 1.5}
        height={445 * 1.5}
      />
    </div>
  );
}
