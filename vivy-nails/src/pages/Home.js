import Marquee from "react-fast-marquee";
import Slide from "../framer/Slide.js";

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
  const imagesRoot = "./home-images/";
  const images = [
    {src: imagesRoot + "AugustPink.jpg", alt: "AugustPink"},
    {src: imagesRoot + "BarbiePink.jpg", alt: "BarbiePink"},
    {src: imagesRoot + "ChromeTwoWay.jpg", alt: "ChromeTwoWay"},
    {src: imagesRoot + "Dip149Chrome.jpg", alt: "Dip149Chrome"},
    {src: imagesRoot + "FlowerSunday.jpg", alt: "FlowerSunday"},
    {src: imagesRoot + "HaileyBieber.jpg", alt: "HaileyBieber"},
    {src: imagesRoot + "Holiday.jpg", alt: "Holiday"},
    {src: imagesRoot + "PinkFlake.jpg", alt: "PinkFlake"},
    {src: imagesRoot + "RedHeart.jpg", alt: "RedHeart"},
    {src: imagesRoot + "ShortSweet.jpg", alt: "ShortSweet"},
    {src: imagesRoot + "SummerPink.jpg", alt: "SummerPink"},
    {src: imagesRoot + "WhitePink.jpg", alt: "WhitePink"},
  ]

  return (
    <div className="home-container">

      <div className="home-top">

        <Slide>
          <p>Vivy Nails is a locally owned nail salon located in Ottawa</p>
          <p>Walk-in or book an appointment by calling<br></br>{phone}</p>
        </Slide>

        <Marquee className="home-marquee" gradient={true} gradientWidth={70} gradientColor="#C7A7AA" pauseOnClick={true}>
          {images.concat(images, images).map((image, index) => (
              <img key={index} src={image.src} alt={image.alt}></img>
          ))}
        </Marquee>
      </div>

      <Slide>
        <div className="home-bottom">
          <p>Find Vivy Nails at <br></br>{address}</p>
          <p>We're open on</p>
          <table>
            <tbody>
            {
              hours.map((day, index) => (
                <tr key={index}>
                  <td>{day.day}</td>
                  <td>{day.hour}</td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </div>
      </Slide>

    </div>
  )
}