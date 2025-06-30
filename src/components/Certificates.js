import './Certificates.css';

const certificates = [
  {
    title: 'EF SET English Certificate 67/100 (C1 Advanced)',
    issuer: 'EF SET',
    date: 'April 2025',
    link: 'https://cert.efset.org/qEWyD8',
  },
  {
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'December 2024',
    link: 'https://www.credly.com/badges/2df2d5a3-ca4e-4896-b416-fefab4a5299b',
  },
  {
    title: 'Deans Lister',
    issuer: 'Technological Institute of the Philippines',
    date: 'September 2023',
    link: 'https://app.diplomasafe.com/en-US/certificates/dc78b54762d0ccb488540dd7ab910d6e35f2b7c52',
  },
  // Add more certificates as needed
];

// Helper to parse "Month YYYY" into a Date object
function parseMonthYear(str) {
  const date = new Date(str);
  if (!isNaN(date)) return date;
  const [month, year] = str.split(' ');
  return new Date(`${month} 1, ${year}`);
}

function Certificates(props) {
  // Sort by date descending
  const sortedCertificates = [...certificates].sort(
    (a, b) => parseMonthYear(b.date) - parseMonthYear(a.date)
  );

  return (
    <section className="Certificates section-card" id="certificates" {...props}>
      <h2>Certificates</h2>
      <ul className="Certificates-list">
        {sortedCertificates.map((cert, idx) => (
          <li key={idx} className="Certificate-card">
            <div>
              <strong>{cert.title}</strong>
              <hr className="Certificate-divider" />
              <span>{cert.issuer}</span> &middot; <span>{cert.date}</span>
            </div>
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                View
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certificates;