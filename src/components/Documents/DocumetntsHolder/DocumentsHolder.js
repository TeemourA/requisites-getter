import React from 'react';
import './DocumentHolder.css';
import Terms from '../TermsOfUse';

const form = (props) => {
    return (
        <div className="Documents">
            <Terms requisites={props.requisites}/>
        </div>
    );
};

export default form;