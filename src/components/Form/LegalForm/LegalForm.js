import React from 'react';
import './LegalForm.css';

const legal = () => {
  return (
    <div className="Form">
      <h4 className="Form__title">Список реквизитов для юридических лиц</h4>

      <div className="Form__group">
        <input className="Form__input" type="text" inputMode="text" name="name" id="name" required placeholder=" " autoComplete="off" />
        <label className="Form__label" htmlFor="name">Название юридического лица</label>
      </div>

      <div className="Form__group">
        <input className="Form__input" type="text" inputMode="text" name="inn" id="inn" required placeholder=" " />
        <label className="Form__label" htmlFor="inn">ИНН</label>
      </div>

      <div className="Form__group">
        <input className="Form__input" type="text" inputMode="text" name="ogrnip" id="ogrnip" required placeholder=" " />
        <label className="Form__label" htmlFor="ogrnip">ОГРН</label>
      </div>

      <div className="Form__group">
        <input className="Form__input" type="text" inputMode="text" name="ogrnip" id="adress" required placeholder=" " />
        <label className="Form__label" htmlFor="adress">КПП</label>
      </div>

      <div className="Form__group">
        <input className="Form__input" type="text" inputMode="text" name="ogrnip" id="phone" required placeholder=" " />
        <label className="Form__label" htmlFor="phone">Юридический адресс</label>
      </div>

      <div className="Form__group">
        <input className="Form__input" type="text" inputMode="text" name="ogrnip" id="phone" required placeholder=" " />
        <label className="Form__label" htmlFor="phone">Телефон</label>
      </div>

      <div className="Form__group">
        <input className="Form__input" type="text" inputMode="text" name="ogrnip" id="phone" required placeholder=" " />
        <label className="Form__label" htmlFor="phone">Генеральный директор</label>
      </div>

    </div>
  );
};

export default legal;