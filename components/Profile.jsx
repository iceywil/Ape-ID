import React, { useEffect, useState } from "react";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { get_data } from "@/app/data/domain_data.mjs";

const Profile = () => {
  const { user } = useDynamicContext();
  let first = user?.firstName;
  let last = user?.lastName;
  const [dataArray, setDataArray] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await get_data("Will", "avatar");
      setDataArray(data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-row items-center justify-start py-5">
      <img
        className="w-28 h-28 rounded-full border border-navy mr-4"
        src={dataArray ? dataArray : "/images/noun_none.png"}
        alt="profile"
      />
      <h1 className="text-4xl font-montreal">
        {first && last ? `${first} ${last}` : "Vitalik Buterin"}
      </h1>
    </div>
  );
};

export default Profile; 