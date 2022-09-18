import React from 'react';
export const Context = React.createContext ();

export default function ActivityContext (props) {
    return (
        <Context.Provider value={props.activityPropsValue}>
            {props.children}
        </Context.Provider>
    );
}