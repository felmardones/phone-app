import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import PhonesList from'./components/PhonesList';
class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      defaultPhones : [],
      phones : [],
      searchValue: ''
    };
  }
  componentWillMount() {
    fetch('https://fonoapi.freshpixl.com/v1/getlatest?token=40b3c69d5cacc050986952d1a24de469d431e9338c204a27&limit=20')
      .then((response) => {
        return response.json()
      })
      .then((phones) => {
        this.setState({ defaultPhones: phones, phones:phones })
      })
  }
  updatePhones = (phones) => {
    this.setState({ phones: phones });
  }

  resetPhones = () => {
    console.log("RESET");
    this.setState({  phones:this.state.defaultPhones });
  }
  render() {
    return (
      <div className="wrapper container">
       <Header Reset={ this.resetPhones } Phones={this.state.defaultPhones} searchValue={this.state.searchValue} updatePhones={ this.updatePhones }/>
       <Filters />
       <PhonesList Phones={this.state.phones} />
     </div>
    );
  }
}

export default App;
