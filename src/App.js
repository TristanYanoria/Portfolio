import './App.css';
import profileImage from './profile.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>
      
      <main className="portfolio-content">
        {/* About Me Section */}
        <section id="about" className="portfolio-section">
          <h2>About Me</h2>
          <div className="about-content">
            <img src={profileImage} alt="My Profile" className="profile-image" />
            <div className="about-text">
              <p>Hello! I'm Tristan Von Ceazar A. Yanoria. I'm passionate about making the most out of everything.</p>
              <p>Here's more about me and what I do...</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="portfolio-section">
          <h2>Education</h2>
          
          <div className="education-item">
            <h3>Primary Education</h3>
            <p className="institution"><u>San Francisco Parish School - 2010-2016</u></p>
            <ul>
              <li>I was always inside the Top 10 Standing with the ranking of Top 6 in class</li>
            </ul>
          </div>
          
          <div className="education-item">
            <h3>Secondary Education</h3>
            <p className="institution"><u>Queen Mary Help of Christians Educational Center - 2016-2017</u></p>
            <ul>
              <li>We were featured dancing for the show umagang kay ganda</li>
              <li>Won 2nd place for sabayang pagbigkas in rizal</li>
            </ul>
            
            <p className="institution"><u>Bernardo F San Juan National High School - 2017-2020</u></p>
            <ul>
              <li>I was always top 8 in our class no matter the subject.</li>
              <li>I was Top 1 in our whole class for the English Subject.</li>
              <li>Won 2nd place in our class dance competition against our whole batch</li>
              <li>One of the high ranking ones in the MLBB Mythical 7</li>
              <li>3rd Place in Spoken Poetry Contest in our School</li>
              <li>Runner Up for Spelling bee Contest</li>
            </ul>
          </div>
          
          <div className="education-item">
            <h3>Upper Secondary Education</h3>
            <p className="institution"><u>Tomas Claudio Colleges - 2020-2022</u></p>
            <ul>
              <li>Online education so lacked in achievements</li>
            </ul>
          </div>
          
          <div className="education-item">
            <h3>Tertiary Education</h3>
            <p className="institution"><u>Technological Institute of the Philippines - 2022-2026</u></p>
            <ul>
              <li>Description of your studies, achievements, etc.</li>
            </ul>
          </div>
        </section>

        <footer className="App-footer">
          <p>Contact me at: <a href="mailto:mtvcyanoria@tip.edu.ph">mtvcyanoria@tip.edu.ph</a></p>
        </footer>
      </main>
    </div>
  );
}

export default App;