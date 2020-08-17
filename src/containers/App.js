import React, { Component } from 'react';
import './App.css';
import Form from '../components/Form/Form.js';
import ControlPanel from '../components/ControlPanel/ControlPanel.js';

class App extends Component {
  state = {
    activeForm: 'entepreneur',
    requisites: {
      name: '',
      itn: '',
      psrn: '',
      iac: '',
      adress: '',
      phone: '',
      ceo: '',
      email: '',
    },
    termsOfUse: '',
  };



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

  handleChange = (e) => {
    const inputName = e.target.name;
    const newRequisites = {...this.state.requisites};
    newRequisites[inputName] = e.target.value;
    
    this.setState({ requisites: newRequisites});
  }

  render() {
    return (
      <div className="App">
        <h2>Выберите тип организации(ООО или ИП) и заполните форму с реквизитами</h2>
        <ControlPanel 
        showEnterpreneurForm={() => this.toggleEnterpreneurForm()}
        showLegalForm={() => this.toggleLegalForm()} />
        <Form
        active={this.state.activeForm}
        requisites={this.state.requisites}
        handleChange={this.handleChange}
        termsOfUse={this.state.termsOfUse}
        />
      </div>
    );
  };
}

export default App;
