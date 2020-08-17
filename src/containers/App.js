import React, { Component } from 'react';
import './App.css';
import Form from '../components/Form/Form.js';
import ControlPanel from '../components/ControlPanel/ControlPanel.js';

class App extends Component {
  state = {
    activeForm: 'entepreneur'
  }

  toggleEnterpreneurForm() {
    this.setState({
      activeForm: 'enterpreneuer'
    })
  }

  toggleLegalForm() {
    this.setState({
      activeForm: 'legal'
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Выберите тип организации(ООО или ИП) и заполните форму с реквизитами</h2>
        <ControlPanel 
        showEnterpreneurForm={() => this.toggleEnterpreneurForm()}
        showLegalForm={() => this.toggleLegalForm()} />
        <Form active={this.state.activeForm} />
      </div>
    );
  };
}

export default App;
