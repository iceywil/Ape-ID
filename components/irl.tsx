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

export function IRL() {
  return (
<<<<<<< HEAD
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Connect Your Physical Passport</Button>
        </DrawerTrigger>
        <DrawerContent style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ position: 'absolute', top: '3em', left: '1em' }}>
            <Button style={{ fontSize: '1.2em', padding: '1em 2em' }}>Change URL</Button>
          </div>
          <div style={{ position: 'absolute', top: '3em', right: '1em' }}>
            <Button style={{ fontSize: '1.2em', padding: '1em 2em' }}>Create Physical Wallet</Button>
          </div>
          <div style={{ position: 'absolute', bottom: '12em', right: '1em' }}>
            <Button style={{ fontSize: '1.2em', padding: '1em 2em' }}>Verify Passport</Button>
          </div>
          <div style={{ position: 'absolute', bottom: '12em', left: '1em' }}>
            <Button style={{ fontSize: '1.2em', padding: '1em 2em' }}>Check URL</Button>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Button style={{ fontSize: '1.2em', padding: '1em 2em' }}>Physical Passport</Button>
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
=======
    <Drawer>
      <DrawerTrigger asChild>
        <Button>IRL Passeport</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerFooter>
          <DrawerClose>Back</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
>>>>>>> 85c96076491149744d71780ab77cc70e2c3405b5
  );
}
