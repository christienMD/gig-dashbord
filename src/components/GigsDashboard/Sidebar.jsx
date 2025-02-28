import DashedSeparator from "../DashedSeparator";
import Logo from "../Logo";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-50 p-4 w-full">
      <Logo />
      <DashedSeparator className="my-4" />
      <Navigation />
    </aside>
  );
};

export default Sidebar;
