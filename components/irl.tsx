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
  );
}
