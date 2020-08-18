import React from 'react';
import './DocumentHolder.css';
import EnterpreneurTerms from '../TermsOfUse/TermsOfUseEnterpreneur';
import LegalTerms from '../TermsOfUse/TermsOfUseLegal';
import Return from '../TermsOfReturn/TermsOfReturn';
import Feedback from '../FeedbackRequisites/FeedbackRequisites';

const form = (props) => {
  return (
    <div className="Documents">
      {props.active === 'legal' ?
        <LegalTerms requisites={props.requisites} /> :
        <EnterpreneurTerms requisites={props.requisites} />}
        <Return requisites={props.requisites} />
        <Feedback requisites={props.requisites} active={props.active}/>
    </div>
  );
};

export default form;