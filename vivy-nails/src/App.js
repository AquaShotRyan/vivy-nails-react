

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
import AdultManiPedi from './pages/AdultManiPedi.js';
import Removal from './pages/Removal.js';
import Kids from './pages/Kids.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
      path="/" 
      element={<RootLayout />} 
      errorElement={<Error/>}
    >
      <Route index element={<Home />}/>
      <Route path="services" element={<ServicesLayout/>}>
        <Route path="adultmanipedi" element={<AdultManiPedi/>}/>
        <Route path="removal" element={<Removal/>}/>
        <Route path="kids" element={<Kids/>}/>
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
