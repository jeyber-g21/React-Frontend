function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Articles.PRO</h2>
          <p>Get inspired, create and surprise</p>
        </div>

        <div className="footer-links">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="mailto:tuemail@gmail.com">📧 gomezjeyber@gmail.com</a>
            </li>
            <li>
              <a href="tel:+573001112233">📱 +57 312 521 0895</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jeyber-adrian-gomez-g/"
                target="_blank"
              >
                💼 https://www.linkedin.com/in/jeyber-adrian-gomez-g/
              </a>
            </li>
            <li>
              <a href="https://github.com/jeyber-g21" target="_blank">
                💻 https://github.com/jeyber-g21
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-extra">
          <h3>About me</h3>
          <p>
            Full-stack developer with experience in Angular,Vuejs, React,
            Node.js, Python/Django and databases. Looking for new opportunities
            for professional growth. 🚀
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Jeyber Adrian Gomez Garcia - Todos los
          derechos reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;
