import React from 'react';
import ReactDOM from 'react-dom/client';
import Experience from './Experience.jsx';
import './style.css';
import '../i18n.js';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <React.StrictMode>
        <Experience />
    </React.StrictMode>
);
