import React, { Component } from 'react';
import Phone from'./Phone';

class PhonesList extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const list = this.props.Phones;
    //print all phone 
    const items = list.map((itemPhone, index) => 
                   <Phone key={index} index={index} data={itemPhone} />
               );
    //create arr to put in component Phone and manage clearfix***
    const arr = [];
    list.map((p,i) =>{
      if(i % 4 === 0){
        let a = i+'a';//for key
        arr.push(<div key={a} className='clearfix' />);
        arr.push(items[i]);
      }else{
        arr.push(items[i]);
      }
      return arr;
    });
    const clearfix = '<div className="clearfix"></div>';
    return( 
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-40">
            { arr }
          </div>
        </div> 
    );
  }


}


export default PhonesList;