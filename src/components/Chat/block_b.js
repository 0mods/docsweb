import React from 'react';
import type from './chatType.module.css';

const BlockB = ({children, time, user}) => {
  return (
    <div className={type.bbox}>
      <data>
        <user className={type.user}> {user} </user> <time className={type.time}> [{time}] </time>
      </data>
      <message className={type.message}> {children} </message>
    </div>
  );
};

export default BlockB;
