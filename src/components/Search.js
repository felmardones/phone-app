import React, { Component } from 'react';

export default class Search extends Component{
  constructor(props){
    super(props);
  };
  handlerSubmit = (e) =>{
   e.preventDefault();

     if(this.props.SearchValue !== ''){
      const phones = this.props.Phones;
      const searchText = this.props.SearchValue;
      const index = [];
      index.push(phones.filter((element) => {  
        return element.Brand ===  searchText }
        ).map(function( obj ) {
          return obj;
        }));
      this.props.submitSearch(index,searchText);
    }else{
      return null;
    }
  };

  updateValue = (event)=>{

    this.props.onChangeFx(event);
  }
  render(){
    return(
      <form onSubmit={this.handlerSubmit}>
        <input type="text" className="search" value={this.props.searchValue} onChange={this.updateValue} placeholder="Buscador" />
        <button type="submit"><span className="glyphicon glyphicon-search"></span></button>  
      </form>
    );
  }
}


//export default Search;