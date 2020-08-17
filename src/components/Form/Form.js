import React from 'react';
import Legal from './LegalForm/LegalForm.js';
import Enterpreneur from './EnterpreneurForm/EnterpreneurForm.js'; 

const form = (props) => {
  return (
    <form>
      {props.active === 'legal' ? <Legal /> : <Enterpreneur />}
      <button type="submit">Отправить</button>
    </form>
  );
};

export default form;
