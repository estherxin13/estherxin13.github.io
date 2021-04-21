import React from 'react';
import { Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({

    imageLogin: {
        borderRadius: 20,
        display: 'block',
        width: 300,
        height: 300,
        margin: 'auto',
        objectPosition: 'center',
        objectFit: 'cover',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            width: 500,
            height: 500,
        },
    },
    center: {
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            paddingTop: '6%',
        },
    },
    text: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(10),
            marginRight: theme.spacing(10),
        },
    },
    icon: {
        textAlign: 'center',
        paddingTop: '7%',
    },
    link: {
        textDecoration: 'none',
        color: 'grey'
    },
}));

export default function About() {
    const styles = useStyles();

    return (
        <main>
            <Grid container>
                <Grid xs container>
                    <Grid item xs={12} md={6} className={styles.center}>
                        <div>
                            <div>
                                <Typography className={styles.text}>
                                    <h1>
                                        welcome to my portfolio!
                                    </h1>
                                    <br />
                                    I am  first-year student at The University of Waterloo studying <strong>Systems Design Engineering</strong>.
                                    During high school, I spent my time balancing the international baccalaureate program, competitive soccer,
                                    various extra-curriculars while also while also honing my passions for <strong>technology, product design and innovation.</strong>
                                    <br />
                                    <br />
                                    From building VR experiences that educate students on the Australian bushfire crisis,
                                    to researching big data and APIs to combat the spread of diseases for Nasa SpaceApps, to designing Apple Watches using Fusion360;
                                    my passion for innovation and design remained constant.
                                    <br />
                                    <br />
                                    Currently, I'm on a four-month internship in <strong>
                                        <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://www.yearzerostudios.com/">
                                            Year Zero Studios
                                        </a>
                                    </strong>, working with <strong>Typescript, React Hooks and Firebase</strong>!
                                    <br />
                                    <br />
                                    In my free time, you can find me hiking, playing various sports and discovering new restaurants and clothing stores!
                                </Typography>
                                <div className={styles.icon}>
                                    <IconButton>
                                        <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/esther-xin-b29563171/">
                                            <LinkedInIcon fontSize="large" />
                                        </a>
                                    </IconButton>
                                    <IconButton>
                                        <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://github.com/estherxin13">
                                            <GitHubIcon fontSize="large" />
                                        </a>
                                    </IconButton>
                                    <IconButton>
                                        <a className={styles.link} target="_blank" rel="noopener noreferrer" href="mailto: esther.xin02@gmail.com">
                                            <MailIcon fontSize="large" />
                                        </a>
                                    </IconButton>
                                    <IconButton>
                                        <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://twitter.com/EstherXin4">
                                            <TwitterIcon fontSize="large" />
                                        </a>
                                    </IconButton>
                                </div>
                            </div>

                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} className={styles.center}>
                        <div>
                            <img className={styles.imageLogin} alt="logo" src="/personal-site.png" />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <div />
        </main>
    );
}