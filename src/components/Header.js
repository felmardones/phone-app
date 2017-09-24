import React, { Component } from 'react';
import Search from './Search';
class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      phones: this.props.phones,
      searchValue: this.props.searchValue,
      defaultPhones: this.props.defaultPhones
    }
  }
  searchFilter = (phones,text) =>{
      console.debug(phones[0]);
      this.setState({ phones:phones[0], SearchValue: text});
      this.props.updatePhones(phones[0]);
  };
  onChange = (event) => {
      this.setState({searchValue: event.target.value});
  };


  render(){
    return(
        <div className="row">
          <div className="col-lg-6">
            <h1 className="text-center">Phone List</h1>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <h1>Equipo</h1>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
               <Search Phones={this.props.Phones} submitSearch={ this.searchFilter } onChangeFx={this.onChange} SearchValue = {this.state.searchValue}/>
               <button type="button" onClick={this.props.Reset}>reset</button>
              </div> 
            </div>
          </div>
        </div>
      );
  }


}

export default Header;