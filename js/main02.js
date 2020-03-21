'use strict';

{
  // stopwatch
  const timer02 = document.getElementById('timer02');
  const start02 = document.getElementById('start02');
  const stop02 = document.getElementById('stop02');
  const restart02 = document.getElementById('restart02');

  let startTime02;
  let timeoutId;

  function countUp02(){
    console.log(Date.now() - startTime02);
    new Date();
    const f = new Date(Date.now() - startTime02);
    const g = String(f.getMinutes()).padStart(2, '0');
    const h = String(f.getSeconds()).padStart(2, '0');
    const gh = String(f.getMilliseconds()).padStart(3, '0');
    timer02.textContent = `${g}:${h}.${gh}`;


    setTimeout(() => {
      countUp02();
    }, 10);
  }

  start02.addEventListener('click' , () => {
    startTime02 = Date.now();
    countUp02();
  });

  stop02.addEventListener('click' , () => {
    clearTimeout02();
  });
}