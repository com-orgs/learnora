(function(){
"use strict";
const answers={
q1:{correct:"a",correctText:"A. 9x",explanation:"Both terms contain x. Add the coefficients: 3 + 6 = 9."},
q2:{correct:"b",correctText:"B. 3a and −7a",explanation:"Both terms have the same variable a to the same power."},
q3:{correct:"b",correctText:"B. 4x + 8",explanation:"Multiply 4 by x and by 2: 4x + 8."},
q4:{correct:"c",correctText:"C. −3x + 3",explanation:"5 − 8 = −3, so the variable terms combine to −3x."},
q5:{correct:"a",correctText:"A. 9",explanation:"Substitute 4: 2(4) + 1 = 8 + 1 = 9."}
};
const form=document.getElementById("quiz-form"),result=document.getElementById("quiz-result");
const scoreNumber=document.getElementById("score-number"),scoreMessage=document.getElementById("score-message"),scoreDetail=document.getElementById("score-detail"),progressFill=document.getElementById("progress-fill"),retakeButton=document.getElementById("retake-quiz"),printButton=document.getElementById("print-worksheet");
if(form&&result&&scoreNumber&&scoreMessage&&scoreDetail&&progressFill&&retakeButton){
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
scoreMessage.textContent=score===total?"Excellent! Perfect score.":score>=4?"Great work! Review the explanations to strengthen your skills.":score>=3?"Good effort! Review the lesson and try again.":"Keep practising! Review the examples and try again.";
result.style.display="block";
});
retakeButton.addEventListener("click",function(){
form.reset();form.querySelectorAll(".quiz-feedback").forEach(function(feedback){feedback.hidden=true;feedback.textContent="";feedback.className="quiz-feedback";});
scoreNumber.textContent="0 / 5";scoreMessage.textContent="";scoreDetail.textContent="0% correct · 0 of 5 questions answered.";progressFill.style.width="0%";result.style.display="none";
});
}
if(printButton){printButton.addEventListener("click",function(){window.print();});}
})();
