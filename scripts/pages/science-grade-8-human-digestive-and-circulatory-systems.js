(()=>{"use strict";
const answers={
q1:{correct:"0",label:"A. Food is physically broken into smaller pieces",why:"Mechanical digestion physically breaks food into smaller pieces, such as when teeth chew."},
q2:{correct:"2",label:"C. Small intestine",why:"Most absorption of digested nutrients takes place through the wall of the small intestine, which has many villi."},
q3:{correct:"1",label:"B. It carries blood away from the heart",why:"Arteries are defined by the direction blood travels. The pulmonary artery carries oxygen-poor blood to the lungs."},
q4:{correct:"3",label:"D. Red blood cells",why:"Red blood cells contain haemoglobin, which carries most oxygen in the blood."},
q5:{correct:"2",label:"C. Digestion makes small nutrients that blood transports to cells",why:"The digestive system breaks food down and the circulatory system carries absorbed nutrients to body cells."}
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