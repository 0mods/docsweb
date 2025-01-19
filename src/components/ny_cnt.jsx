import React, { useEffect } from 'react';

import '@site/src/css/pages/img-show.css';
import { Random, Part } from '@site/src/packs/random_new.js';
import PlayerNoBar from '@site/src/components/video_player/VideoPlayerNoBar.tsx';

function NYCnt() {
  return (
    <div className="show" id="mask">
      <PlayerNoBar url={require("@site/static/img/doc/titles/WelcomeCrismas.mp4").default} />
    </div>
  );
}

function DCnt() {
  return (
    <div className="show" id="mask">
      <Random max="100">
        <Part low="0" high="99">
          <img src={require("@site/static/img/doc/titles/Welcome0.webp").default} />
        </Part>
        <Part low="100" high="100">
          <img src={require("@site/static/img/doc/titles/Welcum.png").default} />
        </Part>
      </Random>
    </div>
  );
}

const DateContent = () => {
  const cDate = new Date(); // Текущая дата

  const nyContent = (
    cDate >= new Date(cDate.getFullYear(), 11, 25) // 25 декабря текущего года
    &&
    cDate <= new Date(cDate.getFullYear() + 1, 0, 8, 23, 59, 59) // 8 января следующего года (включительно)
  )

  // Debugging //
  const debug = false;
  const debugTodayNY = false;

  const testDate = new Date(2025, 0, 0);
  const testNY = (
    testDate >= new Date(testDate.getFullYear(), 11, 25) // 25 декабря текущего года
    &&
    testDate <= new Date(testDate.getFullYear() + 1, 1, 8, 23, 59, 59) // 8 января следующего года (включительно)
  )

  if (debug) {
    console.log(
      `
      | Today New Year: ${nyContent}.
      | Current Date: ${cDate.toDateString()}.
      | ====
      | BeforeNY: ${(new Date(testDate.getFullYear(), 11, 25)).toDateString()}.
      | AfterNY: ${(new Date(testDate.getFullYear() + 1, 0, 8, 23, 59, 59)).toDateString()}.
      | TestDate: ${testDate.toDateString()}.
      | ----
      | TEST-Today New Year: ${testNY}
      `
    );
  }
  // ---- //

  let content = DCnt();

  if (nyContent || debugTodayNY) {
    if(debug && testNY) {
      console.log('Сегодня (фейковы) новый год, ребята!');
    } else {
      console.log('Сегодня Новый Год, ребята!');
    }
    content = NYCnt();
  }

  return content;
};

export default DateContent;
