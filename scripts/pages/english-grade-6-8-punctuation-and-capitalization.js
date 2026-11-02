(()=>{"use strict";
const answers={
q1:{correct:"b",label:"B. Question mark",why:"A direct question normally ends with a question mark."},
q2:{correct:"b",label:"B. The dog's collar is blue.",why:"The apostrophe marks possession: the collar belongs to one dog."},
q3:{correct:"c",label:"C. Tuesday",why:"Days of the week are proper names and begin with capital letters."},
q4:{correct:"a",label:"A. I was tired; I went to bed early.",why:"A semicolon can join two closely related independent clauses."},
q5:{correct:"a",label:"A. “Where are you?” asked Noor.",why:"The spoken question is enclosed in quotation marks, with its question mark inside."}
};
const form=document.getElementById("quiz-form");
const result=document.getElementById("quiz-result");
const score=document.getElementById("score-number");
const message=document.getElementById("score-message");
const detail=document.getElementById("score-detail");
const retake=document.getElementById("retake-quiz");
if(form&&result&&score&&message&&detail&&retake){
form.addEventListener("submit",event=>{
event.preventDefault();let points=0,answered=0;
Object.entries(answers).forEach(([name,item])=>{
const field=form.querySelector('[data-question="'+name+'"]');
const selected=form.querySelector('input[name="'+name+'"]:checked');
const feedback=field&&field.querySelector(".quiz-feedback");
if(!feedback)return;
feedback.hidden=false;feedback.className="quiz-feedback";
if(!selected){feedback.classList.add("unanswered");feedback.textContent="Not answered. Correct answer: "+item.label+". "+item.why;return;}
answered++;
if(selected.value===item.correct){points++;feedback.classList.add("correct");feedback.textContent="Correct! "+item.why;}
else{feedback.classList.add("incorrect");feedback.textContent="Not quite. Correct answer: "+item.label+". "+item.why;}
});
score.textContent=points+" / 5";
message.textContent=points===5?"Excellent! Perfect score.":points>=4?"Great work. Review any feedback and keep practising.":points>=3?"Good effort. Revisit the examples and try again.":"Keep practising. Review the lesson, then retake the quiz.";
detail.textContent=Math.round(points/5*100)+"% correct · "+answered+" of 5 questions answered.";
result.style.display="block";
});
retake.addEventListener("click",()=>{
form.reset();
form.querySelectorAll(".quiz-feedback").forEach(item=>{item.hidden=true;item.textContent="";item.className="quiz-feedback";});
score.textContent="";message.textContent="";detail.textContent="";result.style.display="none";
});
}
document.addEventListener("click",event=>{const button=event.target.closest("[data-print-worksheet]");if(button)window.print();});
})();