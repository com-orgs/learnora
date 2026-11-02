(function(){
"use strict";
const answers={
q1:{correct:"b",label:"B. $66",why:"10% of $60 is $6. Add it to $60 to get $66."},
q2:{correct:"a",label:"A. $75",why:"25% of $100 is $25. Subtract $25 from $100 to get $75."},
q3:{correct:"c",label:"C. 25%",why:"The increase is 10. Divide by the original 40: 10 ÷ 40 × 100% = 25%."},
q4:{correct:"b",label:"B. 0.70",why:"A 30% decrease leaves 70% of the original value; 70% = 0.70."},
q5:{correct:"b",label:"B. 25%",why:"The decrease is 20. Divide by the original 80: 20 ÷ 80 × 100% = 25%."}
};
const form=document.getElementById("quiz-form"),result=document.getElementById("result"),scoreEl=document.getElementById("score"),message=document.getElementById("message"),detail=document.getElementById("detail"),fill=document.getElementById("fill"),retake=document.getElementById("retake");
if(!form||!result||!scoreEl||!message||!detail||!fill||!retake)return;
form.addEventListener("submit",function(event){event.preventDefault();let score=0,answered=0;
Object.keys(answers).forEach(function(name){const item=answers[name],q=form.querySelector('[data-q="'+name+'"]'),selected=form.querySelector('input[name="'+name+'"]:checked'),feedback=q&&q.querySelector(".feedback");if(!feedback)return;feedback.hidden=false;feedback.className="feedback";if(!selected){feedback.classList.add("unanswered");feedback.textContent="Not answered. Correct answer: "+item.label+". "+item.why;return;}answered++;if(selected.value===item.correct){score++;feedback.classList.add("correct");feedback.textContent="Correct! "+item.why;}else{feedback.classList.add("incorrect");feedback.textContent="Incorrect. Correct answer: "+item.label+". "+item.why;}});
const total=Object.keys(answers).length,pct=Math.round(score/total*100);scoreEl.textContent=score+" / "+total;message.textContent=score===total?"Excellent! Perfect score.":score>=4?"Great work!":score>=3?"Good effort. Review the explanations and try again.":"Keep practising. Review the examples and try again.";detail.textContent=pct+"% correct · "+answered+" of "+total+" answered.";fill.style.width=pct+"%";result.style.display="block";
});
retake.addEventListener("click",function(){form.reset();form.querySelectorAll(".feedback").forEach(function(f){f.hidden=true;f.textContent="";f.className="feedback";});result.style.display="none";scoreEl.textContent="";message.textContent="";detail.textContent="";fill.style.width="0%";});
})();

document.addEventListener('click', function (event) { const button = event.target.closest('[data-print-worksheet]'); if (button) window.print(); });
