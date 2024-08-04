import React from 'react';
import '@site/src/css/pages/img-show.css';

const TitleImg = ({ children }) => {

  return (
    <div className="show">
      <div className="mask">

      ![{children}](@site/static/img/doc/titles/{children}.png)

      </div>
    </div>
  );
};

export default TitleImg;