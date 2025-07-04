
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import {routeTree} from './routing/routeTree.js'
import store from './store/store.js'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
// import { Provider } from 'react-redux'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { Provider } from 'react-redux'
export const queryClient = new QueryClient()
const router = createRouter({ routeTree,
  context:{
    queryClient,
    store
  }

 })
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
  </QueryClientProvider>
  </Provider>
  
    

)
