import React from 'react';
import './EntrepreneurForm.css';
import Button from '../FormButton/FormButton'


const entrepreneur = (props) => {
    return (
        <div className="Form" >
            <h4 className="Form__title">Список реквизитов для индивидуальных предпринимателей</h4>

            <div className="Form__group">
                <input className="Form__input" type="text" inputMode="text" name="name" id="name" required placeholder=" " autoComplete="off" onChange={props.handleChange} value={props.requisites.name} />
                <label className="Form__label" htmlFor="name">ИП ФИО</label>
            </div>

            <div className="Form__group">
                <input className="Form__input" type="text" inputMode="text" name="itn" id="itn" required placeholder=" " autoComplete="off" onChange={props.handleChange} value={props.requisites.itn} />
                <label className="Form__label" htmlFor="inn">ИНН</label>
            </div>

            <div className="Form__group">
                <input className="Form__input" type="text" inputMode="text" name="psrn" id="psrn" required placeholder=" " autoComplete="off" onChange={props.handleChange} value={props.requisites.psrn} />
                <label className="Form__label" htmlFor="ogrnip">ОГРНИП</label>
            </div>

            <div className="Form__group">
                <input className="Form__input" type="text" inputMode="text" name="address" id="address" required placeholder=" " autoComplete="off" onChange={props.handleChange} value={props.requisites.address} />
                <label className="Form__label" htmlFor="adress">Юридический адрес</label>
            </div>

            <div className="Form__group">
                <input className="Form__input" type="text" inputMode="text" name="phone" id="phone" required placeholder=" " autoComplete="off" onChange={props.handleChange} value={props.requisites.phone} />
                <label className="Form__label" htmlFor="phone">Номер телефона</label>
            </div>

            <div className="Form__group">
                <input className="Form__input" type="email" inputMode="text" name="email" id="email" required placeholder=" " autoComplete="off" onChange={props.handleChange} value={props.requisites.email} />
                <label className="Form__label" htmlFor="email">Email</label>
            </div>
            <Button documentsShown={props.documentsShown} handleClick={props.handleClick}/>
        </div>
    );
};

export default entrepreneur;