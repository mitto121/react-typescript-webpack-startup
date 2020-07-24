import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { StyleContainer, useStyles, StyleCard, StyleImg, StyleBackDrop,StylePictureCard, StyleProjectDetail, StyleMainContainer, StyleProfileSummary } from './App.Styles';
import { Grid } from '@material-ui/core';
import { useState } from 'react';
import { SideNav } from './sideNav';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { projectWork } from '../mockServiceData'

export default function App() {
  const [projects] = useState(projectWork)
  const [sideNavOpen, setSideNavVisibility] = useState(false);

  const sideNavToggleClickHandler = () => {
    setSideNavVisibility(!sideNavOpen);
  }
  const backDropClickHandler = () => {
    setSideNavVisibility(false);
  }


  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={sideNavToggleClickHandler}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Mitto Pal
          </Typography>
        </Toolbar>
        {sideNavOpen && (
          <React.Fragment>
            <SideNav open={sideNavOpen} />
            <StyleBackDrop onClick={backDropClickHandler} />
          </React.Fragment>
        )}
      </AppBar>
      <StyleMainContainer container direction="row" justify="flex-start" alignItems="flex-start">
        <StyleProfileSummary item xs={12} sm={3}>
          <StylePictureCard elevation={3}>
            <StyleImg src={require("../assets/images/profile_pic.jpg")} ></StyleImg>
          </StylePictureCard>
        </StyleProfileSummary>
        <StyleContainer container item xs={12} sm={9} direction="row" justify="flex-start" alignItems="flex-start">
          <Grid item  style={{width:"100%"}}>
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
      </StyleMainContainer>
    </div>
  );
}