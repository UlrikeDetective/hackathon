import React from 'react';

const images = [
  '/images/SkateboardWitch.png',
  '/images/SUPWitch_V02.png',
  '/images/SUPWitch.png',
];

const TrickOrTreat = () => {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div>
      <h1>Happy Halloween</h1>
      <img src={randomImage} alt="A Halloween surprise" style={{ maxWidth: '500px' }}/>
    </div>
  );
};

export default TrickOrTreat;
