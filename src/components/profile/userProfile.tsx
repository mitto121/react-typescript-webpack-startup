import * as React from 'react';
import { projectWork } from '../../services/mockServiceData'
import { useState } from 'react';
import { StyleContainer, StyleCard, StyleImg, StylePictureCard, StyleProjectDetail,  StyleProfileSummary } from './userProfile.Styles';
import { Grid } from '@material-ui/core';

export const UserProfile = () => {
    const [projects] = useState(projectWork)

    return (
        <React.Fragment>
            <StyleProfileSummary item xs={12} sm={3}>
                <StylePictureCard elevation={3}>
                    <StyleImg src={require("../../assets/images/profile_pic.jpg")} ></StyleImg>
                </StylePictureCard>
            </StyleProfileSummary>
            <StyleContainer container item xs={12} sm={9} direction="row" justify="flex-start" alignItems="flex-start">
                <Grid item style={{ width: "100%" }}>
                    <h3>Projects</h3>
                    <hr />
                </Grid>
                {projects.map((project, index) => (
                    <Grid item key={index}>
                        <StyleCard elevation={3}>
                            <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
                                <Grid item xs={12}>{project.name}</Grid>
                                <StyleProjectDetail item xs={12}>{project.discriptions}</StyleProjectDetail>
                            </Grid>
                        </StyleCard>
                    </Grid>
                ))}
            </StyleContainer>
        </React.Fragment>
    )
}