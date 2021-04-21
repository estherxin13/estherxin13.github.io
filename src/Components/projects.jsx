import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Wellify from '../Components/wellify';
import Nasa from '../Components/nasa';
import RBC from './rbc';
import PersonalSite from './personalWebsite';



const useStyles = makeStyles(theme => ({

    cardLeft: {
        marginRight: theme.spacing(3),
        marginLeft: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing(3),
            marginLeft: theme.spacing(6),
        }
    },
    cardRight: {
        marginRight: theme.spacing(3),
        marginLeft: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing(6),
            marginLeft: theme.spacing(3),
        }
    },
}));

export default function Project() {
    const styles = useStyles();

    return (
        <main>
            <Grid container>
                <Grid xs container>
                    <Grid item xs={12} md={6}>
                        <div>

                            <div className={styles.cardLeft}>
                                <Wellify />
                                <Nasa />
                            </div>

                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={styles.cardRight}>
                            <PersonalSite />
                            <RBC />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <div />
        </main>
    );
}