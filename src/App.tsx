import React, { useState } from 'react';
import './style.css';
import Child1 from './Child1';

export const UserContext = React.createContext({});

export default function App() {
  const [name, setName] = useState('');
  const [husbandName, setHusbandName] = useState('');

  return (
    <UserContext.Provider
      value={{ name, husbandName, setName, setHusbandName }}
    >
      <div>
        <h1>Context API Example</h1>
        <p>We are going to see some magic :)</p>
        <div>
          <Child1 />
        </div>
      </div>
    </UserContext.Provider>
  );
}
