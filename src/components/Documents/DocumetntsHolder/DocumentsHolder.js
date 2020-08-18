import React from 'react';
import './DocumentHolder.css';
import Terms from '../TermsOfUse/TermsOfUse';
import Return from '../TermsOfReturn/TermsOfReturn';

const form = (props) => {
    return (
        <div className="Documents">
            <Terms requisites={props.requisites}/>
            <Return requisites={props.requisites}/>
        </div>
    );
};

export default form;