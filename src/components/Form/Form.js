import React from 'react';
import Legal from './LegalForm/LegalForm.js';
import Enterpreneur from './EnterpreneurForm/EnterpreneurForm.js'; 

const form = (props) => {
  return (
    <div>
      {props.active === 'legal' ? <Legal /> : <Enterpreneur />}
      <button type="submit"></button>
    </div>
  );
};

export default form;
