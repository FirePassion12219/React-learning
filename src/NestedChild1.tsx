import React, { memo, useState, useEffect, useContext } from 'react';
import NestedNestedChild1 from './NestedNestedChild1';
import { UserContext } from './App';

const NestedChild1 = () => {
  const [child1Name, setChild1Name] = useState('');
  const { setName, setHusbandName } = useContext(UserContext);

  useEffect(() => {
    setChild1Name('Nested Child 1 component');
    setName('Roshani');
    setHusbandName('Abhi-Ji');
  }, []);

  return (
    <div>
      <p>{child1Name}</p>
      <NestedNestedChild1 />
    </div>
  );
};

export default memo(NestedChild1);
