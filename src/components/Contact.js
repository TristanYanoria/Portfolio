import './Contact.css';

function Contact(props) {
  return (
    <section className="Contact section-card" id="contact" {...props}>
      <h2>Contact</h2>
      <ul className="Contact-list">
        <li>
          <a href="mailto:czar132003.yanoria@gmail.com" target="_blank" rel="noopener noreferrer">
            {/* Gmail SVG */}
            <svg width="20" height="20" viewBox="0 0 48 48" style={{verticalAlign: 'middle', marginRight: 6}} xmlns="http://www.w3.org/2000/svg">
              <path fill="#EA4335" d="M24 27.6L6.4 15.2V38c0 1.1.9 2 2 2h31.2c1.1 0 2-.9 2-2V15.2L24 27.6z"/>
              <path fill="#34A853" d="M42.4 10.4l-6.8 5.1V38h4.8c1.1 0 2-.9 2-2V10.4z"/>
              <path fill="#FBBC05" d="M5.6 10.4V36c0 1.1.9 2 2 2h4.8V15.5l-6.8-5.1z"/>
              <path fill="#4285F4" d="M42.4 10.4c0-1.1-.9-2-2-2H7.6c-1.1 0-2 .9-2 2l18.4 13.7L42.4 10.4z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
            czar132003.yanoria@gmail.com
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tristan-von-ceazar-yanoria-57b133302/" target="_blank" rel="noopener noreferrer">
            {/* LinkedIn SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" style={{verticalAlign: 'middle', marginRight: 6}} fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/>
            </svg>
            LinkedIn
          </a>
        </li>
        <li>
          <a href="http://github.com/TristanYanoria" target="_blank" rel="noopener noreferrer">
            {/* GitHub SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" style={{verticalAlign: 'middle', marginRight: 6}} fill="#fff" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.99.01 1.99.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
            </svg>
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;