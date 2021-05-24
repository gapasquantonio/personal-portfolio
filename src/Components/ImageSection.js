import React from "react";
import styled from "styled-components";
import resume from "../img/about.png";
import PrimaryButtonn from "./PrimaryButtonn";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
function ImageSection() {
  const { t } = useTranslation();
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" />
      </div>
      <div className="right-content">
        <h4>
        {t('About2')}<span>Gabriel Pasquantonio</span>
        </h4>
        <p className="paragraph">
        {t('About3')}
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>{t('About4')}</p>
            <p>{t('About5')}</p>
            <p>{t('About6')} </p>
            <p>{t('About7')} </p>
            <p>{t('About8')}</p>
          </div>
          <div className="info">
            <p>: Gabriel Domingues Pasquantonio</p>
            <p>: 27</p>
            <p>: {t('About9')}</p>
            <p>: {t('About10')} </p>
            <p>: {t('About11')}</p>
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
