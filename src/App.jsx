import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import imgProfile from "./assets/img.png";
import premierLeague from "./assets/premier.png";
import saham from "./assets/saham.png";
import table from "./assets/table.png";
import sf1 from "./assets/sf1.png";
import sf2 from "./assets/sf2.png";
import sf3 from "./assets/sf3.png";
import sf4 from "./assets/sf4.png";
import clubDetail from "./assets/clubDetail.png";
import news1 from "./assets/news1.png";
import news2 from "./assets/news2.png";
import players1 from "./assets/players1.png";
import players2 from "./assets/players2.png";
import players3 from "./assets/players3.png";
import players4 from "./assets/players4.png";
import compareStockTraining from "./assets/CompareStockTraining.png";
import compareStockTesting from "./assets/CompareStockTesting.png";
import result from "./assets/result.png";
import imgDeployment from "./assets/deployment.png";
import imgIcon from "/astronot.svg";
import modalClose from "./assets/close.png";
import PortfolioCard from "./component/PortfolioCard";
import cv from "./assets/file/Resume.pdf";

const App = () => {
  const [isIntroduceActive, setIsIntroduceActive] = useState(false);
  const [isExperienceActive, setIsExperienceActive] = useState(false);
  const [isPortfolioActive, setIsPortfolioActive] = useState(false);
  const [isContactActive, setIsContactActive] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Show All");
  const [portfolioItems, setPortfolioItems] = useState([
    {
      desc: "A premier league football club website that presents several features including: club information and standings table",
      img: premierLeague,
      link: "https://github.com/derishardiansyah/Data-Science",
      class: "developer",
      nameProject: "Club Information Portal and Standings",
      descProject:
        "This project is a web application that provides information about premier league football clubs and their standings. The application is built using HTML, CSS, and JavaScript, and it is deployed on a web server using Node.js and Express.js.",
    },
    {
      desc: "Netflix stock price visualisation using long short term memory algorithm",
      img: saham,
      link: "https://github.com/derishardiansyah/Data-Science",
      class: "dataScience",
      nameProject: "Stock Forecast",
    },
  ]);

  const handleModalOpen = (index) => {
    setModalIndex(index);
    document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setModalIndex(null);
    document.body.style.overflow = "auto";
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredPortfolioItems =
    selectedCategory === "Show All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.class === selectedCategory);

  useEffect(() => {
    const handleScroll = () => {
      const introduceSection = document.getElementById("introduce");
      if (introduceSection) {
        const top = introduceSection.getBoundingClientRect().top;
        setIsIntroduceActive(top >= 0 && top < window.innerHeight);
      }

      const experienceSection = document.getElementById("experience");
      if (experienceSection) {
        const top = experienceSection.getBoundingClientRect().top;
        setIsExperienceActive(top >= 0 && top < window.innerHeight);
      }

      const portfolioSection = document.getElementById("portfolio");
      if (portfolioSection) {
        const top = portfolioSection.getBoundingClientRect().top;
        setIsPortfolioActive(top >= 0 && top < window.innerHeight);
      }

      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const top = contactSection.getBoundingClientRect().top;
        setIsContactActive(top >= 0 && top < window.innerHeight);
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

  const handleScrollToExperience = () => {
    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToIntroduction = () => {
    const introduceSection = document.getElementById("introduce");
    if (introduceSection) {
      introduceSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const experiences = [
    {
      year: "2017",
      department: "Network Engineer",
      company: "PT. Permata Sejahtera Buana",
      classRound: "rounded",
      classYear: "yearExperience",
    },
    {
      year: "2021",
      department: "Web Developer",
      company: "Direktorat PKK, Ditjen KSDAE - KemenLHK",
      classRound: "roundedSecond",
      classYear: "yearExperienceSecond",
    },
    {
      year: "2023",
      department: "Full Stack Developer",
      company: "PT. Phincon",
      classRound: "roundedThird",
      classYear: "yearExperienceThird",
    },
  ];

  return (
    <div className="container">
      {/* Navbar */}
      <div className="containerNavbar">
        <div className="navbarLeft">
          <a className="home" onClick={() => handleScrollToHome()}>
            Home
          </a>
        </div>
        <div className="navbarRight">
          <ul>
            <li
              className={`list ${isIntroduceActive ? "active" : ""}`}
              onClick={() => handleScrollIntroduction()}
            >
              Introduce
            </li>
            <li
              className={`list ${isExperienceActive ? "active" : ""}`}
              onClick={() => handleScrollToExperience()}
            >
              Experiences
            </li>
            <li
              className={`list ${isPortfolioActive ? "active" : ""}`}
              onClick={() => handleScrollToPortfolio()}
            >
              Portfolio
            </li>
            <li
              className={`list ${isContactActive ? "active" : ""}`}
              onClick={() => handleScrollToContact()}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="contentWrapper" id="home">
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
              experience, I have worked on diverse Projects. My love for
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
              <a
                href={cv}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="socialButton"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        <div className="experience" id="experience">
          {experiences.map((exp, index) => (
            <div className="experienceList" key={index}>
              <div className="nameExperience">
                <span>{exp.department}</span>
              </div>
              <hr className="lineExperience" />
              <div className="nameExperience">
                <span>{exp.company}</span>
              </div>
              <div className={exp.classRound}></div>
              <div className={exp.classYear}>
                <span>{exp.year}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="portfolio" id="portfolio">
          <div className="namePortfolio">
            <h1>Portfolio</h1>
          </div>
          <span className="descPortfolio">
            A glimpse of the Projects I've worked on
          </span>
          <div className="menuPortfolio">
            <a
              className={`portfolioButton ${
                selectedCategory === "Show All" ? "active" : ""
              }`}
              onClick={() => handleCategorySelect("Show All")}
            >
              Show All
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="portfolioButton"
            >
              Data Mining
            </a>
            <a
              className={`portfolioButton ${
                selectedCategory === "dataScience" ? "active" : ""
              }`}
              onClick={() => handleCategorySelect("dataScience")}
            >
              Data Science
            </a>
            <a
              className={`portfolioButton ${
                selectedCategory === "developer" ? "active" : ""
              }`}
              onClick={() => handleCategorySelect("developer")}
            >
              Website
            </a>
          </div>
          <div className="Project">
            <div className="cardProject">
              {filteredPortfolioItems.map((item, index) => (
                <PortfolioCard
                  key={index}
                  img={item.img}
                  alt={item.nameProject}
                  desc={item.desc}
                  onClick={() => handleModalOpen(index)}
                />
              ))}
            </div>

            {modalIndex !== null && (
              <div className="modalOverlay">
                <div className="modalBackground">
                  <div className="containerModal">
                    <div className="modalClose">
                      <img
                        src={modalClose}
                        onClick={handleModalClose}
                        className="styleClose"
                      />
                    </div>
                    <div className="modalHeader">
                      <img src={portfolioItems[modalIndex].img} />
                    </div>
                    <div className="contentHeader">
                      <p className="headerProject">
                        {portfolioItems[modalIndex].nameProject}
                      </p>
                    </div>
                    <div className="modalBody">
                      {modalIndex === 0 && (
                        <div className="headerDescBody">
                          <div className="headerText">Feature</div>
                          <hr />
                          <ol>
                            <li>Search Function</li>
                            <li>Club Detail</li>
                            <li>Standings</li>
                            <li>News</li>
                            <li>Players</li>
                          </ol>
                          <div className="headerText">Page Home</div>
                          <hr />
                          <p>
                            On the main page there are several features for
                            guests and users. Guests can only view club details
                            and the standings table. To view news and players,
                            you must first register and select your favorite
                            team. Users can view all available features. Only
                            premier league clubs competing in 2023 - 2024 are
                            listed here.
                          </p>
                          <img src={premierLeague} alt="Home Premier League" />
                          <p>
                            The standings table is done in real time by calling
                            the API from a website. But each day is limited to
                            100 times. Specifically in this table can see the
                            results of the match in the previous year's
                            competition.
                          </p>
                          <img src={table} alt="Table Premier League" />
                          <div className="headerText">Search Function</div>
                          <hr />
                          <p>
                            The use of the search function can be done based on
                            : Team Name, Year of Establishment, Stadium, City
                            according to the description on the club detail
                            page.
                          </p>
                          <img src={sf1} alt="Search Function with club name" />
                          <img
                            src={sf2}
                            alt="Search Function with founded club"
                          />
                          <img src={sf3} alt="Search Function with city club" />
                          <img
                            src={sf4}
                            alt="Search Function with founded club"
                          />
                          <div className="headerText">Club Detail</div>
                          <hr />
                          <p>
                            On this page you can see the club details as a
                            whole. Starting from the name, year of
                            establishment, stadium and city of the club. To see
                            it, go to the main page and click on the club you
                            want to see.
                          </p>
                          <img src={clubDetail} alt="Club Detail" />
                          <div className="headerText">News</div>
                          <hr />
                          <p>
                            To view the news page. Users must register first and
                            verify via email. If the user only registers but
                            does not verify, the account cannot be used to view
                            the news. The news page will match the club selected
                            during registration.
                          </p>
                          <img src={news1} alt="News Club" />
                          <img src={news2} alt="News Club" />
                          <div className="headerText">Players</div>
                          <hr />
                          <p>
                            To view the players page. Users must register first
                            and verify via email. If the user only registers but
                            does not verify, the account cannot be used to view
                            players. The player page will correspond to the club
                            selected during registration. Starting from the
                            position of goalkeeper, defender, midfielder and
                            forward.
                          </p>
                          <img src={players1} alt="Players Club" />
                          <img src={players2} alt="Players Club" />
                          <img src={players3} alt="Players Club" />
                          <img src={players4} alt="Players Club" />
                        </div>
                      )}
                      {modalIndex === 1 && (
                        <div className="headerDescBody">
                          <div className="headerText">Parameters</div>
                          <hr />
                          <ol>
                            <li>Pola Time Series : 1, 2, 3, 4, 5</li>
                            <li>Max Epoch : 25, 50, 100, 500, 1000</li>
                            <li>Neuron Hidden : 5, 10, 15, 25, 30</li>
                            <li>Batch Size : 4, 16, 32, 64, 126</li>
                          </ol>
                          <div className="headerText">Comparison Graph</div>
                          <hr />
                          <p>
                            It can be seen in the graph for training data, where
                            the predicted data values move in the same direction
                            or follow the actual data, indicating that the
                            resulting values are quite good.
                          </p>
                          <img
                            src={compareStockTraining}
                            alt="Compare Stock Training"
                          />
                          <p>
                            It can be seen in the graph for data testing, where
                            the predicted data values move in the same direction
                            or follow the actual data, but in some periods there
                            are very small differences so that these differences
                            can be calculated using the evaluation model used.
                          </p>
                          <img
                            src={compareStockTesting}
                            alt="Compare Stock Testing"
                          />
                          <div className="headerText">Forecasting</div>
                          <hr />
                          <p>
                            The results of the forecast for the next 90 days
                            explain that Netflix shares will experience a pretty
                            good increase seen from a straight line that points
                            up. This is a positive sign for Netflix to prepare
                            concrete steps to prepare new strategies to attract
                            customers.
                          </p>
                          <img src={result} alt="Result Forecasting" />
                          <div className="headerText">Deployment</div>
                          <hr />
                          <p>
                            This web application is deployed using Streamlit, a
                            powerful framework for building and sharing
                            data-centric web apps. Streamlit simplifies the
                            process of creating interactive web applications
                            from Python scripts. By leveraging Streamlit, we've
                            crafted a user-friendly interface that allows
                            seamless exploration of our project's insights and
                            functionalities. There are several tools that can be
                            changed in appearance, including: Train and Test
                            values for RMSE and MAPE. Stock code and date period
                            used.
                          </p>
                          <img src={imgDeployment} alt="Deployment" />

                          <h3>URL Deployment Link</h3>
                          <p>
                            You can access the deployed website through the
                            following URL:{" "}
                            <a href="https://stock-forecasting.streamlit.app/">
                              https://stock-forecasting.streamlit.app/
                            </a>
                          </p>
                        </div>
                      )}
                      {modalIndex === 2 && (
                        <div className="headerDescBody">
                          <div className="headerText">Feature</div>
                          <hr />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="contact" id="contact">
          <div className="nameContact">
            <h1>Contact</h1>
          </div>
          <div className="descContact">
            <span>
              Feel free to contact me with any questions. If you want to follow
              my work, contact me on{" "}
              <a href="https://www.linkedin.com/in/deris-hardiansyah-ismail-37b27b25a/">
                LinkedIn
              </a>
              . Otherwise, send me a message via my social media.
            </span>
          </div>
          <div className="containerSocialMediaContact">
            <div className="socialMedia">
              <a
                href="https://www.linkedin.com/in/deris-hardiansyah-ismail-37b27b25a/"
                target="_blank"
                rel="noopener noreferrer"
                className="socialButton"
              >
                LinkedIn
              </a>
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
              <a
                href="https://github.com/derishardiansyah"
                target="_blank"
                rel="noopener noreferrer"
                className="socialButton"
              >
                Github
              </a>
              <a
                href="mailto:derishardiansyah27@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="socialButton"
              >
                Mail
              </a>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="nameFooter">
            <span>Copyright © 2024 Deris Hardiansyah Ismail</span>
          </div>
          <div className="footerImg">
            <img src={imgIcon} alt="Astronot" />
          </div>
          <div className="termsFooter">
            <a>Privacy Policy</a> <a>Terms of Use</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
