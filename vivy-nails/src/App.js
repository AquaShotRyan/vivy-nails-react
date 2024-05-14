

import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// layouts
import RootLayout from './layouts/RootLayout.js';
import ServicesLayout from './layouts/ServicesLayout.js';

// pages
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Error from './pages/Error.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
      path="/" 
      element={<RootLayout />} 
      errorElement={<Error/>}
    >
      <Route index element={<Home />}/>
      <Route path="services" element={<ServicesLayout/>}>
      
      </Route>
      <Route path="contact" element={<Contact />}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
