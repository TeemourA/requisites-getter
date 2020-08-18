import React from 'react';
import Legal from './LegalForm/LegalForm.js';
import Enterpreneur from './EnterpreneurForm/EnterpreneurForm.js';
import Documents from '../Documents/DocumetntsHolder/DocumentsHolder'

const form = (props) => {
  return (
    <form>
      {props.active === 'legal' ?
        <Legal requisites={props.requisites} handleChange={props.handleChange} /> :
        <Enterpreneur requisites={props.requisites} handleChange={props.handleChange} />}
      <Documents requisites={props.requisites} />
    </form>
  );
};

export default form;
