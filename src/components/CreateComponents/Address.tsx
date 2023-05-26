import React, { useEffect, useState } from 'react';

const Address: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
      return () => {
        setIsVisible(false);
      };
    }, []);
  
    return (
      <div
        className={`fade-in-right ${isVisible ? 'visible' : 'hidden'}`}
        onAnimationEnd={() => setIsVisible(false)}
      >
        <h1>asd adasd asd asd !</h1>
        <p>This is a basiasdasd asdaact homepage.</p>
      </div>
    );
};

export default Address;