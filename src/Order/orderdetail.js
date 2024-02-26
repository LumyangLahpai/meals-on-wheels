
import React, { useState } from 'react';

const PlaceQuestion = () => {
  const [place, setPlace] = useState('');

  const handleInputChange = (event) => {
    setPlace(event.target.value);
  };

  const handleCheckPlace = () => {
    if (place.toLowerCase() === 'myitkyina city') {
      alert('Great choice! You can have your order in hot meal just in a few minutes.');
    } else if (place.toLowerCase() === 'myitkyina') {
      alert('Nice! You will have your order in frozen meal.');
    } else {
      alert(`I'm not familiar with ${place}. Tell me more about it!`);
    }
  };

  return (
    <div>
      <label htmlFor="placeInput">Enter your place:</label>
      <input
        type="text"
        id="placeInput"
        value={place}
        onChange={handleInputChange}
      />
      <button onClick={handleCheckPlace}>Submit</button>
    </div>
  );
};

export default PlaceQuestion;
