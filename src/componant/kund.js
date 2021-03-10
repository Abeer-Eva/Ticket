
import React from 'react';
import ReactDOM from 'react-dom';

export class Kund extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p style={{margin:0}}>Enter your name:</p>
        <input
          type="text" 
          
          
        />
        <p style={{margin:0}}>Enter your telefon number:</p>
        <input
          type="tel" 
          
          
        />
      </form>
    );
  }
}

