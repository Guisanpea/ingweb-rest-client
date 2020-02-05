import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Chat} from './layouts/Chat';

export const url = "http://localhost:8080";

function App() {
  return (
    <Chat/>
  );
}

export default App;
