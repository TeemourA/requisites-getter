import React from 'react';
import Legal from './LegalForm/LegalForm.js';
import Entrepreneur from './EntrepreneurForm/EntrepreneurForm.js';
import Documents from '../Documents/DocumetntsHolder/DocumentsHolder'

const form = (props) => {
  return (
    <form>
      {props.active === 'legal' ?
        <Legal
            requisites={props.requisites}
            handleChange={props.handleChange}
            handleClick={props.handleClick}
            documentsShown={props.documentsShown}
        /> :
        <Entrepreneur
            requisites={props.requisites}
            handleChange={props.handleChange}
            handleClick={props.handleClick}
            documentsShown={props.documentsShown}
        />}
        <Documents
            requisites={props.requisites}
            active={props.active}
        />
    </form>
  );
};

export default form;
