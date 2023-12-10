import Button from "./components/Button";
import { Searchbar } from "./components/Searchbar";
import styles from "./page.module.css";
import Heading from "./components/Heading";
import { Footer } from "./Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  const images = [
    {
      id: 1,
      img1: "/shoe.jpg",
      alt: "not visible",
    },

    {
      id: 2,
      img2: "/cap.jpg",
      alt: "not visible",
    },

    {
      id: 3,
      img3: "/hoodie.jpg",
      alt: "not visible",
    },

    {
      id: 4,
      img4: "/watch.jpg",
      alt: "not visible",
    },
  ];

  return (
    <div>
        <Heading/>
      <Searchbar />

      <img src="/image1.jpg" className="h-[500px] mt-8"></img>

      <div className="mt-12 shadow-lg ">
        <p className="text-xl font-bold pl-5 pb-6">SHOP FROM OUR COLLECTIONS</p>
      </div>

      <div className="mt-8 ml-16 mb-[6rem]">
        {images.map((image) => (
          <div className="w-[80%] flex flex-col gap-10 mt-12 rounded-lg">
            <img
              src={image[`img${image.id}`]}
              key={image.id}
              alt={image.alt}
              className="w-[250px] h-[250px] rounded-lg"
            ></img>
            
            <Button className="w-[250px] h-[40px] text-lg bg-[#00296B]
             text-white rounded-lg" label="see more" ></Button>

          </div>
        ))}

      </div>
      <Footer/>
 <Navbar/>

    </div>
  );
}
