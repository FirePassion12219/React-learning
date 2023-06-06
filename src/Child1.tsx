import React, { memo, useState, useEffect } from 'react';
import NestedChild1 from './NestedChild1';

const Child1 = () => {
  const [child1Name, setChild1Name] = useState('');

  useEffect(() => {
    setChild1Name('Child 1 component');
  }, []);
  return (
    <div>
      <p>{child1Name}</p>
      <NestedChild1 />
    </div>
  );
};

export default memo(Child1);
