import { Outlet, NavLink, Link, ScrollRestoration } from "react-router-dom"

export default function RootLayout() {
  return (
    <div className="root-layout">
      <ScrollRestoration />
      <header>{/* white header section */}

        <div className="header-logo">
          <NavLink to="/">
            <img src="./vivy-nails-logo.png" alt="VIVY NAILS"></img>
          </NavLink>
        </div>

        <div className="header-navbar">
          <nav>
            <NavLink to="Services">Services</NavLink>
            <NavLink to="Gallery">Gallery</NavLink>
            <NavLink to="Contact">Contact</NavLink>
          </nav>
        </div>

        <div className="header-socials">
          <a href="https://www.instagram.com/vivy_nails_official/">
            <img src ="./instagram.svg" alt="Instagram"/>
          </a>
        </div>

      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
