import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'Mar 2018 - Mar 2021'} 
                        title={'Tax Staff COE, Indirect Tax Compliance, United States'}
                        subTitle={'IBM'}
                        text={'Senior Tax Analyst in the Indirect Tax Process for Canada and United States. Canada Sales Tax Compliance for IBM Canada and its subsidiaries.US Sales Tax Compliance for IBM CORP and IGF LLC. Sales Tax Reconciliation, reporting, filing and payment of different US States. Reports with Tableau and Power BI'} 
                    />
                    <ResumeItem 
                        year={'Apr 2015 - Feb 2018'} 
                        title={'Tax Staff, Controversy and Litigation Brazil'}
                        subTitle={'IBM'}
                        text={'Tax Specialist in consultancy and compliance on direct taxes (Income Tax and Social Contribution), on BR GAAP, US GAAP and IFRS, international tax reporting (tax package), Transfer Pricing, internal consulting and monitoring of the tax inspections and assessments.Direct Tax planning.Coordinate daily meetings.'} 
                    />
                    
                    
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'Mar 2021 - Aug 2021'} 
                        title={'Full Stack Web Development Bootcamp'}
                        subTitle={'Henry College'}
                        text={'Henry is a 16-week, full-time, live remote Full Stack Web Developer bootcamp. In the Full Stack Web Developer bootcamp, students will learn through code review, pair programming, lecture, and individual homework assignments. Students will have access to 1:1 instructor support for any questions or areas of confusion. Henry offers "Labs" where students build real world projects prior to graduation, and "X" where students continue learning through workshops, talks, etc., after graduation.'} 
                    />
                    <ResumeItem 
                        year={'Apr 2020 - Sep 2020'} 
                        title={'Fullstack Web Development'}
                        subTitle={'Digital House Buenos Aires'}
                        text={'This program will teach you everything you need to develop web applications from start to finish as a professional programmer. Learn how to create sites and solid, functional and attractive web applications incorporating the latest methodologies. The Full Stack Development Course covers front and back end development in addition to soft skills including team work and agile methodologies. To graduate we had to develop an e-commerce website from scratch. Note: Classes are in Spanish'} 
                    />
                    <ResumeItem 
                        year={'Jan 2010 - Jan 2016'} 
                        title={'Bachelor  degree, Law'}
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