const Service = ({name}) => {
	const services = require('../json/services.json');
	const prices = services[name];

  return (
    <div className="services-prices">
			{
				prices.map((item, index) => (
					<div key={index} className="service"> 
						<div>{item["service"]}</div> 
						<div style={{"borderBottom":"2px dotted #BB878C", "flexGrow":"1"}}></div> 
						<div>{"$"+item["price"]}</div> 
					</div>
				))
			}
		</div>
  )
}

export default Service