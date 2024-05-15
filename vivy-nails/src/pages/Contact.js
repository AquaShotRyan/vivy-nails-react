import Slide from "../framer/Slide.js";

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
				<Slide direction={"left"}>
					<h2>Salon Address</h2>
					<p>{address}</p>
					<p>{phone}</p>
					<p>By appointment or walk-in</p>
				</Slide>
			</div>

			<div className="contact-break"></div>

			<div className="contact-hours">
				<Slide direction={"right"}>
					<h2>Hours</h2>
					<table>
						<tbody>
						{
							Object.keys(hours).map((key, index) => {
								return( 
									<tr key={index}>
										<td>{key}</td>
										<td className="contact-time">{hours[key]}</td>
									</tr>
								)
							})
						}
						</tbody>
					</table>
				</Slide>
			</div>

		</div>
	)
}