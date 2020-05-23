import React from 'react';

const WithClasses = (props) => (
    <div className={props.Class} >
        {props.children}
    </div>
);

export default WithClasses;