(function(){
"use strict";
const answers={
q1:{correct:"b",label:"B. 200 cm",why:"1 metre equals 100 centimetres, so 2 × 100 = 200 cm."},
q2:{correct:"c",label:"C. 3,500 g",why:"1 kilogram equals 1,000 grams, so 3.5 × 1,000 = 3,500 g."},
q3:{correct:"a",label:"A. 0.5 L",why:"1 litre equals 1,000 millilitres, so 500 ÷ 1,000 = 0.5 L."},
q4:{correct:"c",label:"C. Multiply by 1,000",why:"A kilometre contains 1,000 metres, so 4 × 1,000 = 4,000 m."},
q5:{correct:"a",label:"A. 7.5 cm",why:"10 millimetres equal 1 centimetre, so 75 ÷ 10 = 7.5 cm."}
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
