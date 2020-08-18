import React from 'react';
import './DocumentHolder.css';
import EnterpreneurTerms from '../TermsOfUse/TermsOfUseEnterpreneur';
import LegalTerms from '../TermsOfUse/TermsOfUseLegal';
import Return from '../TermsOfReturn/TermsOfReturn';

const form = (props) => {
  return (
    <div className="Documents">
      {props.active === 'legal' ?
        <LegalTerms requisites={props.requisites} /> :
        <EnterpreneurTerms requisites={props.requisites} />}
      <Return requisites={props.requisites} />
    </div>
  );
};

export default form;