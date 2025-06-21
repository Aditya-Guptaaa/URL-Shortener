import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree.js"
// import Authpage from "../pages/authpage"
import HomePage from "../pages/HomePage.jsx"

export const homepageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage
})