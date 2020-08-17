import React from 'react';
import Legal from '../components/Form/LegalForm/LegalForm.js';
import Enterpreneur from '../components/Form/EnterpreneurForm/EnterpreneurForm.js'; 

const form = (props) => {
  return (
    <div>
      {props.active === 'legal' ? <Legal /> : <Enterpreneur />}
      <button type="submit"></button>
    </div>
  );
};

export default form;
