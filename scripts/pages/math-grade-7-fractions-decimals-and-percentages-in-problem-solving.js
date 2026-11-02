(function(){"use strict";
const answers={"q1":{"correct":"b","label":"75%","why":"3 ÷ 4 = 0.75, and 0.75 × 100 = 75%."},"q2":{"correct":"b","label":"30","why":"0.20 × 150 = 30."},"q3":{"correct":"b","label":"$45","why":"10% of $50 is $5; $50 − $5 = $45."},"q4":{"correct":"b","label":"25%","why":"Increase = 20; (20 ÷ 80) × 100% = 25%."},"q5":{"correct":"b","label":"$80","why":"$72 is 90% of the original, so original = 72 ÷ 0.9 = $80."}};
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
