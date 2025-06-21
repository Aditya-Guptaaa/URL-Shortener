import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree.js"
import Authpage from "../pages/authpage"

export const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth',
  component: Authpage
})