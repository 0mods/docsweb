import React, { useEffect } from 'react';

/**
 * Нефиг копировать документацию >:(
 * Обычная защита от копирования текста, кода и картинок.
 *
 * @author \_BENDY659\_ & HalvaBot
*/
const DontCopyFunc = () => {
  useEffect(() => {
      document.addEventListener('copy', function (event) {
          event.preventDefault();
      });

      document.addEventListener('contextmenu', function (event) {
          event.preventDefault();
      });

      document.addEventListener('dragstart', function (event) {
          event.preventDefault();
      });
  })
}

export default DontCopyFunc;