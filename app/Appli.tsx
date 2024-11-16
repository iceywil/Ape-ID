import Header from "../components/Header";
import { PassportProfile } from "../components/passport-profile";

function Appli() {
  return (
    <div className="min-h-screen bg-cream text-navy">
      <Header />
      <PassportProfile />
      {/* <Passport /> */}
    </div>
  );
}

export default Appli;
