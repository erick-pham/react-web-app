import React from 'react';
import './App.css';
import Header from './components/Header';
import People from './components/People';

function App() {
  const people = [{
    personNo: '1',
    firstName: 'Bill',
    lastName: 'Gates'
  },
  {
    personNo: '2',
    firstName: 'Donald',
    lastName: 'Trump'
  },
  {
    personNo: '3',
    firstName: 'Erick',
    lastName: 'Pham'
  },
  {
    personNo: '3',
    firstName: 'Erick',
    lastName: 'Pham'
  }, {
    personNo: '3',
    firstName: 'Erick',
    lastName: 'Pham'
  }, {
    personNo: '3',
    firstName: 'Erick',
    lastName: 'Pham'
  }];

  return (
    <div className="container-fluid">
      <Header />

      <People people={people} />
    </div>
  );
}

export default App;
