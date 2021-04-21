import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(7),
        paddingBottom: theme.spacing(5),
        color: theme.palette.getContrastText(theme.palette.primary.main),
        backgroundColor: 'black',
        padding: theme.spacing(3),
        paddingLeft: theme.spacing(7),
        fontSize: 18,
    },
    link: {
        textDecoration: 'none',
        color: 'white',
    },
    grid: {
        paddingTop: theme.spacing(3),
    }
}));

export function Footer() {
    const styles = useStyles();

    return (
        <footer className={styles.root}>
            <Grid className={styles.grid} item xs={12} sm={3}>
                <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/esther-xin-b29563171/">
                    LinkedIn
                </a>
            </Grid>
            <Grid className={styles.grid} item xs={12} sm={3}>
                <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://github.com/estherxin13">
                    Github
                </a>
            </Grid>
            <Grid className={styles.grid} item xs={12} sm={3}>
                <a className={styles.link} target="_blank" rel="noopener noreferrer" href="mailto: esther.xin02@gmail.com">
                    Email
                </a>
            </Grid>
            <Grid className={styles.grid} item xs={12} sm={3}>
                <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://twitter.com/EstherXin4">
                    Twitter
                </a>
            </Grid>
            <Grid className={styles.grid} item xs={12} sm={3}>
                <p>@ 2021 Esther Xin</p>
            </Grid>
        </footer>
    );
}