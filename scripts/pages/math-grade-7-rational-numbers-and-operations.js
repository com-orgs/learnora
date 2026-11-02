(function(){
"use strict";
const answers={
q1:{correct:"a",correctText:"A. It can be written as a/b, where a and b are integers and b is not zero.",explanation:"This is the definition of a rational number. Integers, fractions and terminating or repeating decimals are rational."},
q2:{correct:"b",correctText:"B. −1/2",explanation:"−1/2 is −0.5, which is greater than −0.75 (−3/4) because it is farther right on the number line."},
q3:{correct:"c",correctText:"C. 3/4",explanation:"The denominators are already equal, so add the numerators: 1 + 2 = 3. Keep the denominator 4."},
q4:{correct:"a",correctText:"A. −1/2",explanation:"Multiply numerators and denominators: (−2 × 3)/(3 × 4) = −6/12 = −1/2."},
q5:{correct:"b",correctText:"B. 2",explanation:"Divide by 1/3 by multiplying by its reciprocal: 2/3 × 3/1 = 2."}
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
scoreMessage.textContent=score===total?"Excellent! Perfect score.":score>=4?"Great work! Review any missed explanation.":score>=3?"Good effort! Review the lesson and try again.":"Keep practising! Revisit the examples and try again.";
result.style.display="block";result.scrollIntoView({behavior:"smooth",block:"nearest"});
});
retakeButton.addEventListener("click",function(){
form.reset();form.querySelectorAll(".quiz-feedback").forEach(function(feedback){feedback.hidden=true;feedback.textContent="";feedback.className="quiz-feedback";});
scoreNumber.textContent="0 / 5";scoreMessage.textContent="";scoreDetail.textContent="0% correct · 0 of 5 questions answered.";progressFill.style.width="0%";result.style.display="none";
});
const printButton=document.getElementById("print-worksheet");if(printButton)printButton.addEventListener("click",function(){window.print();});
})();
