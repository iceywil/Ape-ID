import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-start py-5">
      <img
        className="w-28 h-28 rounded-full border border-navy mr-4"
        src="/images/noun_none.png"
        alt="profile"
      />
      <h1 className="text-4xl font-montreal">Vitalik Buterin</h1>
    </div>
  );
};

export default Profile;
