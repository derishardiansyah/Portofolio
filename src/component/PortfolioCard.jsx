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
    <Card
      sx={{
        width: 350,
        height: 350,
        display: "flex",
        backgroundColor: isHovered ? "#69b3a2" : "transparent",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <CardActionArea>
        <div style={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="auto"
            width="100%"
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
              }}
            >
              <h2>{alt}</h2>
              <p>{desc}</p>
            </div>
          )}
        </div>
      </CardActionArea>
    </Card>
  );
};

PortfolioCard.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  desc: PropTypes.string,
  onClick: PropTypes.func,
};

export default PortfolioCard;
