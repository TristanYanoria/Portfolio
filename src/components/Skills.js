import './Skills.css';

const skills = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Python', icon: '🐍' },
  { name: 'C++', icon: '💻' },
  { name: 'Logic Circuits', icon: '🔌' },
  { name: 'Data Structures', icon: '📊' },
  { name: 'Algorithms', icon: '🧩' },
  { name: 'HTML & CSS', icon: '🌐' },
  { name: 'Git & GitHub', icon: '🐙' },
  { name: 'Machine Learning', icon: '🤖' },
  { name: 'SQL', icon: '📚' },
  { name: 'Web Development', icon: '🌍' },
];

function Skills(props) {
  return (
    <section className="Skills section-card" id="skills" {...props}>
      <h2>My Skills</h2>
      <ul className="Skills-list">
        {skills.map(skill => (
          <li key={skill.name}>
            <span className="Skills-icon">{skill.icon}</span>
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;