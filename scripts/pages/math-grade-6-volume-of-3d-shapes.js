(function(){
"use strict";
const answers={
q1:{correct:"b",label:"B. The space inside a 3D object",why:"Volume measures the three-dimensional space occupied by an object."},
q2:{correct:"b",label:"B. 24 cm³",why:"4 × 3 × 2 = 24, and volume uses cubic units."},
q3:{correct:"c",label:"C. 27 cm³",why:"A cube has three equal dimensions: 3 × 3 × 3 = 27."},
q4:{correct:"a",label:"A. cm³",why:"Cubic centimetres measure volume; square centimetres measure area."},
q5:{correct:"b",label:"B. 4 cm",why:"Height = volume ÷ (length × width) = 48 ÷ (4 × 3) = 4 cm."}
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
