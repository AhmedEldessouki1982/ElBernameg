import React from 'react';
import '../table/table.scss';
import Popup from '../Popup/Popup';
import {Context}  from '../ActivityContext/ActivityContext';

export default function Table({ data }) {

  let activitiesConsumer = React.useContext (Context);

  let activities = data;
  return (
    <div className='container'>
        <h2>Commissioning Activities List</h2>
        <ul className="responsive-table">
            <li className="table-header">
                <div className="col-1">Job Id</div>
                <div className="col-2">Activities</div>
                <div className="col-3">disciplines</div>
                <div className="col-4">scope</div>
                <div className="col-4">responsibility</div>
                <div className="col-4">Time</div>
            </li>
            {
              activities.map (
                (activity,i) => (
                  <li key= {i} className="table-row">
                    <div className="col-1" data-label="Job Id">{i+1}</div>
                    <div className="col-2" data-label="Activities">{activity.description}</div>
                    <div className="col-3" data-label="disciplines">{activity.disciplines}</div>
                    <div className="col-4" data-label="scope">{activity.scope}</div>
                    <div className="col-4" data-label="responsibility">{activity.Responsibility}</div>
                    <div className="col-4" data-label="Time">{activity.timing}</div>

                    <Popup iDAttribute= { activity.id } activitiesConsumer= { activitiesConsumer } />                                     
                  </li>
                )
              )
            }    
        </ul>
    </div>
  )
}