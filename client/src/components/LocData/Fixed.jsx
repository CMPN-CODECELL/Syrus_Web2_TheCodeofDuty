import React from 'react';
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper, Icon, Button } from '@material-ui/core';
import { ReportProblemOutlined as ReportProblemOutlinedIcon } from '@material-ui/icons';
import { WbSunny, Opacity, SettingsInputComponent, Whatshot } from '@material-ui/icons';
import rainprev from "../../images/10 days vs Rainfalll(black).png";
import avgrain from "../../images/average rainfall in mumbai.png";
import humid from "../../images/humidity and temp.png";
import temprain from "../../images/temp-rain.png";
import rainloss from "../../images/loss due to rainfall.png";
import deathrain from "../../images/totaldeaths due to rainfall.png";




const useStyles = makeStyles((theme) => ({
root: {
padding: theme.spacing(3, 2),
margin: theme.spacing(3),
backgroundColor: '#fafafa',
boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
},
heading: {
textAlign: 'center',
marginBottom: theme.spacing(3),
},
icon: {
fontSize: '3rem',
margin: theme.spacing(2),
color: '#3f51b5',
},
boldMessage: {
textAlign: 'center',
fontWeight: 'bold',
color: 'red',
margin: theme.spacing(3),
},
section: {
marginTop: theme.spacing(3),
},
sosBtn: {
display: 'block',
margin: '0 auto',
marginTop: theme.spacing(6),
padding: theme.spacing(3),
backgroundColor: 'red',
width: '100px',
color: 'white',
'&:hover': {
backgroundColor: 'darkred',
},
},
precautionsList: {
margin: theme.spacing(2, 0),
listStyle: 'none',
paddingLeft: '0',
},
precautionItem: {
margin: theme.spacing(2, 0),
display: 'flex',
alignItems: 'center',
},
precautionIcon: {
marginRight: theme.spacing(2),
color: '#3f51b5',
},
sosIcon: {
marginRight: theme.spacing(1),
},
container: {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
},
image: {
  width: '45%',
},

}));
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
  },
  image: {
    padding: '3px',
    //display: 'flex',
    justifyContent: 'space-between',
    width: '25%',
    height: '40vh',
  },
};

const MumbaiWeather = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSOS = () => {
    // prompt user for mobile number
    const number = prompt("Enter your mobile number:");
    setMobileNumber(number);

    // send request to the backend to send SMS message
    fetch("/send-sos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobileNumber: number }),
    });
  };
    const classes = useStyles();
    
    return (
    <Paper className={classes.root}>
    <Typography variant="h4" className={classes.heading}>
    Mumbai Weather
    </Typography>
    <Grid container justify="center">
    <Grid item xs={3}>
    <Icon className={classes.icon}><WbSunny /></Icon>
    <Typography variant="h5">32°C</Typography>
    </Grid>
    <Grid item xs={3}>
    <Icon className={classes.icon}><Opacity /></Icon>
    <Typography variant="h5">98%</Typography>
    </Grid>
    <Grid item xs={3}>
    <Icon className={classes.icon}><SettingsInputComponent /></Icon>
    <Typography variant="h5">1013 hPa</Typography>
    </Grid>
    <Grid item xs={3}>
    <Icon className={classes.icon}><Whatshot /></Icon>
    <Typography variant="h5">95%</Typography>
    </Grid>
    </Grid>
    <Typography variant="h4" className={classes.boldMessage}>
    Caution! Heavy Rainfalls and Floods are expected in your Area.
    </Typography>

    <Typography variant="h5">Causes:</Typography>
    {/* Images of Causes  add images side by side in 2*2  Total 4 images to add in causes*/}
    {/* <img src={rainprev} alt="icon" height="150px" />
    <img src={avgrain} alt="icon" height="150px" />
    <img src={rainprev} alt="icon" height="150px" />
    <img src={rainprev} alt="icon" height="150px" /> */}
    <div style={styles.container}>
      <img  src={rainprev} alt="Image 1" style={styles.image} />
      <img  src={avgrain} alt="Image 2" style={styles.image} />
      <img  src={humid} alt="Image 3" style={styles.image} />
      <img  src={temprain} alt="Image 4" style={styles.image} />
    </div>

    <Typography variant="h5">Effects:</Typography>
    {/* Images of Effects add images side by side in 2*2 total 2 images to add in effects */}
    <div style={styles.container}>
    <img  src={rainloss} alt="Image 5" style={styles.image} />
    <img  src={deathrain} alt="Image 6" style={styles.image} />
    </div>

    
      <Grid container className={classes.section}>
        <Grid item xs={6}>
          <Typography variant="h5">Precautions to take:</Typography>
          <ul className={classes.precautionsList}>
            <li className={classes.precautionItem}>
              <ReportProblemOutlinedIcon className={classes.precautionIcon} />
              Avoid non-essential travel.
            </li>
            <li className={classes.precautionItem}>
              <ReportProblemOutlinedIcon className={classes.precautionIcon} />
              Stay updated on weather updates and news.
            </li>
            <li className={classes.precautionItem}>
              <ReportProblemOutlinedIcon className={classes.precautionIcon} />
              Store sufficient food, water and other essentials.
            </li>
            <li className={classes.precautionItem}>
              <ReportProblemOutlinedIcon className={classes.precautionIcon} />
              Stay away from low-lying areas and waterlogged streets.
            </li>
          </ul>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5">Nearest Help Centers:</Typography>
          <ul className={classes.precautionsList}>
            <li className={classes.precautionItem}>
              <ReportProblemOutlinedIcon className={classes.precautionIcon} />
              National Disaster Response Force (NDRF) - Contact No. 974247738
            </li>
            <li className={classes.precautionItem}>
              <ReportProblemOutlinedIcon className={classes.precautionIcon} />
              Mumbai Fire Brigade - Contact No. 101

            </li>
            <li className={classes.precautionItem}>
              <ReportProblemOutlinedIcon className={classes.precautionIcon} />
              BMC Disaster Management Cell - Contact No. 022-22694725
    </li>
    <li className={classes.precautionItem}>
              <ReportProblemOutlinedIcon className={classes.precautionIcon} />
              Police Control Room - Contact No. 100

            </li>
    </ul>
    </Grid>
    </Grid>

    {/* add sos button functionality */}

    <Button variant="contained" className={classes.sosBtn} color="secondary" onClick={handleSOS}>SOS</Button>
    </Paper>
    );
    };
    
    export default MumbaiWeather;
    
    
    
    