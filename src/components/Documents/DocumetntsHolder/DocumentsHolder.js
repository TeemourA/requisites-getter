import React from 'react';
import './DocumentHolder.css';
import EntrepreneurTerms from '../TermsOfUse/TermsOfUseEntrepreneur';
import LegalTerms from '../TermsOfUse/TermsOfUseLegal';
import Return from '../TermsOfReturn/TermsOfReturn';
import Feedback from '../FeedbackRequisites/FeedbackRequisites';
import FeedbackStyles from '../FeedbackRequisitesStyles/FeedbackRequisitesStyles';


const form = (props) => {
  return (
    <div id="documents" className={props.documentsShown ? 'Documents' : 'Documents__hidden'}>
      {props.active === 'legal' ?
        <LegalTerms requisites={props.requisites} /> :
        <EntrepreneurTerms requisites={props.requisites} />}
      <Return requisites={props.requisites} />
      <Feedback requisites={props.requisites} active={props.active} />
      <FeedbackStyles />
    </div>
  );
};

export default form;