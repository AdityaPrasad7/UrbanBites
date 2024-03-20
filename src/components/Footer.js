import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            {/* Your footer logo or content */}
          </Link>
          <h5><span className="text-muted mx-3 mt-2">© 2023 UrbanBites, Inc</span></h5>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex me-4 mx-2 mt-2">
          <li className="ms-3">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted">
            <FontAwesomeIcon icon={faFacebook} size="lg" color="#2B7A0B" />
            </a>
          </li>
          <li className="ms-3">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted">
              <FontAwesomeIcon icon={faInstagram} size="lg" color='#2B7A0B' />
            </a>
          </li>
          <li className="ms-3">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted">
              <FontAwesomeIcon icon={faLinkedin} size="lg" color='#2B7A0B'/>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
