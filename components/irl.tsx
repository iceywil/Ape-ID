import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Create from "@/app/create/page";
import Url from "@/app/url/page";
import Verify from "@/app/verify/page";
import { labelhash, normalize } from "viem/ens";
import { useWriteContract } from "wagmi";
import { abi } from "@/app/integration/setText/abi";
import { useState } from "react";

export function IRL() {
  const labelHash = labelhash(normalize("Test"));
  const { writeContract } = useWriteContract();
  const [res, setRes] = useState("Test");

  function Link() {
    const result = writeContract({
      abi: abi,
      address: "0x6536194058CA83Ec79737b14570584E99b88B428",
      functionName: "setText",
      args: [labelHash, "text", "0x124347a80Ce33F5bb84beeAF8F6782f1223321"],
    });
    if (result != null) setRes(result);
  }

  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Connect Your Physical Passport</Button>
        </DrawerTrigger>
        <DrawerContent
          style={{
            width: "100vw",
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="flex justify-between w-full p-8 flex-col gap-4">
            <Button onClick={Url}>Change URL</Button>
            <Button onClick={Create}>Create Keypair</Button>
            <Button onClick={Verify}>Verify Passport</Button>
            <Button onClick={Link}>Link Passport</Button>
          </div>
          <div style={{ width: "100%" }}>
            <DrawerHeader>
              <DrawerTitle></DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>
          </div>
          <DrawerFooter
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "1em",
            }}
          >
            <Button>Done</Button>
            <DrawerClose>Back</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
