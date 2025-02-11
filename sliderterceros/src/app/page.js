import Slider from "./component/ejer1"
import MyCarousel from "./component/ejer2"
import MyMenu from "./component/ejer3"

export default function Home() {
  const images = [
    { src: "https://content.skyscnr.com/m/2dcd7d0e6f086057/original/GettyImages-186142785.jpg?resize=1224%3Aauto", alt: "Slide 1" },
    { src: "https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy.jpg", alt: "Slide 2" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewdvz0HQg1CNrO1U2TTbBfyzw5d9CIINWpw&s", alt: "Slide 3" }
  ];

  const imagesCarrousel = [
    { src: "https://content.skyscnr.com/m/2dcd7d0e6f086057/original/GettyImages-186142785.jpg?resize=1224%3Aauto", alt: "Slide 1" },
    { src: "https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy.jpg", alt: "Slide 2" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewdvz0HQg1CNrO1U2TTbBfyzw5d9CIINWpw&s", alt: "Slide 3" }
];

  return (
  <>
  <MyMenu/>
  <br></br>
  <Slider images={images}/>
  <br></br>
  <MyCarousel images={imagesCarrousel}/>
  <br></br>
  </>
  );
}
