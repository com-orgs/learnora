(function(){
"use strict";
const answers={
q1:{correct:"b",correctText:"B. Distance around a shape",explanation:"Perimeter is the total distance around the outside edge of a 2D shape."},
q2:{correct:"c",correctText:"C. 24 cm²",explanation:"Area = length × width = 6 × 4 = 24 square centimetres."},
q3:{correct:"a",correctText:"A. 20 m",explanation:"A square has four equal sides, so 4 × 5 = 20 metres."},
q4:{correct:"b",correctText:"B. 20 cm²",explanation:"Triangle area = 1/2 × base × perpendicular height = 1/2 × 8 × 5 = 20 cm²."},
q5:{correct:"b",correctText:"B. square metres",explanation:"Area is measured in square units. A floor is commonly measured in square metres."}
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
