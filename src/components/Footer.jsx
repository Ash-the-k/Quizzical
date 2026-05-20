import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="app-footer">
      <span>
        Built by{' '}
        <a
          href="https://github.com/Ash-the-k"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ashlesh
        </a>
      </span>

      <a
        href="https://github.com/Ash-the-k/Quizzical"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View project repository"
        title="GitHub Repository"
        className="footer-icon-link"
      >
        <FaGithub />
      </a>

      <span className="footer-separator">|</span>

      <a
        href="https://www.linkedin.com/in/ashlesh-kanchan/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Ashlesh's LinkedIn profile"
        title="LinkedIn"
        className="footer-icon-link"
      >
        <FaLinkedin />
      </a>
    </footer>
  );
}

export default Footer;