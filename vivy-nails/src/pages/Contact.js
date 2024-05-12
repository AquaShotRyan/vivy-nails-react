export default function Contact() {
	let contact = require('../json/contact.json');

	// get values json file
	let phone = contact["phone"];
	let address = contact["address"];
  let hours = contact["hours"];

	/* {
			Object.keys(hours).map(key => {
				return <p>{key + " " + hours[key]}</p>
			})
			} */

	return (
		<div className="contact-container">

			<div className="contact-salon-address">
				<h2>Salon Address</h2>
				<p>{address}</p>
				<p>{phone}</p>
				<p>By appointment or walk-in</p>
			</div>

			<div className="contact-break"></div>

			<div className="contact-hours">
				<h2>Hours</h2>
				<table>
					{
						Object.keys(hours).map(key => {
							return( 
								<tr>
									<td>{key}</td>
									<td className="contact-time">{hours[key]}</td>
								</tr>
							)
						})
					}
				</table>
			</div>

		</div>
	)
}