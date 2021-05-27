import React from "react";
import styled from "styled-components";
//import GmailIcon from "@material-ui/icons/Gmail";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Particle from "../Components/Particle";
import { useTranslation } from 'react-i18next';




function HomePage() {
  const { t } = useTranslation();

  
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
        {t('Home1')} <span>Gabriel Pasquantonio </span>
        </h1>
        <p>
        {t('Home2')}
        </p>
        <div className="icons">
          <a href="https://api.whatsapp.com/send?phone=5513981109924&text=Hello%20Gabriel%2C%20How%20are%20you%3F%20Just%20got%20your%20number%20from%20your%20portfolio!!" className="icon i-whatsapp" target="_blank">
            <WhatsAppIcon />
          </a>
          <a href="https://github.com/gabrielpasquantonio" className="icon i-github" target="_blank">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/gabrielpasquantonio/" className="icon i-linkedin" target="_blank">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
     width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-linkedin{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
