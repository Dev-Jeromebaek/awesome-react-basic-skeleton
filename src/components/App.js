import React, { Component } from 'react';

import Test from '../components/Test';
import '../assets/stylesheets/css/style.css';
import image from '../assets/images/image.png';

class App extends Component {
  render() {
    const title = 'Hello React Skeleton';
    return (
      <div>
        <div className="hello">{title}</div>
        <img src={image} />
        <Test />
      </div>
    );
  }
}

export default App;
