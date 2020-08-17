import React from 'react';
import './ControlPanel.css';

const controlPanel = (props) => {
  return (
    <div className="Control-panel">
      <div className="Control-panel__container">
        <button className="Control-panel__button" onClick={props.showEnterpreneurForm}>Форма для индивидуальных предпринимателей(ИП)</button>
        <button className="Control-panel__button" onClick={props.showLegalForm}>Форма для юридических лиц(ООО)</button>
      </div>
    </div>
  );
};

export default controlPanel;