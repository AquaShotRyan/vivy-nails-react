import { Outlet, NavLink, ScrollRestoration } from "react-router-dom";


export default function RootLayout() {
  return (
    <div className="root-layout">
      <ScrollRestoration />
      <header>
      
        <div className="header-side">

        </div>

        <div className="header-middle">
          <div className="header-logo">
            <NavLink to="/">
              <img src="/vivy-nails-logo.png" alt="VIVY NAILS"></img>
            </NavLink>
          </div>

          <div className="header-navbar">
            <nav>
              <div>
                <NavLink to="/">Home</NavLink>                
              </div>
              <div>
                <NavLink to="services/adultmanipedi">Services</NavLink>
              </div>
              <div>
                <NavLink to="contact">Contact</NavLink>                
              </div>
            </nav>
          </div>
          
        </div>
        
        <div className="header-side">
          <div className="header-socials">
            <a href="https://www.instagram.com/vivy_nails_official/">
              <img src ="/instagram.svg" alt="Instagram"/>
            </a>
          </div>
        </div>

        

      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
