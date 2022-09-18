import React from 'react'
import '../activity/activity.scss';
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
                    //console.log(`data pushed to the backend ${res.statusText}`);
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
    <div className='activity__container'> 
        <div className='input__field'>
            {/*Toggle controller starts here */}  
            <div className='toggle__controllers'>
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
                    color= 'primary'
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
            </div>
            {/*User text filed starts here */}  
            <TextField
            color= 'primary'
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
        </div>
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
    </div>
  )
}