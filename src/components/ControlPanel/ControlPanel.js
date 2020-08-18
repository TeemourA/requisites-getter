import React from 'react';
import './ControlPanel.css';

const controlPanel = (props) => {
  return (
    <div className="Control-panel">
      <div className="Control-panel__container">
        <button className="Control-panel__button" onClick={props.showEnterpreneurForm}>Форма ИП</button>
        <button className="Control-panel__button" onClick={props.showLegalForm}>Форма ООО</button>
      </div>
    </div>
  );
};

export default controlPanel;