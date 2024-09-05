import React, { useEffect } from 'react';

const Helper = ({ children }) => {
  useEffect(() => {
    const article = document.querySelector('article');
    const targetElement = document.querySelector('.theme-doc-markdown.markdown');
    if (article && targetElement) {
      const newElement = document.createElement('div');
      newElement.className = 'helper';
      newElement.textContent = children;
      article.insertBefore(newElement, targetElement);
    }
  }, [children]);

  return null;
};

export default Helper;