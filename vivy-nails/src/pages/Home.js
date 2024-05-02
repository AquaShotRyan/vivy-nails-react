

export default function Home() {
  let contact = require('../json/contact.json');

  // get values json file
  let phone = contact["phone"];
  let address = contact["address"];

  return (
    <div className="home-container">

      <div className="home-left">
        <p>Call to book an appointment today!</p>
        <br/>
        <p>{phone}</p>
        <br/>
        <p>{address}</p>
      </div>

      <div className="home-right">
        <img src="./home-images/photo_1.jpg" alt="nails"></img>
      </div>

    </div>
  )
}