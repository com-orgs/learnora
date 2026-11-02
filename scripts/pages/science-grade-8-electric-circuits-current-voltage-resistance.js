(()=>{"use strict";
const answers={
q1:{correct:"0",label:"A. The rate of flow of electric charge",why:"Current describes how much electric charge passes a point each second."},
q2:{correct:"2",label:"C. Volt",why:"Potential difference is measured in volts (V)."},
q3:{correct:"1",label:"B. In series with the lamp",why:"An ammeter must be in the same path as the component so the current through it passes through the meter."},
q4:{correct:"3",label:"D. 2 A",why:"Using Ohm's law, I = V ÷ R = 6 V ÷ 3 Ω = 2 A."},
q5:{correct:"2",label:"C. Other complete branches can continue working",why:"Each parallel branch has its own path, so disconnecting one branch does not necessarily break the others."}
};
const form=document.getElementById("quiz-form");
const result=document.getElementById("quiz-result");
const retake=document.getElementById("retake");
if(form&&result&&retake){
form.addEventListener("submit",event=>{
event.preventDefault();
let score=0,answered=0;
Object.entries(answers).forEach(([name,item])=>{
const selected=form.querySelector('input[name="'+name+'"]:checked');
const feedback=document.getElementById("feedback-"+name);
if(!feedback)return;
if(!selected){feedback.textContent="Not answered. Correct answer: "+item.label+". "+item.why;return;}
answered++;
if(selected.value===item.correct){score++;feedback.textContent="Correct! "+item.why;}
else{feedback.textContent="Not quite. Correct answer: "+item.label+". "+item.why;}
});
result.textContent="Your score: "+score+" out of 5 ("+(score*20)+"%). "+answered+" of 5 questions answered. Review the feedback and try again.";
});
retake.addEventListener("click",()=>{
form.reset();
form.querySelectorAll(".feedback").forEach(item=>{item.textContent="";});
result.textContent="";
});
}
const print=document.getElementById("print");
if(print)print.addEventListener("click",()=>window.print());
})();