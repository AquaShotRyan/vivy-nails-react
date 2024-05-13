import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"

export default function RootLayout() {
  return (
    <div className="root-layout">
      <ScrollRestoration />
      <header>{/* white header section */}
      
        <div className="header-side">

        </div>

        <div className="header-middle">
          <div className="header-logo">
            <NavLink to="/">
              <img src="./vivy-nails-logo.png" alt="VIVY NAILS"></img>
            </NavLink>
          </div>

          <div className="header-navbar">
            <nav>
              <div>
                <NavLink className="navbar-link" to="/">Home</NavLink>                
              </div>
              <div>
                <NavLink className="navbar-link" to="services">Services</NavLink>
              </div>
              <div>
                <NavLink className="navbar-link" to="contact">Contact</NavLink>                
              </div>
            </nav>
          </div>
        </div>
        
        <div className="header-side">
          <div className="header-socials">
            <a href="https://www.instagram.com/vivy_nails_official/">
              <img src ="./instagram.svg" alt="Instagram"/>
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
