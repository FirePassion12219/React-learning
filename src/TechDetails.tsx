import React, { memo, useState, useEffect, useContext } from 'react';
import NestedChild1 from './NestedChild1';
// import { UserContext } from './Contexts/UserContext';

import { TechContext } from './Contexts/TechContext';

const TechDetails = () => {
  const [child1Name, setChild1Name] = useState('');
  const [techSkill, setTechSkill] = useState('');
  // const { name } = useContext(UserContext);

  useEffect(() => {
    setChild1Name('TechDetails component');
  }, []);

  return (
    <TechContext.Provider value={{ techSkill, setTechSkill }}>
      <div>
        <p>{child1Name}</p>
        {/* <p>Name is: {name}</p> */}
        <NestedChild1 />
      </div>
    </TechContext.Provider>
  );
};

export default memo(TechDetails);
