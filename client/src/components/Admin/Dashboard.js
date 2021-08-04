import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Paper, Grid, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createEvent } from '../../actions/events';
import { getEvents } from "../../actions/events";
import EventsHolder from '../Events/EventsHolder';
import { updateEvent } from '../../api';
import Event from '../Events/Event/Event';
import Form from './Form';


const Dashboard = () => {
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('profile')));
  // const [currentId, setCurrentId] = useState(0);
  // const dispatch = useDispatch();
  // const classes = useStyles();
  // const { events, isLoading } = useSelector((state) => state.events);


  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   dispatch(getEvents());
  // }, [currentId, dispatch]);

  
  return (

    <div className='pt-6 text-center mt-8' style={{ height:"70vh" }}>  {admin?.result ? (

      <div>
        <Button  component={Link} to="/dashboard/events" variant="contained" size="large" color="secondary" style={{ padding:"1em", margin:'1em' }}>Events</Button>
        <br/>
        
        <Button component={Link} to="/dashboard/projects" variant="contained" size="large" color="secondary" style={{ padding:"1em", margin:'1em' }}>Projects</Button>
      
      </div>

    ) : (
      <div className='pt-6 text-center mt-8' style={{ height:"70vh" }}>
        <h1 className='mt-6'>Dashboard for admin</h1>
        <Button component={Link} to="/admin" variant="contained" color="primary">Sign In</Button>
      </div>
    )}
    </div>
  )
}

export default Dashboard;