import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"

export default function RootLayout() {
  return (
    <div className="services-layout">
			<div className="services-navbar">
				<nav>
					<div>
						<NavLink to="adultmanipedi">Adult Mani + Pedi</NavLink>                
					</div>
					<div>
						<NavLink to="removal">Removal</NavLink>
					</div>
					<div>
						<NavLink to="kids">Kids</NavLink>                
					</div>
        </nav>
			</div>
      <div className="prices">
        <Outlet/>
      </div>
    </div>
  )
}
