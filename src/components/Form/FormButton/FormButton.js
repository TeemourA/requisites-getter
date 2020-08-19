import React from 'react';
import './FormButton.css';

const button = (props) => {

    return (
        <button className={props.documentsShown ? 'Button Button--close' : 'Button Button--show'} onClick={props.handleClick}>{props.documentsShown ? 'Скрыть документы' : 'Показать документы'}</button>
    );
};

export default button;