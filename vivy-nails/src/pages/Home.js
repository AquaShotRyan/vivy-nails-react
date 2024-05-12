import Marquee from "react-fast-marquee";

export default function Home() {
  let contact = require('../json/contact.json');

  // get values json file
  const phone = contact["phone"];
  const address = contact["address"];
  const hours = [
    {day: "Mon-Wed", hour: "9:30 AM - 6:30 PM"},
    {day: "Thurs-Fri", hour: "9:30 AM - 7:00 PM"},
    {day: "Saturday", hour: "9:30 AM - 6:00 PM"}
  ]

  // images to display
  const images = [
    {src: "./home-images/photo_1.jpg", alt: "nails1"},
    {src: "./home-images/photo_1.jpg", alt: "nails1"},
    {src: "./home-images/photo_1.jpg", alt: "nails1"},
    {src: "./home-images/photo_1.jpg", alt: "nails1"},
    {src: "./home-images/photo_1.jpg", alt: "nails1"},
    {src: "./home-images/photo_1.jpg", alt: "nails1"},
  ]

  return (
    <div className="home-container">

      <div className="home-top">
        <p>Vivy Nails is a locally owned nail salon located in Ottawa</p>
        <p>Walk-in or book an appointment by calling<br></br>{phone}</p>

        <Marquee className="home-marquee" gradient={true} gradientWidth={70} gradientColor="#C7A7AA">
          {images.concat(images, images).map((image, index) => (
            <img src={image.src} alt={image.alt}></img>
          ))}
        </Marquee>
      </div>

      <div className="home-bottom">
        <p>Find Vivy Nails at <br></br>{address}</p>
        <p>We're open on</p>
        <table>
          {
            hours.map((day, index) => (
              <tr>
                <td>{day.day}</td>
                <td>{day.hour}</td>
              </tr>
            ))
          }
        </table>
      </div>

    </div>
  )
}