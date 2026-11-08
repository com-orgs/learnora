(function(){
"use strict";
const answers={
q1:{correct:"b",correctText:"B. 3/6",explanation:"3/6 simplifies to 1/2 when both 3 and 6 are divided by 3."},
q2:{correct:"c",correctText:"C. 8/12",explanation:"Multiply the numerator and denominator of 2/3 by 4 to get 8/12."},
q3:{correct:"a",correctText:"A. 2/3",explanation:"Divide both 10 and 15 by 5 to get 2/3."},
q4:{correct:"b",correctText:"B. Multiply numerator and denominator by the same non-zero number",explanation:"The same operation must be applied to both parts of the fraction."},
q5:{correct:"c",correctText:"C. 20",explanation:"3 is multiplied by 5 to become 15, so 4 must also be multiplied by 5 to get 20."}
};
const form=document.getElementById("quiz-form"),result=document.getElementById("quiz-result"),scoreNumber=document.getElementById("score-number"),scoreMessage=document.getElementById("score-message"),scoreDetail=document.getElementById("score-detail"),progressFill=document.getElementById("progress-fill"),retakeButton=document.getElementById("retake-quiz");
if(!form||!result||!scoreNumber||!scoreMessage||!scoreDetail||!progressFill||!retakeButton){console.error("Quiz could not start: required element missing.");return;}
form.addEventListener("submit",function(event){
event.preventDefault();let score=0,answered=0;
Object.keys(answers).forEach(function(name){const item=answers[name],question=form.querySelector('[data-question="'+name+'"]'),selected=form.querySelector('input[name="'+name+'"]:checked'),feedback=question&&question.querySelector(".quiz-feedback");if(!feedback)return;feedback.hidden=false;feedback.className="quiz-feedback";if(!selected){feedback.classList.add("unanswered");feedback.textContent="Not answered. Correct answer: "+item.correctText+". "+item.explanation;return;}answered++;if(selected.value===item.correct){score++;feedback.classList.add("correct");feedback.textContent="Correct! "+item.explanation;}else{feedback.classList.add("incorrect");feedback.textContent="Incorrect. Correct answer: "+item.correctText+". "+item.explanation;}});
const total=Object.keys(answers).length,percent=Math.round(score/total*100);scoreNumber.textContent=score+" / "+total;scoreDetail.textContent=percent+"% correct · "+answered+" of "+total+" questions answered.";progressFill.style.width=percent+"%";scoreMessage.textContent=score===total?"Excellent! Perfect score. Keep it up!":score>=4?"Great work! You understand equivalent fractions very well.":score>=3?"Good effort! Review the explanations and try again.":"Keep practising! Review the lesson and try again.";result.style.display="block";
});
retakeButton.addEventListener("click",function(){form.reset();form.querySelectorAll(".quiz-feedback").forEach(function(feedback){feedback.hidden=true;feedback.textContent="";feedback.className="quiz-feedback";});scoreNumber.textContent="0 / 5";scoreMessage.textContent="";scoreDetail.textContent="0% correct · 0 of 5 questions answered.";progressFill.style.width="0%";result.style.display="none";});
})();

document.addEventListener('click', function (event) { const button = event.target.closest('[data-print-worksheet]'); if (button) window.print(); });

(function(){
"use strict";
const numerator=document.getElementById("eq-numerator");
const denominator=document.getElementById("eq-denominator");
const factor=document.getElementById("eq-factor");
const models=document.getElementById("eq-models");
const explanation=document.getElementById("eq-explanation");
if(!numerator||!denominator||!factor||!models||!explanation)return;
function drawBar(label,parts,shaded){
const row=document.createElement("div");row.className="bar-row";
const name=document.createElement("span");name.className="bar-label";name.textContent=label;
const bar=document.createElement("div");bar.className="bar";bar.setAttribute("role","img");bar.setAttribute("aria-label",shaded+" of "+parts+" equal parts shaded");
for(let i=0;i<parts;i++){const segment=document.createElement("span");if(i<shaded)segment.className="shade";bar.appendChild(segment);}
row.append(name,bar);return row;
}
function update(){
const d=Number(denominator.value);
Array.from(numerator.options).forEach(function(option){option.disabled=Number(option.value)>=d;});
if(Number(numerator.value)>=d)numerator.value=String(d-1);
const n=Number(numerator.value),k=Number(factor.value);
if(n<1||d<2||k<2)return;
const newN=n*k,newD=d*k;
models.replaceChildren(drawBar(n+"/"+d,d,n),drawBar(newN+"/"+newD,newD,newN));
explanation.replaceChildren();
const strong=document.createElement("strong");strong.textContent=n+"/"+d+" = "+newN+"/"+newD+".";
explanation.append(strong,document.createTextNode(" Both fractions shade the same proportion of the whole."));
}
[numerator,denominator,factor].forEach(function(control){control.addEventListener("change",update);});
update();
})();
