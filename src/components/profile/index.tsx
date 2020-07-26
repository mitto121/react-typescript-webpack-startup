import * as React from 'react';
import { profileData } from '../../services/mockServiceData'
import { StyleContainer,  StyleImg, StylePictureCard, StyleProfileSummary } from './styles';
import { Grid } from '@material-ui/core';
import { Academics } from './academics';
import { Skills } from './skills';
import { ProfileSummary } from './profileSummary';
import { Projects } from './projects';

export const UserProfile = () => {
    const {careerObjective,profileSummary,projects,skills,academics}=profileData;

    return (
        <React.Fragment>
            <StyleProfileSummary item xs={12} sm={3}>
                <StylePictureCard elevation={3}>
                    <StyleImg src={require("../../assets/images/profile_pic.jpg")} ></StyleImg>
                    <h2>Hi, I am Mitto Pal</h2>
                </StylePictureCard>
            </StyleProfileSummary>
            <StyleContainer container item xs={12} sm={9} direction="row" justify="flex-start" alignItems="flex-start">
                <ProfileSummary careerObjective={careerObjective} profileSummary={profileSummary}/>              
                <Skills data={skills}/>               
                <Academics data={academics}/>                
                <Projects projects={projects}/>
            </StyleContainer>
        </React.Fragment>
    )
}