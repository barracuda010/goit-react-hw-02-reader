import React from 'react';
import ReactDOM from 'react-dom';
import publications from './components/Publication/publications.json';
import App from './App';

ReactDOM.render(<App items={publications} />, document.getElementById('root'));
