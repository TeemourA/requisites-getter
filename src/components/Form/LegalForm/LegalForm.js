import React from 'react';
import './LegalForm.css';

const legal = (props) => {
    return (
        <div className="Form">
            <h4 className="Form__title">Список реквизитов для юридических лиц</h4>

            <div className="Form__group">
                <input className="Form__input" type="text" inputMode="text" name="name" id="name" required placeholder=" " autoComplete="off" onChange={props.handleChange} value={props.requisites.name} />
                <label className="Form__label" htmlFor="name">Название юридического лица</label>
            </div>

            <div className="Form__group">
                <input className="Form__input" type="text" inputMode="text" name="itn" id="itn" required placeholder=" " onChange={props.handleChange} value={props.requisites.itn} />
                <label className="Form__label" htmlFor="inn">ИНН</label>
            </div>

            <div className="Form__group">
                <input className="Form__input" type="text" inputMode="text" name="psrn" id="psrn" required placeholder=" " onChange={props.handleChange} value={props.requisites.psrn} />
                <label className="Form__label" htmlFor="ogrnip">ОГРН</label>
            </div>

            <div className="Form__group">
                <input className="Form__input" type="text" inputMode="text" name="iac" id="iac" required placeholder=" " onChange={props.handleChange} value={props.requisites.iac} />
                <label className="Form__label" htmlFor="adress">КПП</label>
            </div>

            <div className="Form__group">
                <input className="Form__input" type="text" inputMode="text" name="address" id="address" required placeholder=" " onChange={props.handleChange} value={props.requisites.adress} />
                <label className="Form__label" htmlFor="phone">Юридический адресс</label>
            </div>

            <div className="Form__group">
                <input className="Form__input" type="text" inputMode="text" name="phone" id="phone" required placeholder=" " onChange={props.handleChange} value={props.requisites.phone} />
                <label className="Form__label" htmlFor="phone">Телефон</label>
            </div>

            <div className="Form__group">
                <input className="Form__input" type="text" inputMode="text" name="ceo" id="ceo" required placeholder=" " onChange={props.handleChange} value={props.requisites.ceo} />
                <label className="Form__label" htmlFor="phone">Генеральный директор</label>
            </div>

            <div className="Form__group">
                <input className="Form__input" type="email" inputMode="text" name="email" id="email" required placeholder=" " onChange={props.handleChange} value={props.requisites.email} />
                <label className="Form__label" htmlFor="email">Email</label>
            </div>

        </div>
    );
};

export default legal;