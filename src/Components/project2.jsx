import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Wellify from './wellify';
import PersonalSite from './personalWebsite';
import Nasa from '../Components/nasa';
import RBC from './rbc';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
item:{
    textAlign: 'left',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(3),
},
timeline:{
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(20),
},
padding:{
    marginRight: theme.spacing(10),
}
}));

export default function Project2() {
  const classes = useStyles();

  return (
    <Timeline className ={classes.timeline} >
      <TimelineItem>
        <TimelineSeparator className ={classes.padding}>
          <TimelineDot color="black">
          <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineOppositeContent>
        <Typography className ={classes.item} variant="body1" color="textSecondary">
            Janurary - April 2021
          </Typography>
          <Wellify />
        </TimelineOppositeContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator className ={classes.padding}>
          <TimelineDot color="black">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineOppositeContent>
        <Typography className ={classes.item} variant="body1" color="textSecondary">
            April 2021
          </Typography>
          <PersonalSite />
        </TimelineOppositeContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator className ={classes.padding}>
          <TimelineDot color="black">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineOppositeContent>
        <Typography className ={classes.item} variant="body1" color="textSecondary">
            November 2019
          </Typography>
          <Nasa />
        </TimelineOppositeContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator className ={classes.padding}>
          <TimelineDot color="black">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineOppositeContent>
        <Typography className ={classes.item} variant="body1" color="textSecondary">
            October 
          </Typography>
          <RBC />
        </TimelineOppositeContent>
      </TimelineItem>
    </Timeline>
  );
}