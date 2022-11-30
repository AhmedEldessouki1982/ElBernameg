import React from 'react';
// import '../activity/activity.scss';
//mui setup
import { Box, useTheme } from '@mui/system';
import {tokens} from '../themes/themes';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faUpload } from "@fortawesome/free-solid-svg-icons";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import Table from '../table/Table';
import TimePicker from 'react-time-picker';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { engineersNames } from '../../utils/employeeList';
import UUID from '../../utils/uuid';
import ActivityContext from '../ActivityContext/ActivityContext';
import axios from 'axios';

let initState = {
    discipline: "elec",
    scope: "esp",
    timeStamp: "09:00",
    person: "eldessouki",
    description: ""
}


let reducer = (state, action) => {
    switch (action.type) {
        case 'setDiscipline':
            return {...state, discipline: action.setDiscipline }
        case 'setScope':
            return {...state, scope: action.setScope }
        case 'setTimeStamp':
            return {...state, timeStamp: action.setTimeStamp }
        case 'setPerson':
            return {...state, person: action.setPerson }
        case 'setDescription':
            return {...state, description: action.setDescription}
        default:
            throw new Error();
    }
}

export default function Activity() {

    //mui setup
    const theme = useTheme();
    const colors = tokens (theme.palette.mode);

    const [state , dispatch] = React.useReducer (reducer, initState);
    let [activity , setActivity] = React.useState ([]);
    
    let responsibles = engineersNames.contacts.map (
        contact => contact.Name
    );
    let setActivityHandler = () => {
        

        setActivity (
            [
                ...activity,
                {
                    id: UUID(),
                    description: state.description,
                    disciplines: state.discipline,
                    scope: state.scope,
                    Responsibility: state.person,
                    timing: state.timeStamp,
                    createdAt: new Date().toISOString()
                }
            ]
        )
    }

    let uploadingHandler = () => {
        
        //axios post/push req code start here...
            axios.post (
                "http://localhost:8000/api/json/activities",
                {activity}
            ).then (
                res => {
                    console.log(`data pushed to the backend ${res.statusText}`);
                }
            )
        //axios post/push req code end here...

    }


    //this object reprensnt the shared value through the context api
    let activityContextValue = {
        activity,
        setActivity,
    }

  return (
    <Box 
    display = {"flex"}
    flexDirection = {"column"}
    alignItems = {"center"}
    padding = {"5px"}>

        <Box
        display = {"flex"}
        alignItems = {"center"}
        flexDirection = {"row"}
        width = {"90%"}
        height = {"10rem"}
        sx = {{
            backgroundColor: colors.primary[500]
        }} >
            {/*Toggle controller starts here */}  
            <Box 
            display = {"flex"}
            flexDirection = {"column"}
            padding = {"5px"}
            gap = {"3px"}
            justifyContent = {"center"}
            alignItems = {"center"}
            >
            
                <ToggleButtonGroup
                    color= 'warning'
                    value={state.discipline}
                    exclusive
                    onChange={
                        (e) => {
                            dispatch ({type: "setDiscipline", setDiscipline: e.target.value})
                        }                      
                    }
                >
                    <ToggleButton value="elec">Elec</ToggleButton>
                    <ToggleButton value="I&C">I&C</ToggleButton>
                    <ToggleButton value="mech">Mech</ToggleButton>
                </ToggleButtonGroup>

                <ToggleButtonGroup
                    color = 'warning'
                    value={state.scope}
                    exclusive
                    onChange={
                        (e)=> {
                            dispatch ({type: "setScope", setScope: e.target.value})                        
                    }
                }
                >
                    <ToggleButton value="sag">SAG</ToggleButton>
                    <ToggleButton value="esp">ESP</ToggleButton>
                </ToggleButtonGroup>
            </Box>
            {/*User text filed starts here */}  
            <TextField
            sx = {{

            }}
            fullWidth = {true}
            id="outlined-multiline-static"
            label={`${state.scope}/${state.discipline}`}
            multiline
            rows={3}
            defaultValue= {'Include /add the activity here.....'}
            onChange= {
                (e) => {
                   dispatch ({type: "setDescription", setDescription: e.target.value })
                }
            }
            />
            <div className='control__icons'>
                <FontAwesomeIcon icon= {faPlusSquare} onClick= {setActivityHandler} />
                <FontAwesomeIcon icon= {faUpload} onClick= {uploadingHandler} />
            </div>
        </Box>
        {/*Time picker section starts here */}
        <div className="activity__stackHolders">
            <TimePicker 
            onChange={
                (value) => {
                    dispatch ({type: "setTimeStamp", setTimeStamp: value })
                }
            }
            value = {state.timeStamp}
            />

            {/*Responsibility selector drop down menu */}
            <Select
            value={state.person}
            onChange={
                (e) => {
                    dispatch ({type: "setPerson", setPerson: e.target.value })
                }
            }
            >
            {
                responsibles.map (
                    (responsible,i) => (
                        <MenuItem key= {i} value={responsible}>{responsible}</MenuItem>
                    )
                )

            }
            </Select>
        </div>
        <ActivityContext activityPropsValue = {activityContextValue}>
            <Table data = {activity} />
        </ActivityContext>
    </Box>
  )
}