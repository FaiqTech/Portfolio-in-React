import React from "react";
import PersonInfo from "../personInfo/PersonInfo";
import ContactButton from "../contactButton/ContactButton";
import Icon from "../icon/Icon";
import RiyadImg from "../../assets/img/man.jpeg";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-left">
        <PersonInfo />
        <ContactButton />
        <div className="icon-container">
          <Icon iconName="icon1" />
          <Icon iconName="icon2" />
          <Icon iconName="icon3" />
        </div>
      </div>
      <div className="portfolio-right">
        <img src={RiyadImg} alt="Riyad" className="person-photo" />
      </div>
    </div>
  );
}

export default Portfolio;
