import Header from "../components/Header";
import { PassportProfile } from "../components/PassportOpen";

function Appli() {
  return (
    <div className="min-h-screen max-h-screen bg-cream text-navy flex flex-col">
      <Header />
      <PassportProfile />
    </div>
  );
}

export default Appli;
