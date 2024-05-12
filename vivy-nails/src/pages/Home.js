import Marquee from "react-fast-marquee";

export default function Home() {
  let contact = require('../json/contact.json');

  // get values json file
  let phone = contact["phone"];
  let address = contact["address"];

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
      </div>

    </div>
  )
}