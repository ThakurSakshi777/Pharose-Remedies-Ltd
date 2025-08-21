import React from 'react'
import about from "../../assets/about-us.jpg";
import "./About.css";

const About = () => {
  return (
    <div className='about'>
       <section className="about-section">
      <div className="container">
        <div className="about-image">
        <img src={about} alt="About Image" />
      </div>
        <h2 className="section-title">About Us</h2>
        <p className="intro">
          <strong>PHAROSE REMEDIES LTD.</strong> was established in 1998 with a
          strong belief that accessibility to quality medicine at affordable
          price is the right of every citizen.
        </p>

        <p>
          Since its inception, <strong>PHAROSE REMEDIES LTD.</strong> has come a
          long way and is now amongst the leading pharmaceutical manufacturing
          companies, with state-of-the-art facilities at Bari Brahamana near
          Jammu (J&amp;K). Located in a pollution-free clean environment, ideal
          for Pharmaceuticals and Healthcare Products, our unit is well
          connected by Rail, Road, and Air.
        </p>

        <p>
          Our facilities are accredited with <strong>WHO-GMP Certification</strong>,
          and we are an <strong>ISO-9001:2008</strong> and{" "}
          <strong>ISO-14001:2004</strong> certified unit. We follow total
          quality management, with an advanced in-house testing laboratory
          equipped with modern instruments. To keep pace with emerging
          technology and changing needs, we continuously upgrade our
          infrastructure to develop, manufacture, and deliver innovative
          medicines of world-class quality at affordable prices.
        </p>

        <p>
          Our strong <strong>R&amp;D Department</strong> is fully equipped to
          meet the evolving demands of the future, offering customized services
          with in-house trials, pilot, and scale-up batches.
        </p>

        <p>
          We also undertake <strong>third-party manufacturing</strong> on P2P
          and Loan License basis, manufacturing leading brands for Pharma majors
          like <em>Sanofi Aventis, Ranbaxy (SUN), Panacea, Cadila, Cipla, Sun,
          Intas, Abbott, Alkem, Aristo, Lupin</em> and many more.
        </p>

        {/* Vision, Mission, Values */}
        <div className="about-cards">
          <div className="card">
            <h3>Our Vision</h3>
            <p>
              To make a difference in the lives of people through our
              innovative, high-quality medicines at affordable prices.
            </p>
          </div>

          <div className="card">
            <h3>Our Mission</h3>
            <p>
              To be dedicated to providing leading innovations and solutions for
              tomorrow and to be recognized as a one-point contact for every
              client’s need through cost-effective, time-bound, and value-added
              services.
            </p>
          </div>

          <div className="card">
            <h3>Our Core Values</h3>
            <ul>
              <li>Customized services</li>
              <li>Integrity & Ethics</li>
              <li>High-level Quality</li>
              <li>Competitiveness</li>
              <li>Timely Delivery</li>
              <li>Customer Satisfaction</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default About