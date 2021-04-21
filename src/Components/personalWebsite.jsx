import React from 'react';
import { Card, CardActions, CardContent, Collapse, IconButton, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    card: {
        textAlign: 'center',
        marginBottom: theme.spacing(6),
        borderRadius: 7,
        boxShadow: '0px 4px 9px 4px rgba(212,212,212)',
        '&:hover': {
            boxShadow: '0px 4px 9px 4px rgba(208, 139, 127, 0.4)',
            cursor: 'pointer',
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
    },
    imageLogin: {
        width: 500,
        borderRadius: 7,
        border: '2px solid black',
        marginBottom: theme.spacing(1),
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    cardContent: {
        paddingTop: theme.spacing(5),
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
                <div className={styles.text}>
                    <strong>designer + developer</strong>  |  personal website
                    </div>
            </CardContent>
            <CardActions>
                <IconButton
                    className={clsx(styles.expand, {
                        [styles.expandOpen]: expanded,
                    })}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon fontSize='large'/>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography className={styles.text}>
                        Typescript, React Hooks, FireBase, Stripe and Zoom API
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas fermentum gravida risus, mollis pharetra
                        eros molestie sed. Mauris sollicitudin erat eget
                        diam laoreet, et commodo mi cursus. Class aptent taciti
            </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}