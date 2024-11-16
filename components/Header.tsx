import React from "react";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

const Header: React.FC = () => {
  return (
    <header className="bg-none px-4 py-2 border-b border-navy">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-5xl font-bit">Ape ID</h1>
        </div>
        <div>
          {/* <button className="bg-navy hover:bg-navy/80 px-4 py-2 rounded-lg font-montreal text-white">
            Connect Wallet
          </button> */}
          <DynamicWidget
            buttonClassName="bg-navy hover:bg-navy/80 px-4 py-2 rounded-lg font-montreal text-white"
            buttonContainerClassName="bg-navy hover:bg-navy/80 px-4 py-2 rounded-lg font-montreal text-white"
            // variant="dropdown"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
