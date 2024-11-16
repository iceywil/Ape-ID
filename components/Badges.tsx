import { Badge } from "lucide-react";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

const Badges: React.FC = () => {
  return (
    <div className="w-1/2 bg-white p-8 relative overflow-hidden">
      <h3 className="text-xl font-semibold mb-6 text-center">
        Badges & Achievements
      </h3>
      <ScrollArea className="h-[534px]">
        <div className="flex flex-wrap gap-4 pr-4 justify-center align-center">
          {[1, 2, 3, 4].map((badge) => (
            <div
              key={badge}
              className="flex flex-col items-center justify-center p-4 rounded-lg"
              style={{
                transform: `rotate(${Math.random() * 20 - 10}deg)`,
                // marginLeft: `${Math.random() * 50}px`,
              }}
            >
              <Image
                src={`/images/badges/badge${badge}.png`}
                alt={`Badge ${badge}`}
                width={150}
                height={150}
                className="mb-2"
              />
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>This passport remains the property of Ape ID</p>
        <p>If found, please return to nearest Ape ID office</p>
      </div>
      {/* Right page shadow */}
      <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-gray-200 to-transparent"></div>
    </div>
  );
};

export default Badges;
