import React, { Component } from 'react';
import PTQ_EventForm1 from './components/PTQ_EventForm1';
import PTQ_EventForm2 from './components/PTQ_EventForm2';
import PTQ_EventForm3 from './components/PTQ_EventForm3';
import PTQ_EventForm4 from './components/PTQ_EventForm4';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Event Form Demo</h1>
        <PTQ_EventForm1 />
        <PTQ_EventForm2 />
        <PTQ_EventForm3 />
        <PTQ_EventForm4 name = "Draven" />
      </div>
    );
  }
}

export default App;