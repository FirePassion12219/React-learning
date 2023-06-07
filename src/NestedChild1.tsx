import React, { memo, useState, useEffect, useContext } from 'react';
import NestedNestedChild1 from './NestedNestedChild1';
import { UserContext } from './Contexts/UserContext';
import { TechContext } from './Contexts/TechContext';

const NestedChild1 = () => {
  const [child1Name, setChild1Name] = useState('');
  const { setName, setHusbandName } = useContext(UserContext);
  const { techSkill, setTechSkill } = useContext(TechContext);

  useEffect(() => {
    setChild1Name('Nested Child 1 component');
    setName('Roshani');
    setHusbandName('Abhi-Ji');
    if (setTechSkill) {
      setTechSkill('React');
    }
  }, []);

  return (
    <div>
      {/* <p>{child1Name}</p> */}
      {/* <NestedNestedChild1 /> */}
      <p>Tech Skill is : {techSkill}</p>
    </div>
  );
};

export default memo(NestedChild1);
