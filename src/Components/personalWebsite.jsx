import React from 'react';
import { Card, CardActions, CardContent, Collapse, IconButton, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

const useStyles = makeStyles(theme => ({
    card: {
        textAlign: 'left',
        marginBottom: theme.spacing(5),
        borderRadius: 7,
        boxShadow: '0px 4px 9px 4px rgba(212,212,212)',
        '&:hover': {
            boxShadow: '0px 4px 9px 4px rgba(208, 139, 127, 0.4)',
        },
    },
    expand: {
        transform: 'rotate(0deg)',
        margin: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    text: {
        fontSize: 15,
        marginTop: theme.spacing(2),
    },
    imageLogin: {
        width: 450,
        marginRight: theme.spacing(5),
        marginLeft: theme.spacing(5),
        border: '2px solid black',
        borderRadius: 7,
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    cardContent: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        display: 'flex'
    },
    icon: {
        color: 'grey',
        textAlign: 'center',
        // marginTop: theme.spacing(1),
    }
}));

export default function Wellify() {
    const styles = useStyles();
    const [expanded, setExpanded] = React.useState(false);


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card
            onClick={handleExpandClick}
            className={styles.card}>
            <CardContent className={styles.cardContent}>
                <img className={styles.imageLogin} alt="logo" src="/site.png" />
                <div className={styles.title}>
                    <strong>Devloper + Designer</strong>  |  Personal Website
                    <Typography className={styles.text}>
                        Wellify is a booking and payment platform.
                        <br />
                        Typescript, React Hooks, FireBase, Stripe and Zoom API.
                        <br />
                        Also did design reviews, PM, increase users by 75%.
                        Typescript, React Hooks, FireBase, Stripe and Zoom API
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas fermentum gravida risus, mollis pharetra
                        eros molestie sed. Mauris sollicitudin erat eget
                        diam laoreet, et commodo mi cursus. Class aptent taciti
                </Typography>
                    <div className={styles.icon}>
                        <IconButton>
                            <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://github.com/estherxin13">
                                <GitHubIcon className={styles.icon} />
                            </a>
                        </IconButton>
                        <IconButton>
                            <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://app.wellify.studio/">
                                <WebIcon className={styles.icon} />
                            </a>
                        </IconButton>
                    </div>
                </div>
            </CardContent>
        </Card >
    );
}