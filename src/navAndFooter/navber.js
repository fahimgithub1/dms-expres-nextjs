import BottomNev from "./bottomNev";
import MidNav from "./midNav";
import MobileNav from "./mobileNav";
import TopNav from "./topNav";

export default function Navber() {
  return (
    <nav>
      <div className="hideOnPhone">
        <TopNav />
        {/* <MidNav /> */}
        <BottomNev />
      </div>

      <MobileNav />
    </nav>
  );
}
