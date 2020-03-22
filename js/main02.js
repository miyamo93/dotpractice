'use strict';

{
  // stopwatch
  const timer02 = document.getElementById('timer02');
  const start02 = document.getElementById('start02');
  const stop02 = document.getElementById('stop02');
  const reset02 = document.getElementById('reset02');

  let startTime02;
  let timeoutId;
  let elapsedTime = 0 ;

  function countUp02(){
    const f = new Date(Date.now() - startTime02 + elapsedTime);
    const g = String(f.getMinutes()).padStart(2, '0');
    const h = String(f.getSeconds()).padStart(2, '0');
    const gh = String(f.getMilliseconds()).padStart(3, '0');
    timer02.textContent = `${g}:${h}.${gh}`;


    timeoutId = setTimeout(() => {
      countUp02();
    }, 10);
  }

  function setButtonStateInitial(){
    start02.disabled = false;
    stop02.disabled = true;
    reset02.disabled = true;
  }

  function setButtonStateRunning(){
    start02.disabled = true;
    stop02.disabled = false;
    reset02.disabled = true;
  }

  function setButtonStateStopped(){
    start02.disabled = false;
    stop02.disabled = true;
    reset02.disabled = false;
  }

  setButtonStateInitial();

  start02.addEventListener('click' , () => {
    setButtonStateRunning();
    startTime02 = Date.now();
    countUp02();
  });

  stop02.addEventListener('click' , () => {
    setButtonStateStopped();
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime02;
  });

  reset02.addEventListener('click' , () => {
    setButtonStateInitial();
    timer02.textContent = '00:00.000'; 
    elapsedTime = 0;
  });
}