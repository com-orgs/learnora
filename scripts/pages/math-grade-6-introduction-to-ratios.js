(function(){
"use strict";
const answers={
q1:{correct:"b",correctText:"B. 4 : 3",explanation:"The question asks for pears to apples. There are 4 pears and 3 apples, so the ratio is 4 : 3."},
q2:{correct:"c",correctText:"C. 2 : 3",explanation:"Divide both 6 and 9 by their greatest common factor, 3. The result is 2 : 3."},
q3:{correct:"a",correctText:"A. 4 : 10",explanation:"Multiply both terms of 2 : 5 by 2 to get 4 : 10."},
q4:{correct:"b",correctText:"B. 12",explanation:"3 is multiplied by 3 to become 9, so multiply 4 by 3 to get 12."},
q5:{correct:"c",correctText:"C. 2 : 3",explanation:"Divide both 8 and 12 by 4 to get 2 : 3."}
};
const form=document.getElementById("quiz-form");
const result=document.getElementById("quiz-result");
const scoreNumber=document.getElementById("score-number");
const scoreMessage=document.getElementById("score-message");
const scoreDetail=document.getElementById("score-detail");
const progressFill=document.getElementById("progress-fill");
const retakeButton=document.getElementById("retake-quiz");
if(!form||!result||!scoreNumber||!scoreMessage||!scoreDetail||!progressFill||!retakeButton){console.error("Quiz could not start: required element missing.");return;}
form.addEventListener("submit",function(event){
event.preventDefault();
let score=0;let answered=0;
Object.keys(answers).forEach(function(name){
const item=answers[name];
const question=form.querySelector('[data-question="'+name+'"]');
const selected=form.querySelector('input[name="'+name+'"]:checked');
const feedback=question&&question.querySelector(".quiz-feedback");
if(!feedback)return;
feedback.hidden=false;feedback.className="quiz-feedback";
if(!selected){feedback.classList.add("unanswered");feedback.textContent="Not answered. Correct answer: "+item.correctText+". "+item.explanation;return;}
answered++;
if(selected.value===item.correct){score++;feedback.classList.add("correct");feedback.textContent="Correct! "+item.explanation;}
else{feedback.classList.add("incorrect");feedback.textContent="Incorrect. Correct answer: "+item.correctText+". "+item.explanation;}
});
const total=Object.keys(answers).length;const percent=Math.round(score/total*100);
scoreNumber.textContent=score+" / "+total;
scoreDetail.textContent=percent+"% correct · "+answered+" of "+total+" questions answered.";
progressFill.style.width=percent+"%";
scoreMessage.textContent=score===total?"Excellent! Perfect score. Keep it up!":score>=4?"Great work! You understand ratios very well.":score>=3?"Good effort! Review the explanations and try again.":"Keep practising! Review the lesson and try again.";
result.style.display="block";
});
retakeButton.addEventListener("click",function(){
form.reset();
form.querySelectorAll(".quiz-feedback").forEach(function(feedback){feedback.hidden=true;feedback.textContent="";feedback.className="quiz-feedback";});
scoreNumber.textContent="0 / 5";scoreMessage.textContent="";scoreDetail.textContent="0% correct · 0 of 5 questions answered.";progressFill.style.width="0%";result.style.display="none";
});
})();

document.addEventListener('click', function (event) { const button = event.target.closest('[data-print-worksheet]'); if (button) window.print(); });
