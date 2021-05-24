import React from "react";
import styled from "styled-components";
import resume from "../img/about.png";
import PrimaryButtonn from "./PrimaryButtonn";
import { Link } from "react-router-dom";
function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Gabriel Pasquantonio</span>
        </h4>
        <p className="paragraph">
          Developer passionate about simple solutions to difficult problems.
          Enthusiast of agile methods, flexible environments, and continuous
          delivery. Meet new challenges and solve them.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Location</p>
          </div>
          <div className="info">
            <p>: Gabriel Domingues Pasquantonio</p>
            <p>: 27</p>
            <p>: Brazilian </p>
            <p>: Portuguese, Spanish, English, German </p>
            <p>: Sâo Paulo, Brazil</p>
          </div>
        </div>
        <Link
          to="/files/Resume-Gabriel-Pasquantonio.pdf"
          target="_blank"
          download
        >
          <PrimaryButtonn title={"Download Cv"} />
        </Link>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;

  @media screen and (max-width: 1900px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
