import React from 'react';
import Legal from './LegalForm/LegalForm.js';
import Enterpreneur from './EnterpreneurForm/EnterpreneurForm.js'; 

const form = (props) => {
  return (
      <form action="https://formspree.io/xpzyeaka" method="POST">
          {props.active === 'legal' ?
          <Legal requisites={props.requisites} handleChange={props.handleChange}/> :
          <Enterpreneur requisites={props.requisites} handleChange={props.handleChange}/>}

          {/*<textarea name="Пользовательское соглашение" value={}/>*/}

          <button type="submit">Отправить</button>
      </form>
  );
};

export default form;
