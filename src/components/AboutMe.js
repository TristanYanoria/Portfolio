import './AboutMe.css';

function AboutMe(props) {
  return (
    <section className="AboutMe section-card" id="about" {...props}>
      <h2>About Me</h2>
      <div className="aboutme-content">
        <p className="aboutme-summary">
          I am a passionate Computer Engineering student with a strong foundation in both software and hardware development. My experience spans backend systems, embedded electronics, and hands-on prototyping, allowing me to bridge the gap between code and circuitry. I thrive on building robust solutions, whether it’s designing Frontend Designs, soldering custom PCBs, or integrating sensors and actuators into functional prototypes.
        </p>
        <ul className="aboutme-list">
          <li>Experienced in microcontroller projects (Arduino, Raspberry Pi) and DIY electronics, including PCB design and 3D-printed enclosures.</li>
          <li>Proficient in Python, C++, and JavaScript, with a focus on system design and automation.</li>
          <li>Skilled in data science: data cleaning, trend analysis, and predictive modeling using Python, Pandas, and scikit-learn.</li>
          <li>Enjoys full-stack engineering, from raw components to complete systems.</li>
          <li>Strong analytical thinker, eager to apply technical knowledge to solve real-world problems and deliver impactful results.</li>
        </ul>
        <p className="aboutme-summary">
          I am always eager to learn, collaborate, and take on new challenges that push the boundaries of technology and innovation.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;