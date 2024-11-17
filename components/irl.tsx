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
import { labelhash, normalize } from 'viem/ens';
import { useWriteContract } from 'wagmi'
import { abi } from '@/app/integration/setText/abi'
import { useState } from "react";

export function IRL() {

	const labelHash = labelhash(normalize('Test'));
	const { writeContract } = useWriteContract()
	const [res, setRes] = useState('Test');

	function Link() {
		const result = writeContract({
			abi: abi,
			address: '0x6536194058CA83Ec79737b14570584E99b88B428',
			functionName: 'setText',
			args: [
				labelHash,
				"text",
				"0x124347a80Ce33F5bb84beeAF8F6782f1223321"
			]
		});
		if (result != null)
			setRes(result);
	}

  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Connect Your Physical Passport</Button>
        </DrawerTrigger>
        <DrawerContent style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ position: 'absolute', top: '3em', left: '1em' }}>
            <Button onClick={Url} style={{ fontSize: '1.2em', padding: '1em 2em' }}>Change URL</Button>
          </div>
          <div style={{ position: 'absolute', top: '3em', right: '1em' }}>
            <Button onClick={Create} style={{ fontSize: '1.2em', padding: '1em 2em' }}>Create Physical Passport Keypair</Button>
          </div>
          <div style={{ position: 'absolute', bottom: '12em', right: '1em' }}>
            <Button onClick={Verify} style={{ fontSize: '1.2em', padding: '1em 2em' }}>Verify Passport</Button>
          </div>
          <div style={{ position: 'absolute', bottom: '12em', left: '1em' }}>
            <Button onClick={Link} style={{ fontSize: '1.2em', padding: '1em 2em' }}>Link Physical Passport to Digital Passport</Button>
          </div>
          <div style={{ width: '100%' }}>
            <DrawerHeader>
              <DrawerTitle></DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>
          </div>
          <DrawerFooter style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '1em' }}>
            <Button>Done</Button>
            <DrawerClose>Back</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
