import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';
import { useTranslation } from 'react-i18next';
function Resume() {
    const { t } = useTranslation();
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={t('ResumeItem')} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={t('ResumeItem1')} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'Mar 2018 - Mar 2021'} 
                        title={'Tax Staff COE, Indirect Tax Compliance, United States'}
                        subTitle={'IBM'}
                        text={t('ResumeItem2')} 
                    />
                    <ResumeItem 
                        year={'Apr 2015 - Feb 2018'} 
                        title={'Tax Staff, Controversy and Litigation Brazil'}
                        subTitle={'IBM'}
                        text={t('ResumeItem3')} 
                    />
                    
                    
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={t('ResumeItem4')} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'Mar 2021 - Aug 2021'} 
                        title={"Full Stack Web Development Bootcamp"}
                        subTitle={"Henry College"}
                        text={t('ResumeItem5')} 
                    />
                    <ResumeItem 
                        year={'Apr 2020 - Sep 2020'} 
                        title={'Fullstack Web Development'}
                        subTitle={'Digital House Buenos Aires'}
                        text={t('ResumeItem6')} 
                    />
                    <ResumeItem 
                        year={'Jan 2010 - Jan 2016'} 
                        title={t('ResumeItem7')}
                        subTitle={'Universidade Paulista'}
                        
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume