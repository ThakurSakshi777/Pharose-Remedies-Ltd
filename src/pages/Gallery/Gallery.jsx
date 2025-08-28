import React from "react";
import "./Gallery.css"; // styling

// Sample image imports (replace with your own)
import photo1 from "../../assets/1.jpg"
import photo2 from "../../assets/2.jpg"
import photo3 from "../../assets/3.jpg"
import photo4 from "../../assets/4.jpg"
import photo5 from "../../assets/5.jpg"
import photo6 from "../../assets/6.jpg"
import photo7 from "../../assets/7.jpg"
import photo8 from "../../assets/8.jpg"
import photo9 from "../../assets/9.jpg"
import photo10 from "../../assets/10.jpg"
import photo11 from "../../assets/11.jpg"
import photo12 from "../../assets/12.jpg"
import photo13 from "../../assets/13.jpg"
import photo14 from "../../assets/14.jpg"
import photo15 from "../../assets/15.jpg"
import photo16 from "../../assets/16.jpg"
import photo17 from "../../assets/17.jpg"
import photo18 from "../../assets/18.jpg"
import photo19 from "../../assets/19.jpg"
import photo20 from "../../assets/20.jpg"
import photo21 from "../../assets/21.jpg"
import photo22 from "../../assets/22.jpg"
import photo23 from "../../assets/23.jpg"
import photo24 from "../../assets/24.jpg"
import photo25 from "../../assets/25.jpg"
import photo26 from "../../assets/26.jpg"
import photo27 from "../../assets/27.jpg"
import photo28 from "../../assets/28.jpg"
import photo29 from "../../assets/29.jpg"
import photo30 from "../../assets/30.jpg"
import photo31 from "../../assets/31.jpg"
import photo32 from "../../assets/32.jpg"



const Gallery = () => {
  const images = [photo1, photo2, photo3, photo4, photo5, photo6 , photo7, photo8, photo9, photo10, photo11, photo12 , photo13, photo14, photo15, photo16, photo17, photo18 , photo19, photo20, photo21, photo22, photo23, photo24 , photo25, photo26 , photo27, photo28, photo29, photo30, photo31, photo32 ];

  return (
    <div className="gallery-page">
      <h1 className="gallery-title">My Gallery</h1>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
