(()=>{"use strict";
const answers={
q1:{correct:"1",label:"B. Very dry",why:"The sentence says the land received almost no rain, which explains that arid means very dry."},
q2:{correct:"2",label:"C. Again",why:"The prefix re- means again, so rewrite means to write again."},
q3:{correct:"1",label:"B. Kindness",why:"The suffix -ness forms a noun naming a state or quality."},
q4:{correct:"0",label:"A. Life",why:"The root bio means life and appears in words such as biology and biography."},
q5:{correct:"2",label:"C. Check a reliable reference and reread the sentence",why:"Context clues give a likely meaning; a dictionary and rereading help confirm the meaning that fits."}
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