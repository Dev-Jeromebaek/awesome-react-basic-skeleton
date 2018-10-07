import React, { Component } from 'react';

import Test from './Test';
import '../assets/css/style.css';

class App extends Component {
  render() {
    const title = 'Hello React Skeleton';
    return (
      <div>
        <div className="hello">{title}</div>
        <img src="src/assets/images/image.png" />
        <Test />
      </div>
    );
  }
}

export default App;
