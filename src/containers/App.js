import React, { Component } from 'react';
import './App.css';
import Form from '../components/Form/Form.js';

class App extends Component {
  state = {
    activeForm: 'entepreneur'
  }

  toggleFormHandler() {
    if (this.state.activeForm === 'legal') {
      this.setState({
        activeForm: 'enterpreneuer'
      })
    } else {
      this.setState({
        activeForm: 'legal'
      })
    }
  }

  render() {
    const buttonTitle = this.state.activeForm === 'legal' ? 'ИП' : 'юридических лиц';

    return (
      <div className="App">
        <h2>Выберите тип организации(ООО или ИП) и заполните форму с реквизитами</h2>
        <button onClick={() => this.toggleFormHandler()}>Выбрать форму для {buttonTitle}</button>
        <Form active={this.state.activeForm} />
      </div>
    );
  };
}

export default App;
