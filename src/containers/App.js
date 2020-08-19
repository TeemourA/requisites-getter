import React, { Component } from 'react';
import './App.css';
import Form from '../components/Form/Form.js';
import ControlPanel from '../components/ControlPanel/ControlPanel.js';
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    activeForm: 'entrepreneur',
    requisites: {
      name: '',
      itn: '',
      psrn: '',
      iac: '',
      address: '',
      phone: '',
      ceo: '',
      email: '',
    },
    documentsShown: false,
  };



  toggleEntrepreneurForm() {
    this.setState({
      activeForm: 'entrepreneur'
    })
  }

  toggleLegalForm() {
    this.setState({
      activeForm: 'legal'
    })
  }

  handleChange = (e) => {
    this.setState({documentsShown: false});
    const inputName = e.target.name;
    const newRequisites = { ...this.state.requisites };
    newRequisites[inputName] = e.target.value;
    this.setState({ requisites: newRequisites });
  }

  handleClick = (e) => {
    e.preventDefault();
    const newShown = !this.state.documentsShown;
    this.setState({documentsShown: newShown});
  }

  render() {
    return (
      <div className="App">
        <h2>Выберите тип организации и заполните форму с реквизитами</h2>
        <ControlPanel
          showEntrepreneurForm={() => this.toggleEntrepreneurForm()}
          showLegalForm={() => this.toggleLegalForm()}
        />
        <Form
          active={this.state.activeForm}
          documentsShown={this.state.documentsShown}
          requisites={this.state.requisites}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          documentsShown={this.state.documentsShown}
        />
      </div>
    );
  };
}

export default App;

