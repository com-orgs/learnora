(function(){
"use strict";
const answers={
q1:{correct:"b",correctText:"B. 5/8",explanation:"The denominators are the same, so compare the numerators. Five is greater than three."},
q2:{correct:"c",correctText:"C. 2/5",explanation:"The numerators are the same. Fifths are larger parts than sevenths, so 2/5 is greater."},
q3:{correct:"a",correctText:"A. 9/12",explanation:"Multiply the numerator and denominator of 3/4 by 3 to get 9/12."},
q4:{correct:"b",correctText:"B. 5/6 is greater than 7/9",explanation:"5/6 = 15/18 and 7/9 = 14/18. Since 15 is greater than 14, 5/6 is greater."},
q5:{correct:"c",correctText:"C. 1/3, 1/2, 3/4",explanation:"Using denominator 12 gives 4/12, 6/12 and 9/12. The correct order is 1/3, 1/2, 3/4."}
};
const form=document.getElementById("quiz-form"),result=document.getElementById("quiz-result");
const scoreNumber=document.getElementById("score-number"),scoreMessage=document.getElementById("score-message"),scoreDetail=document.getElementById("score-detail"),progressFill=document.getElementById("progress-fill"),retakeButton=document.getElementById("retake-quiz");
if(!form||!result||!scoreNumber||!scoreMessage||!scoreDetail||!progressFill||!retakeButton){console.error("Quiz could not start: required element missing.");return;}
form.addEventListener("submit",function(event){
event.preventDefault();let score=0,answered=0;
Object.keys(answers).forEach(function(name){
const item=answers[name],question=form.querySelector('[data-question="'+name+'"]'),selected=form.querySelector('input[name="'+name+'"]:checked'),feedback=question&&question.querySelector(".quiz-feedback");
if(!feedback)return;feedback.hidden=false;feedback.className="quiz-feedback";
if(!selected){feedback.classList.add("unanswered");feedback.textContent="Not answered. Correct answer: "+item.correctText+". "+item.explanation;return;}
answered++;if(selected.value===item.correct){score++;feedback.classList.add("correct");feedback.textContent="Correct! "+item.explanation;}
else{feedback.classList.add("incorrect");feedback.textContent="Incorrect. Correct answer: "+item.correctText+". "+item.explanation;}
});
const total=Object.keys(answers).length,percent=Math.round(score/total*100);
scoreNumber.textContent=score+" / "+total;scoreDetail.textContent=percent+"% correct · "+answered+" of "+total+" questions answered.";progressFill.style.width=percent+"%";
scoreMessage.textContent=score===total?"Excellent! Perfect score.":score>=4?"Great work! You understand this topic very well.":score>=3?"Good effort! Review the explanations and try again.":"Keep practising! Review the lesson and try again.";
result.style.display="block";
});
retakeButton.addEventListener("click",function(){
form.reset();form.querySelectorAll(".quiz-feedback").forEach(function(feedback){feedback.hidden=true;feedback.textContent="";feedback.className="quiz-feedback";});
scoreNumber.textContent="0 / 5";scoreMessage.textContent="";scoreDetail.textContent="0% correct · 0 of 5 questions answered.";progressFill.style.width="0%";result.style.display="none";
});
})();

document.addEventListener('click', function (event) { const button = event.target.closest('[data-print-worksheet]'); if (button) window.print(); });
