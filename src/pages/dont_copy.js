import React, { useEffect } from 'react';

/**
 * Нефиг копировать документацию >:(
 * Обычная защита от копирования текста, кода и картинок.
 *
 * @author \_BENDY659\_ & HalvaBot
*/
const DontCopyFunc = () => {
  useEffect(() => {
      document.addEventListener('DOMContentLoaded', function () {
          document.addEventListener('copy', function (event) {
              event.preventDefault(); event.cancelable = true; alert("Неа!")
          });

          document.addEventListener('contextmenu', function (event) {
              event.preventDefault(); event.cancelable = true; alert("Неа!")
          });

          document.addEventListener('dragstart', function (event) {
              event.preventDefault(); event.cancelable = true; alert("Неа")
          });
      })
  })
}

export default DontCopyFunc;