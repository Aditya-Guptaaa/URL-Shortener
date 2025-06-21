import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree.js"
// import Authpage from "../pages/authpage"
import DashboardPage from "../pages/DashboardPage.jsx"
import { CheckAuth } from "../utils/helper.js"

export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: DashboardPage,
 beforeLoad: CheckAuth
  
})