(function(){
"use strict";
const answers={
q1:{correct:"c",correctText:"C. −11",explanation:"Both numbers are negative. Add 7 and 4, then keep the negative sign."},
q2:{correct:"a",correctText:"A. 4",explanation:"The signs differ. Subtract 5 from 9 and keep the positive sign."},
q3:{correct:"b",correctText:"B. 8",explanation:"Subtracting a negative is addition: 6 − (−2) = 6 + 2."},
q4:{correct:"c",correctText:"C. −8",explanation:"Rewrite as −3 + (−5). Add 3 and 5 and keep the negative sign."},
q5:{correct:"b",correctText:"B. 5",explanation:"The signs differ. 9 − 4 = 5, and 9 has the larger absolute value."}
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
