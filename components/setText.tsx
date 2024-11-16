import { useWriteContract } from "wagmi";
import { abi } from "../app/integration/setText/abi";
import { useState } from "react";
import { getAccount } from "@wagmi/core";
import { config } from "../app/integration/register/config";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { labelhash, normalize } from "viem/ens";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SetText() {
  const { writeContract } = useWriteContract();
  const { primaryWallet } = useDynamicContext();

  const [key, setKey] = useState("Name");
  const [value, setValue] = useState("Will");

  const labelHash = labelhash(normalize("Test"));

  return (
    <div className="flex flex-row gap-4 justify-center">
      <img src="/images/ens-mark-Dark_Blue.png" alt="domain" className="h-8" />
      <Input
        className="max-w-40"
        name="myInput"
        defaultValue="Name"
        onChange={(e) => setKey(e.target.value)}
      />
      <Input
        className="max-w-40"
        name="myInput"
        defaultValue="Will"
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        onClick={() =>
          writeContract({
            abi: abi,
            address: "0x6536194058CA83Ec79737b14570584E99b88B428",
            functionName: "setText",
            args: [labelHash, key, value],
          })
        }
      >
        Set Info
      </Button>
    </div>
  );
}
