import MobileSidebar from "./MobileSidebar";
import UserButton from "./UserButton";

const user = {
  name: "Nyielli",
  email: "nyielli@gmail.com",
};

const Navbar = () => {
  return (
    <nav className="pt-4 p-7 flex items-center justify-between sticky top-0 z-30 bg-neutral-50">
      <div className="flex-col hidden lg:flex w-full">
        <h1 className="text-2xl font-semibold">Home</h1>
      </div>

      <MobileSidebar />
      <UserButton user={user} />
    </nav>
  );
};

export default Navbar;
