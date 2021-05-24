import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';
import { useTranslation } from 'react-i18next';

function Skills() {
    const { t } = useTranslation();
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                             title={'REACT JS'}
                             width={'75%'}
                             text={'75%'}
                        />
                        <ProgressBar 
                            title={'PYTHON'}
                            width={'20%'}
                            text={'20%'}
                        />
                        <ProgressBar 
                            title={'FIREBASE'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                           title={'NODE JS'}
                           width={'65%'}
                           text={'65%'}
                        />
                         <ProgressBar 
                            title={'GIT'}
                            width={'80%'}
                            text={'80%'}
                        />
                    </div>
                    
                </InnerLayout>
                <Title title={t('Skill')} span={'languages'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={t('Skill1')}
                            width={'100%'}
                            text={'100%'}
                        />
                        <ProgressBar 
                            title={t('Skill2')}
                            width={'99%'}
                            text={'99%'}
                        />
                        <ProgressBar 
                            title={t('Skill3')}
                            width={'95%'}
                            text={'95%'}
                        />
                        <ProgressBar 
                             title={t('Skill4')}
                             width={'75%'}
                             text={'75%'}
                        />
                        
                    </div>
                    
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;