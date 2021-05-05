import React from 'react';
import { Divider, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    headerRoot: {
        color: theme.palette.getContrastText(theme.palette.primary.main),
        backgroundColor: '#070A0B',
        textAlign: 'center',
        fontSize: 18,
        marginTop: theme.spacing(3),
    },
    imageLogin: {
        width: 600,
        [theme.breakpoints.down('md')]: {
            width: 350,
        },
    },
    textRoot: {
      // backgroundColor: '#FFF5F2',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        paddingLeft: theme.spacing(50),
        paddingRight: theme.spacing(25),
        [theme.breakpoints.down('md')]: {
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(0),
        },
        '& ul': {
          listStyle: 'none',
          padding: 0,
        },
        '& li': {
            paddingTop: theme.spacing(1),
          },
      },
      subtitle:{
          fontSize: 20
      },
      title:{
        fontSize: 35,
        paddingLeft: theme.spacing(49),
        paddingTop: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            paddingLeft: theme.spacing(5),
        },
    },
    desc: {
        fontSize: 20,
        paddingTop: theme.spacing(5),
        paddingLeft: theme.spacing(50),
        [theme.breakpoints.down('md')]: {
            paddingLeft: theme.spacing(5),
        },
    },
    paragraph: {
        paddingTop: theme.spacing(1),
        paddingLeft: theme.spacing(50),
        paddingRight: theme.spacing(40),
        [theme.breakpoints.down('md')]: {
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
        },
    }

}));

export function NasaDetails() {
    const styles = useStyles();

    return (
        <>
        <div className={styles.headerRoot}>
            <div>
                <img className={styles.imageLogin} alt="logo" src="/nasaDetails.svg" />
            </div>
        </div>
        <div className={styles.title}>
            <strong>NASA Space Apps Hackathon</strong> 
        </div>
        {/* <div className={styles.desc}>
            <strong>Overview</strong> 
        </div>
        <div className={styles.paragraph}>
            Wellify is a company founded under 'Year Zero Studios', a start-up based in Toronto that 
            explores solutions in areas such as mental health, 
            wellness, education and more. Wellify specifically is an online booking and payment
            application for wellness instructors. 

        </div> */}
            <footer className={styles.textRoot}>
            <Grid container spacing={0} justifyContent="space-around">
              <Grid item xs={12} sm={4}>
                <ul>
                  <li className={styles.subtitle}>
                    <strong>Role</strong>
                  </li>
                  <li>
                    Software Developer 
                  </li>
                  <li>
                    UX/UI Designer
                  </li>  
                  <li>
                    Market Researcher
                  </li>            
                </ul>
              </Grid>
              <Grid item xs={12} sm={4}>
                <ul>                
                  <li className={styles.subtitle}>
                    <strong>Timeline</strong>
                  </li>
                  <li>
                    October 2019
                  </li>              
                </ul>
              </Grid>
              <Grid item xs={12} sm={4}>
                <ul>                
                  <li className={styles.subtitle}>
                    <strong>Tools</strong>
                  </li>
                  <li>
                    Javascript
                  </li>
                  <li>
                    HTML + CSS
                  </li>         
                  <li>
                    Weather API
                  </li>           
                </ul>
              </Grid>
            </Grid>
          </footer>
          <Divider variant="middle"  />
          </>
    );
}