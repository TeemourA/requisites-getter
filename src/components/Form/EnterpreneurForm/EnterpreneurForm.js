import React from 'react';
import '../Form.css';

const enterpreneur = () => {
  return (
    <form className="Form">
      <h4 className="Form__title">Список реквизитов для индивидуальных предпринимателей</h4>

      <div className="Form__group">
        <input className="Form__input" type="text" inputMode="text" name="name" id="name" required placeholder=" " autoComplete="off" />
        <label className="Form__label" htmlFor="name">ИП ФИО</label>
      </div>

      <div className="Form__group">
        <input className="Form__input" type="text" inputMode="text" name="inn" id="inn" required placeholder=" " />
        <label className="Form__label" htmlFor="inn">ИНН</label>
      </div>

      <div className="Form__group">
        <input className="Form__input" type="text" inputMode="text" name="ogrnip" id="ogrnip" required placeholder=" " />
        <label className="Form__label" htmlFor="ogrnip">ОГРНИП</label>
      </div>

      <div className="Form__group">
        <input className="Form__input" type="text" inputMode="text" name="ogrnip" id="adress" required placeholder=" " />
        <label className="Form__label" htmlFor="adress">Юридический адрес</label>
      </div>

      <div className="Form__group">
        <input className="Form__input" type="text" inputMode="text" name="ogrnip" id="phone" required placeholder=" " />
        <label className="Form__label" htmlFor="phone">Номер телефона</label>
      </div>

    </form>
  );
};

export default enterpreneur;