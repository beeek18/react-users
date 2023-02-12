import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <h1 className='textLeft'>Top</h1>
    <h1 className='textRigth'>Shueisha</h1>
  </React.StrictMode>,
);
