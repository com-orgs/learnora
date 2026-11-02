(function(){
"use strict";
const answers={
q1:{correct:"b",label:"B. A smaller group selected from a population",why:"A sample is a subset selected to provide information about the wider population."},
q2:{correct:"b",label:"B. 6",why:"The five values are already ordered; 6 is the middle value."},
q3:{correct:"c",label:"C. 1/2",why:"Three of six outcomes (2, 4 and 6) are even, so 3/6 = 1/2."},
q4:{correct:"a",label:"A. 3/5",why:"Experimental probability = 12/20 = 3/5."},
q5:{correct:"b",label:"B. Median",why:"A single extreme value usually changes the mean more than it changes the median."}
};
const form=document.getElementById("quiz-form"),result=document.getElementById("quiz-result");
const score=document.getElementById("score-number"),message=document.getElementById("score-message"),detail=document.getElementById("score-detail"),bar=document.getElementById("progress-fill"),retake=document.getElementById("retake-quiz"),print=document.getElementById("print-worksheet");
if(!form||!result||!score||!message||!detail||!bar||!retake||!print){console.error("Quiz setup incomplete: required elements are missing.");return;}
form.addEventListener("submit",function(event){
event.preventDefault();let points=0,answered=0;
Object.keys(answers).forEach(function(key){
const answer=answers[key],question=form.querySelector('[data-question="'+key+'"]'),choice=form.querySelector('input[name="'+key+'"]:checked'),feedback=question.querySelector(".feedback");
feedback.hidden=false;feedback.className="feedback";
if(!choice){feedback.classList.add("unanswered");feedback.textContent="Not answered. Correct answer: "+answer.label+". "+answer.why;return;}
answered++;
if(choice.value===answer.correct){points++;feedback.classList.add("correct");feedback.textContent="Correct! "+answer.why;}
else{feedback.classList.add("incorrect");feedback.textContent="Not quite. Correct answer: "+answer.label+". "+answer.why;}
});
const total=Object.keys(answers).length,percent=Math.round(points/total*100);
score.textContent=points+" / "+total;detail.textContent=percent+"% correct · "+answered+" of "+total+" questions answered.";bar.style.width=percent+"%";
message.textContent=points===total?"Excellent — a perfect score!":points>=4?"Great work. Review any feedback to strengthen your understanding.":points>=3?"Good effort. Revisit the examples and try again.":"Keep practising. Review the lesson, then retake the quiz.";
result.style.display="block";
});
retake.addEventListener("click",function(){
form.reset();form.querySelectorAll(".feedback").forEach(function(item){item.hidden=true;item.textContent="";item.className="feedback";});
score.textContent="0 / 5";message.textContent="";detail.textContent="0% correct · 0 of 5 questions answered.";bar.style.width="0%";result.style.display="none";
});
print.addEventListener("click",function(){window.print();});
})();
