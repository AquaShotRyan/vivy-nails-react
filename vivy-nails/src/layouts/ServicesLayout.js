import { Outlet, NavLink, useLocation } from "react-router-dom"

export default function ServicesLayout() {
  let classAdult = "";
  let classRemoval = "";
  let classKid = "";
  const location = useLocation().pathname;

	if (location.includes("adultmanipedi"))
		classAdult = "service-active";
	else if (location.includes("removal"))
		classRemoval = "service-active";
	else if (location.includes("kids"))
		classKid = "service-active";

  return (
    <div className="services-layout">
			<div className="services-navbar">
				<nav>
					<div className={classAdult}>
						<NavLink to="adultmanipedi">Adult Mani + Pedi</NavLink>                
					</div>
					<div className={classRemoval}>
						<NavLink to="removal">Removal</NavLink>
					</div>
					<div className={classKid}>
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
