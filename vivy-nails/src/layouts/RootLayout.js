import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"

export default function RootLayout() {
  return (
    <div className="root-layout">
      <ScrollRestoration />
      <header>{/* white header section */}

        <div className="header-logo">
          <img src="./vivy-nails-logo.png"></img>
        </div>

        <div className="header-navbar">
          <nav>
            <NavLink to="Services">Services</NavLink>
            <NavLink to="Gallery">Gallery</NavLink>
            <NavLink to="Contact">Contact</NavLink>
          </nav>
        </div>

        <div className="header-socials">
          <img src ="./instagram.svg" alt="Instagram"/>
        </div>

      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
