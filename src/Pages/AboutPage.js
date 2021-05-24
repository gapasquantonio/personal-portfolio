import React from 'react'
import styled from 'styled-components';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import ServicesSection from '../Components/ServicesSection';
import {MainLayout} from '../styles/Layouts';
import { useTranslation } from 'react-i18next';
function AboutPage() {
    const { t } = useTranslation();
    return (
        <MainLayout>
              <AboutStyled >
              <Title title={t('About1')} span={'About Me'} />
              <ImageSection />
              <ServicesSection />
              </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage
