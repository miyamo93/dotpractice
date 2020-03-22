'use strict'

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const qbtn = document.getElementById('qbtn');

  const quizSet = [
    {q: 'Whoat is A?', c:['A0' ,'A1' ,'A2' ]},
    {q: 'Whoat is B?', c:['B0' ,'B1' ,'B2' ]},
    {q: 'Whoat is C?', c:['C0' ,'C1' ,'C2' ]}
  ]
  let currentNum = 0;
  
  question.textContent = quizSet[currentNum].q;

  function shuffle(arr){
    
    for (let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i] = arr[i],arr[j]];
    }
    return arr;
  }

  quizSet[currentNum].c.forEach(choice => {
    const li = document.createElement('li');
    li.textContent = choice;
    choices.appendChild(li)
  });
}