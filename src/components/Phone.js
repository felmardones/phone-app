import React, { Component } from 'react';
  //Stateless Function
  const Phone = (props) => {
    return(
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-40">
        <div className="img">
          <img className="img-responsive" src="http://lorempixel.com/600/600/technics/" />
        </div>
        <h4 className="text-center">{ props.data.DeviceName }</h4>
        <h5 className="text-center">{ props.data.Brand}</h5>
      </div>
    );
  }

export default Phone;