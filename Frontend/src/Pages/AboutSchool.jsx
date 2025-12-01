import React from "react";
import "../Styles/AboutSchool.css";
import school from "../assets/AboutSchool/school.jpg"
import ourVision from "../assets/AboutSchool/ourVision.png";
import ourMission from "../assets/AboutSchool/ourMission.png";
import ourValues from "../assets/AboutSchool/ourValues.png";
import profile from "../assets/AboutSchool/profile.png";


// campus section image
import advSchool from "../assets/AboutSchool/advancedClassRoom.jpg";
import exLibrary from "../assets/AboutSchool/extensiveLibrary.jpg";
import scienceLib from "../assets/AboutSchool/scienceLaboratories.jpg";
import compLabs from "../assets/AboutSchool/computerLabs.jpg";
import schlFaci from "../assets/AboutSchool/schoolFacilities.png";
import artandmusic from "../assets/AboutSchool/artAndMusic.jpg";

function AboutSchool() {
  const textp = (
    <>
      Welcome to EduConnect hub, where innovation meets tradition to shape the
      eaders of tomorrow. <br />Explore our journey, values and commitment to
      excellence.
    </>
  );

  const text2 = (
    <>
      EduConnect Hub was founded in 1985 with a vision to create an educational
      institution that fosters critical thinking, creativity, and a strong sense
      of community. Starting from humble beginnings as a small preparatory
      school, we have grown into a leading academic center renowned for our
      innovative curriculum and dedication to student success. Our history is
      marked by continuous evolution, embracing new methodologies while
      preserving the timeless values of integrity and perseverance.
      <br />
      <br />
      Over the decades, we have celebrated countless achievements, from
      groundbreaking research by our faculty to stellar performances by our
      students in various fields. Our alumni network spans the globe, embodying
      the spirit of EduConnect Hub in every endeavor. We are proud of our past
      and excited for a future where we continue to inspire and empower
      generations of learners.
    </>
  );


  return (
    <>
      <section id="main-page">
        {/* 1st-box */}
        <section id="first-container">
          <h1 className="container-heading">Discover EduConnect Hub</h1>
          <div id="heading-desc">
            <p>{textp}</p>
          </div>
          <button className="btns">Apply</button>
        </section>

        {/* 2nd-box */}
        <section id="second-container">
          <h1 className="container-heading">Our Enduring Legacy</h1>
          <div id="second-container1">
            <div id="rt-box">
              <h2>A Journey of Academic Excellence</h2>
              <div>{text2}</div>
            </div>
            <div id="lt-box">
              <img src={school} alt="about-image" />
            </div>
          </div>
        </section>

        {/* 3rd-box */}
        <section className="pillars-section">
          <h2>Our Pillars of Excellence</h2>

          <div className="pillars-wrapper">
            <div className="pillar-card">
              <img src={ourMission} alt="Mission Icon" className="pillar-icon" />
              <h3>Our Mission</h3>
              <p>
                To provide a nurturing and stimulating environment that empowers students to achieve their full academic,
                personal and social potential.
              </p>
            </div>

            <div className="pillar-card">
              <img src={ourVision} alt="Vision Icon" className="pillar-icon" />
              <h3>Our Vision</h3>
              <p>
                To be a beacon of innovative education, fostering a community of lifelong learners and responsible citizens.
              </p>
            </div>

            <div className="pillar-card">
              <img src={ourValues} alt="Values Icon" className="pillar-icon" />
              <h3>Our Values</h3>
              <p>
                Integrity, Respect, Excellence, Collaboration, and Innovation guide every action and decision.
              </p>
            </div>
          </div>
        </section>

        {/* 4th-box */}
        <section className="principal-message">
          <h2>A Message from Our Principal</h2>

          <div className="message-card">
            <div className="principal-img">
              <img src={profile} alt="Principal" />
            </div>

            <div className="message-text">
              <p className="quote">
                “At EduConnect Hub, we believe in cultivating not just minds,
                but also character. Our commitment is to provide an environment
                where every student feels inspired to learn, challenged to grow,
                and empowered to lead.”
              </p>

              <h4 className="name">Dr. María Cruz</h4>
              <p className="designation">Principal, EduConnect Hub</p>
            </div>
          </div>
        </section>

        {/* 5th-box */}
        <section className="campus-section">
          <h2 className="campus-heading">Our Modern Campus Facilities</h2>

          <div className="campus-grid">
            <div className="campus-card">
              <img src={advSchool} alt="Advanced Classroom" />
              <h3>Advanced Classrooms</h3>
              <p>Equipped with cutting-edge technology to facilitate interactive and engaging learning experiences.</p>
            </div>

            <div className="campus-card">
              <img src={exLibrary} alt="Extensive Library" />
              <h3>Extensive Library</h3>
              <p>A rich collection of resources and a serene environment conducive to deep learning and research.</p>
            </div>

            <div className="campus-card">
              <img src={scienceLib} alt="Science Laboratories" />
              <h3>Science Laboratories</h3>
              <p>Dedicated labs for physics, chemistry, and biology, fostering hands-on scientific discovery.</p>
            </div>

            <div className="campus-card">
              <img src={compLabs} alt="Computer Labs" />
              <h3>Computer Labs</h3>
              <p>Equipped with high-performance computers and software for programming, design, and digital literacy.</p>
            </div>

            <div className="campus-card">
              <img src={schlFaci} alt="Sports Facilities" />
              <h3>Sports Facilities</h3>
              <p>Indoor and outdoor courts, fields, and a gym to support a wide range of athletic activities.</p>
            </div>

            <div className="campus-card">
              <img src={artandmusic} alt="Art & Music Studios" />
              <h3>Art & Music Studios</h3>
              <p>Creative spaces designed to inspire artistic expression and musical talent.</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default AboutSchool;