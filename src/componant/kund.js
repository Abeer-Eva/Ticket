
import React from 'react';
import ReactDOM from 'react-dom';

export class Kund extends React.Component {
  render() {
    return (
      <form>
        <p>Enter your name:</p>
        <input
          type="text" 
          
        />
        <p>Enter your telefon number:</p>
        <input
          type="tel" 
          
        />
      </form>
    );
  }
}
ReactDOM.render(<Kund />, document.getElementById('root'));
