(function(){
"use strict";
const answers={
q1:{correct:"b",correctText:"B. 2 × 5",explanation:"Multiplication is completed before addition and subtraction."},
q2:{correct:"b",correctText:"B. 30",explanation:"Calculate the brackets first: 6 + 4 = 10. Then 10 × 3 = 30."},
q3:{correct:"b",correctText:"B. 8",explanation:"Division and multiplication have equal priority. Work left to right: 24 ÷ 6 = 4, then 4 × 2 = 8."},
q4:{correct:"b",correctText:"B. 8",explanation:"Multiply first: 4 × 3 = 12. Then 20 − 12 = 8."},
q5:{correct:"b",correctText:"B. 14",explanation:"Addition and subtraction have equal priority. Work left to right: 15 − 4 = 11, then 11 + 3 = 14."}
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
