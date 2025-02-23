import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './OngoingProjectCards.css'

const OngoingProjectCard = ({CardData}) => {
    return (
        <div
        className="ongoing-proj-card"
        style={{ backgroundImage: `url(${CardData.image})` }}
      >
        {/* Header Section */}
        <div className="onging-header-proj">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "20px",
              fontWeight: "600",
              color: 'var(---primary-color)'
            }}
          >
            <LocationOnIcon sx={{ fontSize: 25, marginRight: "5px" }} />
            <span>{CardData.location}</span>
          </div>
          <img className="profile" alt="Profile" src={CardData.profile} />
        </div>
  
        {/* Footer Section */}
        <div className="footer-proj">
          <p>{CardData.status}</p>
          <h1>{CardData.title}</h1>
        </div>
      </div>
    );
};

export default OngoingProjectCard;
