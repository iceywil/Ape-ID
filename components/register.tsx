import { useWriteContract } from "wagmi";
import { abi } from "../app/integration/abi";
import { useState } from "react";
import { getAccount } from "@wagmi/core";
import { config } from "../app/integration/config";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

export default function SetText() {
  const { writeContract } = useWriteContract();
  const { primaryWallet } = useDynamicContext();

  const [firstName, setFirstName] = useState("Test");

  console.log(`firstName : ${firstName}`);
  console.log(`primaryWallet : ${primaryWallet?.address}`);

  const wallet = primaryWallet?.address;
  return (
    <div>
      <input
        name="myInput"
        defaultValue="DomainName"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <button
        onClick={() =>
          writeContract({
            abi: abi,
            address: "0x73bb68186837D843804C77871B35A7140d32De39",
            functionName: "register",
            args: [
              firstName,
              (wallet ||
                "0x0000000000000000000000000000000000000000") as `0x${string}`,
            ],
          })
        }
      >
        Transfer
      </button>
    </div>
  );
}
