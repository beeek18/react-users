import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <p className='textLeft'>Top</p>
    <p className='textRigth'>Shueisha</p>
  </React.StrictMode>,
);
