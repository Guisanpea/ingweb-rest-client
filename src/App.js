import React, {useState} from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Chat} from './layouts/Chat';
import {Google} from './components/Google';

export const url = "https://ingweb-paas.herokuapp.com";

function App() {
  const [logged, setLogged] = useState(!!localStorage.getItem("google"));
  return (
     <div>
       <Google logged={logged} setLogged={setLogged}/>
       {logged ?
          <Chat/>
          : ""
       }
     </div>
  );
}

export default App;
