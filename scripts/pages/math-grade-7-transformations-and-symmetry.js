(function(){"use strict";
const answers={"q1":{"correct":"a","label":"The same distance and direction","why":"A translation applies the same movement vector to every point."},"q2":{"correct":"b","label":"(−4, −3)","why":"Reflection in the y-axis changes x to its opposite and leaves y unchanged."},"q3":{"correct":"a","label":"(−2, −5)","why":"A 180° rotation maps (x, y) to (−x, −y)."},"q4":{"correct":"c","label":"4","why":"A square has two diagonals and two lines through the midpoints of opposite sides."},"q5":{"correct":"b","label":"90°","why":"360° divided by order 4 equals 90°."}};
const form=document.getElementById("quiz-form"),result=document.getElementById("quiz-result"),score=document.getElementById("score-number"),message=document.getElementById("score-message"),detail=document.getElementById("score-detail"),bar=document.getElementById("progress-fill"),retake=document.getElementById("retake-quiz"),print=document.getElementById("print-worksheet");
if(!form||!result||!score||!message||!detail||!bar||!retake||!print){console.error("Required quiz or worksheet element is missing.");return;}
form.addEventListener("submit",function(event){event.preventDefault();let points=0,answered=0;
Object.keys(answers).forEach(function(key){const a=answers[key],q=form.querySelector('[data-question="'+key+'"]'),choice=form.querySelector('input[name="'+key+'"]:checked'),feedback=q.querySelector(".feedback");feedback.hidden=false;feedback.className="feedback";
if(!choice){feedback.classList.add("unanswered");feedback.textContent="Not answered. Correct answer: "+a.label+". "+a.why;return;}answered++;
if(choice.value===a.correct){points++;feedback.classList.add("correct");feedback.textContent="Correct! "+a.why;}else{feedback.classList.add("incorrect");feedback.textContent="Not quite. Correct answer: "+a.label+". "+a.why;}
});
const total=Object.keys(answers).length,pct=Math.round(points/total*100);score.textContent=points+" / "+total;detail.textContent=pct+"% correct · "+answered+" of "+total+" questions answered.";bar.style.width=pct+"%";message.textContent=points===total?"Excellent — a perfect score!":points>=4?"Great work. Review any feedback to strengthen your understanding.":points>=3?"Good effort. Revisit the examples and try again.":"Keep practising. Review the lesson, then retake the quiz.";result.style.display="block";
});
retake.addEventListener("click",function(){form.reset();form.querySelectorAll(".feedback").forEach(function(x){x.hidden=true;x.textContent="";x.className="feedback";});score.textContent="0 / 5";message.textContent="";detail.textContent="0% correct · 0 of 5 questions answered.";bar.style.width="0%";result.style.display="none";});
print.addEventListener("click",function(){window.print();});
})();
