import React, { useState } from 'react';
import './Education.css';

const education = [
  {
    title: 'San Francisco Parish School',
    description: 'Primary Education (2010–2016)\nI was always inside the Top 10 Standing with the ranking of Top 6 in class.',
    date: '2010–2016',
    link: '',
    category: 'Primary',
    achievements: [
      'Top 6 in class',
      'Consistently in Top 10 Standing',
    ],
  },
  {
    title: 'Queen Mary Help of Christians Educational Center',
    description: 'Secondary Education (2016–2017)',
    date: '2016–2017',
    link: '',
    category: 'Secondary',
    achievements: [
      'Featured dancing for the show Umagang Kay Ganda',
      '2nd place for Sabayang Pagbigkas in Rizal',
    ],
  },
  {
    title: 'Bernardo F. San Juan National High School',
    description: 'Secondary Education (2017–2020)',
    date: '2017–2020',
    link: '',
    category: 'Secondary',
    achievements: [
      'Always Top 8 in class',
      'Top 1 in English Subject',
      '2nd place in class dance competition',
      'High-ranking member in MLBB Mythical 7',
      '3rd Place in Spoken Poetry Contest',
      'Runner-up for Spelling Bee Contest',
    ],
  },
  {
    title: 'Tomas Claudio Colleges',
    description: 'Upper Secondary Education (2020–2022)',
    date: '2020–2022',
    link: '',
    category: 'Upper Secondary',
    achievements: [
      'Online education, so lacked in achievements.',
    ],
  },
  {
    title: 'Technological Institute of the Philippines',
    description: 'Tertiary Education (2022–2026)',
    date: '2022–2026',
    link: '',
    category: 'Tertiary',
    achievements: [
      'Description of your studies, achievements, etc.',
    ],
  },
];

function groupByCategory(items) {
  return items.reduce((acc, item) => {
    const cat = item.category || 'Other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});
}

function Education(props) {
  const COLUMNS = 3;
  const ROWS = 2;
  const INITIAL_COUNT = COLUMNS * ROWS;

  const grouped = groupByCategory(education);
  const categories = Object.keys(grouped);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState({});
  const [showAchievements, setShowAchievements] = useState({});

  const handleToggle = (cat) => {
    setShowAll((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  const handleAchievementsToggle = (school) => {
    setShowAchievements((prev) => ({ ...prev, [school]: !prev[school] }));
  };

  const categoriesToShow =
    selectedCategory === 'All' ? categories : [selectedCategory];

  return (
    <section className="Achievements section-card" id="education" {...props}>
      <h2>Education</h2>
      {/* Centered Navbar */}
      <div className="Achievements-navbar">
        <button
          className={`category-btn${selectedCategory === 'All' ? ' active' : ''}`}
          onClick={() => setSelectedCategory('All')}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn${selectedCategory === cat ? ' active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Category Sections */}
      {categoriesToShow.map((category) => {
        const items = grouped[category];
        const isAll = showAll[category];
        const visible = isAll ? items : items.slice(0, INITIAL_COUNT);
        return (
          <div key={category} style={{ marginBottom: '2em' }}>
            <h3 style={{ margin: '1em 0 0.5em 0', textAlign: 'center' }}>{category}</h3>
            <ul className="Achievements-list">
              {visible.map((edu, idx) => (
                <li key={idx} className="Achievement-card">
                  <div>
                    <strong className="Achievement-title">{edu.title}</strong>
                    <hr className="Achievement-divider" />
                    <span>{edu.description}</span>
                    <br />
                    <span style={{ fontSize: '0.95em', color: '#bbb' }}>{edu.date}</span>
                  </div>
                  <button
                    className="see-more-btn"
                    style={{
                      background: '#FFCAD4',
                      color: '#9D8189',
                      border: 'none',
                      borderRadius: '5px',
                      padding: '6px 14px',
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontSize: '0.95em',
                      marginTop: '10px',
                    }}
                    onClick={() => handleAchievementsToggle(edu.title)}
                  >
                    {showAchievements[edu.title] ? 'Hide Achievements' : 'Show Achievements'}
                  </button>
                  {showAchievements[edu.title] && edu.achievements && edu.achievements.length > 0 && (
                    <ul style={{ marginTop: '10px', marginLeft: '18px', color: '#FFCAD4', fontSize: '0.98em' }}>
                      {edu.achievements.map((ach, i) => (
                        <li key={i} style={{ listStyle: 'disc', marginBottom: '4px' }}>{ach}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            {items.length > INITIAL_COUNT && (
              <div style={{ textAlign: 'center', marginTop: '18px' }}>
                <button
                  className="see-more-btn"
                  onClick={() => handleToggle(category)}
                  style={{
                    background: '#61dafb',
                    color: '#222',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '8px 18px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '1em',
                  }}
                >
                  {isAll ? 'See Less' : 'See More'}
                </button>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Education;
