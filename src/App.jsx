import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import imgProfile from "./assets/img.png";

const App = () => {
  const [isIntroduceActive, setIsIntroduceActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const introduceSection = document.getElementById("introduce");
      if (introduceSection) {
        const top = introduceSection.getBoundingClientRect().top;
        setIsIntroduceActive(top >= 0 && top < window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScrollIntroduction = () => {
    const introduction = document.getElementById("introduce");
    if (introduction) {
      introduction.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToIntroduction = () => {
    const introduceSection = document.getElementById("introduce");
    if (introduceSection) {
      introduceSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="container">
      {/* Navbar */}
      <div className="containerNavbar">
        <div className="navbarLeft">
          <a className="home">Home</a>
        </div>
        <div className="navbarRight">
          <ul>
            <li
              className={`list ${isIntroduceActive ? "active" : ""}`}
              onClick={() => handleScrollIntroduction()}
            >
              Introduce
            </li>
            <li className="list">Services</li>
            <li className="list">Portfolio</li>
            <li className="list">Contact</li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="contentWrapper">
        <div className="containerContent">
          <a className="nameStyle">Deris Hardiansyah Ismail</a>
          <hr className="line" />
          <ul className="listButton">
            <li className="listSocial">
              <a href="https://www.linkedin.com/in/deris-hardiansyah-ismail-37b27b25a/">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li className="listSocial">
              <a href="https://github.com/derishardiansyah">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="listSocial">
              <a href="mailto:derishardiansyah27@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
          </ul>
          <div className="descriptionProfile">
            <p>
              Welcome to Deris Hardiansyah Ismail <u> homepage</u>.
            </p>
            <p>I am a data practitioners and developer website </p>
          </div>
          <div
            className="arrowDescription"
            onClick={() => handleScrollToIntroduction()}
          >
            <i className="fa fa-arrow-circle-down fa-3x" aria-hidden="true"></i>
          </div>
        </div>

        <div className="containerIntroduce" id="introduce">
          <div className="imageProfile">
            <img
              src={imgProfile}
              width="300px"
              height="300px"
              style={{ borderRadius: "50%" }}
              alt="MyProfile"
            />
          </div>
          <div className="descProfile">
            <p>Hi, I am Deris Hardiansyah Ismail.</p>
            <p>
              I am a recent graduate with programming and database management
              experience, I have worked on diverse projects. My love for
              technology and continuous learning drives my career. I am
              proficient in <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>,{" "}
              <b>Python</b>, <b>MySQL</b>.
            </p>
            <p>
              I am committed to keeping up to date with industry trends and
              welcome future challenges and opportunities.
            </p>
            <div className="socialMedia">
              <a
                href="https://www.instagram.com/derishardiansyah/"
                target="_blank"
                rel="noopener noreferrer"
                className="socialButton"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/drshardiansyahh"
                target="_blank"
                rel="noopener noreferrer"
                className="socialButton"
              >
                Twitter
              </a>
              <a
                href="https://www.facebook.com/derishardiansyah1"
                target="_blank"
                rel="noopener noreferrer"
                className="socialButton"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
