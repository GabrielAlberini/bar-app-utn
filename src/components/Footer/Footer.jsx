import "@fortawesome/fontawesome-free/css/all.min.css";

export const Footer = () => {
  return (
    <footer className="footer has-background-dark">
      <div className="content has-text-centered has-text-white">
        <p>Bar App - Pizza Restaurant</p>
        <div className="mt-3">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon is-medium has-text-white"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon is-medium has-text-white"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon is-medium has-text-white"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="mt-3">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
