import React from 'react';
import '../Popup/Popup.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faTrash, faCircleCheck, faEdit, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Popup (props) {
    return (
        <Menu>
            <Navitems attribute= {props.iDAttribute}  state= { props.activitiesConsumer }/>
        </Menu>
    )
}

function Menu (props) {
    let [toggle , setToggle] = React.useState (false);
    return (
        <div className='menu__navitems'>
            {
                !toggle ? <FontAwesomeIcon onClick={() => setToggle (!toggle)} className= "menu__navMenu" icon= {faEllipsisVertical}/> :
                <FontAwesomeIcon onClick={() => setToggle (!toggle)} className= "menu__navMenu" icon= {faAngleRight}/>
            }
          <ul className='menu__navitems__icons'> 
            {
                toggle && props.children 
            }
          </ul>
        </div>
    )
}

function Navitems (props) {

    let handleDeleteEvent = () => {
        let actID = props.attribute
        props.state.setActivity(
            props.state.activity.filter(
                act => act.id !== actID
            )
        )          
    }

    return (
        <>
            <li>
                <FontAwesomeIcon onClick={handleDeleteEvent} className= "menu__icon" icon = {faTrash} />
            </li>
            <li>
                <FontAwesomeIcon className= "menu__icon" icon = {faCircleCheck} />
            </li>
            <li>
                <FontAwesomeIcon className= "menu__icon" icon = {faEdit} />
            </li>
        </>
    )
}