import React from 'react';
import './left.css';

const NpcLeft = ({children, emote}) => {
  return (
    <div className="box">
      <div className="gif">
        ![{emote}](@site/static/img/doc/npc/{emote}.gif)
      </div>
      <div className="txt">
        {children}
      </div>
    </div>
  );
};

export default NpcLeft;