import './AboutMe.css';

function AboutMe(props) {
  return (
    <section className="AboutMe section-card" id="about" {...props}>
      <h2>About Me</h2>
      <p>

As a student of computer engineering, I have a strong desire to construct and break things correctly. I like working on both software and hardware projects, from developing backend systems to soldering circuits. Whether it's system design, coding, or wiring, I like real and hands-on projects that make concepts come to life. I've built simple robots using microcontrollers like Arduino and Raspberry Pi, often combining sensors, motors, and code to create functional prototypes. I enjoy DIY electronics designing custom PCBs, 3D printing enclosures, and integrating mechanical parts because they let me explore the full stack of engineering, from raw components to working systems.

Lately, I've been diving into data science, exploring how data can drive meaningful insights and decisions. I've been working on projects that involve cleaning datasets, analyzing trends, and building predictive models using tools like Python, Pandas, and scikit-learn. I'm fascinated by how data can be used to solve real-world problems and inform smarter systems. This elective is an exciting opportunity for me to further develop my analytical thinking and apply it to practical, impactful scenarios.


      </p>
    </section>
  );
}

export default AboutMe;