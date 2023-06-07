import React, { memo, useState, useEffect, useContext } from 'react';
import { UserContext } from './Contexts/UserContext';

const NestedNestedChild1 = () => {
  const [child1Name, setChild1Name] = useState('');
  const { name, husbandName } = useContext(UserContext);

  console.log('name --->>>', name, husbandName);

  useEffect(() => {
    setChild1Name('Nested Nested Child 1 component');
  }, []);

  return (
    <div>
      <p>{child1Name}</p>
      <p>Wife Name is : {name}</p>
      <p>Husband Name is : {husbandName}</p>
    </div>
  );
};

export default memo(NestedNestedChild1);
