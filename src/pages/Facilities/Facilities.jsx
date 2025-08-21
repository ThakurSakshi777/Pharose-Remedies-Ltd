import React from 'react'
import "./facilities.css"
import faclities from "../../assets/faclities.jpg";

const Facilities = () => {
  return (
   <div>
    <div className="facilities-section">
     <div className="about-image">
                <img src={faclities} alt="About Image" />
      </div>
  <h2>Facilities</h2>
  <p>
    Our world-class manufacturing facility is spread across a vast area, located in a pollution-free and eco-friendly environment near Jammu (J&K). Designed to meet international pharmaceutical standards, our plant is an ideal space for manufacturing high-quality Pharmaceuticals and Healthcare Products.

   The facility is WHO–GMP certified, and also holds ISO 9001:2008 and ISO 14001:2004 certifications, ensuring strict adherence to quality, safety, and environmental management systems. With total quality management practices and an advanced in-house testing laboratory equipped with modern instruments, we guarantee excellence in every product we manufacture.
  </p>

  <h2>Key highlights of our facility include</h2>

   <ul>
    <li>Epoxy-coated manufacturing areas ensuring hygiene and contamination control.</li>
    <li>Segregated infrastructure for Production Units, Quality Control & Assurance Labs, Process Development Labs, and Warehousing.</li>
    <li>State-of-the-art Packaging Units to maintain product integrity.</li>
    <li>Toxic and Hazard Waste Management Systems to maintain eco-sustainability.</li>
    <li>Well-structured Employee Welfare Facilities for a healthy and motivated workforce.</li>
    <li>Primary and Secondary Change Rooms designed with international hygiene standards.</li>
   </ul>

 <br />

   <p>Our units are operated by a highly skilled and experienced workforce committed to efficiency, safety, and precision. With strong connectivity via rail, road, and air, our products are efficiently delivered across all major cities in India and also to international markets</p>

  <div className="facility-cards">
    <div className="facility-card">
      <h4>🏭 Modern Manufacturing</h4>
      <p>State-of-the-art facilities with WHO-GMP, ISO 9001:2008 and ISO 14001:2004 certifications.</p>
    </div>
    <div className="facility-card">
      <h4>🧪 Quality Control</h4>
      <p>In-house testing laboratory with modern equipment ensuring safety and efficacy.</p>
    </div>
    <div className="facility-card">
      <h4>⚙️ Infrastructure</h4>
      <p>Epoxy coated core areas, separate production, QC labs, warehouses, packaging, and more.</p>
    </div>
    <div className="facility-card">
      <h4>🚛 Connectivity</h4>
      <p>Well connected by Rail, Road and Air to all major towns of India.</p>
    </div>
  </div>
</div>

<div className="rnd-section">
  <h2>Research & Development</h2>
  <p>
    At PHAROSE REMEDIES LTD., we strongly believe that innovation is the driving force of growth. Our dedicated Research & Development Division is equipped with cutting-edge technology and staffed by highly qualified scientists and researchers. 
    <br />
    <br />
    Our extensive R&D facility is managed by skilled personnel, focusing on 
    innovation and product enhancement as per latest industry standards.
  </p>

  <h2>Our R&D focuses on:</h2>

   <ul>
    <li>Novel Drug Delivery Systems (NDDS) to improve effectiveness and patient compliance</li>
    <li>Formulation Development for various dosage forms such as tablets, capsules, syrups, ointments, and injectables.</li>
    <li>Process Optimization & Scale-Up Studies to ensure cost-effective and efficient production.</li>
    <li>Clinical Research Support & Bioequivalence Studies for regulatory submissions.</li>
    <li>Clinical Research Support & Bioequivalence Studies for regulatory submissions.</li>
   </ul>
   <br />
   <br />
   <p>We are committed to developing cost-effective formulations without compromising quality, ensuring affordable healthcare solutions for society.</p>

   

  <ul className="rnd-list">
    <li>💊 Enteric coated formulations</li>
    <li>🕒 Sustained / Controlled Release Formulations</li>
    <li>💡 Bi-layered tablets</li>
  </ul>
</div>

   </div>
  )
}

export default Facilities