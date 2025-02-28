import LearnerSettingsPage from "@/components/GigsDashboard/LearnerSettingsPage";
import GigCreate from "@/pages/GigCreate";
import GigDashboardOverview from "@/pages/GigDashboardOverview";
import GigDetails from "@/pages/GigDetails";
import GigEdit from "@/pages/GigEdit";
import Gigs from "@/pages/Gigs";
import HomePage from "@/pages/HomePage";
import LearnerDashboard from "@/pages/LearnerDashboard";
import LearnerProfile from "@/pages/LearnerProfile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/learner-dashboard",
    element: <LearnerDashboard />,
    children: [
      {
        index: true,
        element: <GigDashboardOverview />,
      },
      {
        path: "gigs",
        element: <Gigs />,
      },
      {
        path: "gigs/create",
        element: <GigCreate />,
      },
      {
        path: "gigs/:id",
        element: <GigDetails />,
      },
      {
        path: "gigs/:id/edit",
        element: <GigEdit />,
      },
      {
        path: "profile",
        element: <LearnerProfile />,
      },
      {
        path: "settings",
        element: <LearnerSettingsPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={routes} />;
}
