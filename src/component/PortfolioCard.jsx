import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const PortfolioCard = ({ img, alt, desc, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="portfolioCard"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Card
        sx={{
          maxWidth: 350,
          backgroundColor: isHovered ? "#69b3a2" : "transparent",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            maxWidth="100%"
            image={img}
            alt={alt}
            sx={{
              opacity: isHovered ? 0.2 : 1,
            }}
          />
          {isHovered && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 20,
                right: 20,
                zIndex: 999,
                color: "white",
                padding: "10px",
              }}
            >
              <h2 style={{ marginTop: "60px" }}>{alt}</h2>
              <p style={{ marginTop: "50px", fontSize: "16px" }}>{desc}</p>
            </div>
          )}
        </CardActionArea>
      </Card>
    </div>
  );
};

PortfolioCard.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  desc: PropTypes.string,
  onClick: PropTypes.func,
};

export default PortfolioCard;
