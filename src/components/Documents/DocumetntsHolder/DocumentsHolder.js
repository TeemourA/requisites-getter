import React from 'react';
import './DocumentHolder.css';
import Terms from '../TermsOfUse/TermsOfUse';
import Return from '../TermsOfReturn/TermsOfReturn';
import Feedback from '../FeedbackRequisites/FeedbackRequisites';

const form = (props) => {
    return (
        <div className="Documents">
            <Terms requisites={props.requisites}/>
            <Return requisites={props.requisites}/>
            <Feedback requisites={props.requisites} active={props.active}/>
        </div>
    );
};

export default form;