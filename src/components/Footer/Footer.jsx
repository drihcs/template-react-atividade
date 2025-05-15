import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer" id="contact">
    <div className="footer-content">
      <div className="footer-section">
        <h3>About Us</h3>
        <p>Simple React application with separate component files and CSS styling.</p>
      </div>
      <div className="footer-section">
        <h3>Contact</h3>
        <p>Email: info@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="#" className="social-link">
            Facebook
          </a>
          <a href="#" className="social-link">
            Twitter
          </a>
          <a href="#" className="social-link">
            Instagram
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 React App. All rights reserved.</p>
    </div>
  </footer>
    )
}