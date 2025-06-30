import './Projects.css';

const projects = [
  {
    title: 'Maze-Solving Robot',
    description: 'An autonomous robot designed to navigate and solve mazes using sensor-based algorithms. Built with microcontrollers and programmed to detect walls, make decisions at intersections, and efficiently find the maze exit. Developed as a hands-on project to apply robotics, programming, and problem-solving skills.',
    link: '',
    icon: '🤖',
  },
  {
    title: 'Salon Inventory Management System',
    description: 'A web-based application for tracking salon products, managing stock levels, and generating inventory reports. I handled the backend development as a partial requirement for our Software Design course during my third year of college.',
    link: '',
    icon: '💻',
  },
  {
    title: '8-Bit Computer Project',
    description: 'A collaborative project to build a functional 8-bit computer from scratch. My main focus was on designing and implementing the RAM (Random Access Memory) module, which stores and retrieves data for the CPU. This involved creating address decoding logic, memory read/write operations, and ensuring reliable data storage as part of the complete working system.',
    link: '',
    icon: '🖥️',
  },
  {
    title: 'Landyard Image Identifier',
    description: 'A machine learning project using Roboflow to classify school landyards. The model was trained to distinguish between standard school landyards and organization-specific landyards by analyzing uploaded images, helping automate identification and verification processes.',
    link: '',
    icon: '📷',
  },
  {
    title: 'JK FlipFlop Circuit',
    description: 'A digital electronics project where we designed and simulated a JK flip-flop circuit in Multisim. The circuit was configured to sequentially display the word "BIRTHDAY" using LEDs, demonstrating our understanding of sequential logic, state machines, and digital circuit design.',
    link: '',
    icon: '🔌',
  },
];

function Projects(props) {
  return (
    <section className="Projects section-card" id="projects" {...props}>
      <h2>My Projects</h2>
      <div className="Projects-list">
        {projects.map(project => (
          <div className="Project-card fade-in" key={project.title}>
            <div className="Project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <hr className="Project-divider" />
            <p>{project.description}</p>
            {project.link ? (
              <a className="Project-btn" href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;