import React from 'react';
import { Context } from '../ActivityContext/ActivityContext';
import '../nav/nav.scss';

export default function Nav() {
  let activitiesConsumer = React.useContext (Context);

  
  const pushHandlerEvent = () => {
    console.log(activitiesConsumer);
  }

  return (
    <div className='nav__container'>
      <span className='app__name'>{`</> elBernameg`}</span> 
      <button onClick={pushHandlerEvent} className='push__btn'>Push</button>
    </div>
  )
}