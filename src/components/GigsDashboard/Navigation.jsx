import { cn } from "@/lib/utils";
import { PlusCircleIcon, SettingsIcon, UsersIcon } from "lucide-react";
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,
} from "react-icons/go";
import { Link, useLocation } from "react-router-dom";

const routes = [
  {
    label: "Overview",
    href: "/learner-dashboard",
    icon: GoHome,
    activeIcon: GoHomeFill,
    exact: true,
  },
  {
    label: "Create Gig",
    href: "/learner-dashboard/gigs/create",
    icon: PlusCircleIcon,
    activeIcon: PlusCircleIcon,
    exact: true,
  },
  {
    label: "My Gigs",
    href: "/learner-dashboard/gigs",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
    exact: true,
  },
  {
    label: "Profile",
    href: "/learner-dashboard/profile",
    icon: UsersIcon,
    activeIcon: UsersIcon,
    exact: true,
  },
  {
    label: "Settings",
    href: "/learner-dashboard/settings",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
    exact: true,
  },
];

const Navigation = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <ul className="flex flex-col">
      {routes.map((item) => {
        let isActive;

        if (item.exact) {
          isActive = pathname === item.href;
        } else {
          isActive =
            pathname === item.href ||
            (item.href !== "/learner-dashboard" &&
              pathname.startsWith(item.href));
        }

        const Icon = isActive ? item.activeIcon : item.icon;

        return (
          <Link key={item.href} to={item.href}>
            <div
              className={cn(
                "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500",
                isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
              )}
            >
              <Icon className="size-5 text-neutral-500" />
              {item.label}
            </div>
          </Link>
        );
      })}
    </ul>
  );
};

export default Navigation;
