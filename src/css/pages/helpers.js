import React from 'react';

const Helper = ({ name, children }) => {
  const article = document.querySelector('article');
  const newElement = document.createElement('div');
  newElement.textContent = 'Новый элемент';
  article.appendChild(newElement;);
}

export default Helper;