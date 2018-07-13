import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { defineCustomElements } from 'echo-plex';
defineCustomElements(window);
ReactDOM.render(<App />, document.getElementById('root'));
