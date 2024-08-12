import React, { useEffect } from 'react';

const Close = () => {
  useEffect(() => {
    window.location.href = 'about:blank';
  }, []);

  return console.log("Close page...");
};

export default Close;