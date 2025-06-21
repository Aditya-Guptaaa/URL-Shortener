import { createRootRoute } from "@tanstack/react-router"
import App from "../App"
import { authRoute } from "./auth.route.js"
import { homepageRoute } from "./homePage.js"
import { dashboardRoute } from "./dashBoard.js"

export const rootRoute = createRootRoute({
  component: App,
})
 
export const routeTree =  rootRoute.addChildren([authRoute, homepageRoute,dashboardRoute])