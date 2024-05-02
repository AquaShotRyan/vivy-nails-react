export default function Contact() {
	let contact = require('../json/contact.json');

	// get values json file
	let phone = contact["phone"];
	let address = contact["address"];
  let hours = contact["hours"]

	return (
		<div className="contact-container">
			<div className="contact-col">
        {phone}
			</div>
			<div className="contact-col">
        {
          Object.keys(hours).map(key => {
            return <p>{key + " " + hours[key]}</p>
          })
        }
      </div>
			<div className="contact-col">
        {address}
      </div>
		</div>
	)
}