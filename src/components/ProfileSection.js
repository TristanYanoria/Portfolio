import React, { useRef, useEffect, useState } from 'react';
import './ProfileSection.css';
import profilePic from '../Profile_Picture.jpg';

function ProfileSection(props) {
  const cardRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`profile-card enhanced-profile-card fade-in${isInView ? ' profile-card-hover' : ''}`}
      ref={cardRef}
      {...props}
    >
      <div className="profile-image enhanced-profile-image">
        <img
          src={profilePic}
          alt="Tristan Von Ceazar Apilado Yanoria"
        />
      </div>
      <div className="profile-content">
        <h1 className="name">Tristan Von Ceazar Apilado Yanoria</h1>
        <p className="profile-title">Aspiring Computer Engineer <span className="profile-dot">•</span> Data Science &amp; Frontend Enthusiast</p>
        <p className="profile-detail">Bachelor of Science in Computer Engineering</p>
        <p className="profile-detail">Technological Institute of the Philippines - Manila</p>
      </div>
    </section>
  );
}

export default ProfileSection;
