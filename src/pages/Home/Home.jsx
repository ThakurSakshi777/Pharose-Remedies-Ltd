import React from 'react'
import './Home.css'
import Nav from '../../Components/Nav/Nav'
import moutain from "../../assets/Moutain.webp";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import g5 from "../../assets/g5.jpg";
import g2 from "../../assets/g2.jpg";
import g3 from "../../assets/g3.jpg";
import g4 from "../../assets/g4.jpg";

const Home = () => {
  return (
    <div className='home'> 
    <h2> From Infinity </h2>
    <h2> Flows Purity </h2>
    
      <img src={moutain} alt="Moutain img" /> 
      <div className='home-details'>
         <h2> Welcome To Pharose Remedies Ltd.</h2>

        <h4>PHAROSE REMEDIES LTD.</h4> 
        <p>was established in 1998 with a strong belief that access to quality medicine at an affordable price is the right of every citizen. Since then, we have been committed to innovation, quality, and care in the field of pharmaceuticals. Our goal is to bridge the gap between advanced healthcare solutions and people in need, ensuring that no one is deprived of essential medicines due to cost or availability.

        Over the years, Pharose has grown into a trusted name in the industry, backed by modern manufacturing facilities, strict quality control processes, and a dedicated team of professionals. We follow Good Manufacturing Practices (GMP) and adhere to international standards of safety and efficacy.</p>

        <h4>PHAROSE REMEDIES LTD.</h4> 
        <p>Our product portfolio covers a wide range of therapeutic areas, including pain management, anti-infectives, vitamins, and general wellness. Through continuous research and development, we strive to introduce effective formulations that meet the evolving needs of patients and healthcare providers.

        With a mission to improve lives and a vision to create a healthier future, Pharose Remedies Ltd. continues to serve doctors, patients, and communities with integrity and responsibility.</p>
          
      </div>
      <div className="banner">
        <img  className='banner1' src={banner1} alt="" />
        <img  className='banner1' src={banner2} alt="" />
      </div>

       <div className="gallery-section">
      <h2 className="gallery-title">Our Gallery</h2>

      <div className="gallery-grid">
        <img src={g5} alt="Gallery 1" className="gallery-img" />
        <img src={g2} alt="Gallery 2" className="gallery-img" />
        <img src={g3} alt="Gallery 3" className="gallery-img" />
        <img src={g4} alt="Gallery 4" className="gallery-img" />
      </div>

      <a href=""> <button className="view-more-btn">View More</button></a>
    </div>
    </div>
  )
}

export default Home