import React from 'react';
import Legal from './LegalForm/LegalForm.js';
import Enterpreneur from './EnterpreneurForm/EnterpreneurForm.js';
import Terms from '../Documents/TermsOfUse'

const form = (props) => {
  return (
      <form>
          {props.active === 'legal' ?
          <Legal requisites={props.requisites} handleChange={props.handleChange}/> :
          <Enterpreneur requisites={props.requisites} handleChange={props.handleChange}/>}
          <Terms requisites={props.requisites}/>
      </form>
  );
};

export default form;
