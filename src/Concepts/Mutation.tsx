import React, { useEffect, useState } from 'react';

const Mutation = (props) => {
  const [personDetails, setPersonDetails] = useState({});
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    const details = {
      first: 'Arpita',
      last: 'Tripathi',
      email: 'abc@gmail.com',
      city: 'Ujjain',
      mobile: 9109568856,
      pinCode: 476444,
    };
    setPersonDetails(details);
    setFriendList(['Pourush']);
  }, []);

  const handleCity = () => {
    setPersonDetails({
      ...personDetails,
      city: personDetails.city === 'Ujjain' ? 'Bamore' : 'Ujjain',
    });
  };

  const handleFriend = () => {
    if (friendList.includes('Abhishek')) {
      console.log('Already Friend');
    } else {
      setFriendList([...friendList, 'Abhishek']);
    }
  };

  return (
    <div>
      <p>Person Details are shown below</p>
      <p>First Name: {personDetails.first}</p>
      <p>Last Name: {personDetails.last}</p>
      <p>Email: {personDetails.email}</p>
      <p>City: {personDetails.city}</p>
      <p>Mobile: {personDetails.mobile}</p>
      <p>Pin Code: {personDetails.pinCode}</p>
      <button onClick={handleCity}>Update City</button>
      <br />
      <br />

      <p>Friend List of Arpita</p>
      <ul>
        {friendList.map((friend) => {
          return <li>{friend}</li>;
        })}
      </ul>
      <button onClick={handleFriend}>Add New Friend</button>
    </div>
  );
};

export default Mutation;
