import "./App.css";

const App = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <div className="containerNavbar">
        <div className="navbarLeft">
          <a className="home">Home</a>
        </div>
        <div className="navbarRight">
          <ul>
            <li className="list">Introduce</li>
            <li className="list">Services</li>
            <li className="list">Portfolio</li>
            <li className="list">Contact</li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="containerContent">
        <a className="nameStyle">Deris Hardiansyah Ismail</a>
        <hr className="line" />
        <ul className="listButton">
          <li className="listSocial">
            <a href="https://www.linkedin.com/in/deris-hardiansyah-ismail-37b27b25a/">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li className="listSocial">
            <a href="https://github.com/derishardiansyah">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li className="listSocial">
            <a href="mailto:derishardiansyah27@gmail.com">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <div className="descriptionProfile">
          <p>
            Welcome to Deris Hardiansyah Ismail <u> homepage</u>.
          </p>
          <p>I`m a data practitioners and developer website </p>
        </div>
      </div>
    </div>
  );
};

export default App;
