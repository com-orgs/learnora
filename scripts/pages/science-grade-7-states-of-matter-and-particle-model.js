(()=>{"use strict";
const answers={
q1:{correct:"b",label:"B. Liquid",why:"A liquid has a fixed volume but takes the shape of its container."},
q2:{correct:"a",label:"A. They vibrate around fixed positions.",why:"In a solid, particles vibrate around fixed positions rather than moving freely from place to place."},
q3:{correct:"c",label:"C. Condensation",why:"Condensation is the change from gas to liquid."},
q4:{correct:"b",label:"B. It happens at the surface and can occur below the boiling point.",why:"Evaporation takes place at a liquid's surface and can happen below its boiling point."},
q5:{correct:"b",label:"B. It changes from solid water to liquid water.",why:"Melting is a physical change: the substance remains water."}
};
const form=document.getElementById("quiz-form"),result=document.getElementById("quiz-result"),score=document.getElementById("score-number"),message=document.getElementById("score-message"),detail=document.getElementById("score-detail"),retake=document.getElementById("retake-quiz");
if(!form||!result||!score||!message||!detail||!retake){console.error("Quiz could not start: required element missing.");return;}
form.addEventListener("submit",event=>{
event.preventDefault();let points=0,answered=0;
Object.entries(answers).forEach(([name,item])=>{
const field=form.querySelector('[data-question="'+name+'"]'),selected=form.querySelector('input[name="'+name+'"]:checked'),feedback=field&&field.querySelector(".quiz-feedback");
if(!feedback)return;feedback.hidden=false;feedback.className="quiz-feedback";
if(!selected){feedback.classList.add("unanswered");feedback.textContent="Not answered. Correct answer: "+item.label+". "+item.why;return;}
answered++;if(selected.value===item.correct){points++;feedback.classList.add("correct");feedback.textContent="Correct! "+item.why;}
else{feedback.classList.add("incorrect");feedback.textContent="Not quite. Correct answer: "+item.label+". "+item.why;}
});
score.textContent=points+" / 5";message.textContent=points===5?"Excellent! Perfect score.":points>=4?"Great work. Review any feedback and keep practising.":points>=3?"Good effort. Revisit the examples and try again.":"Keep practising. Review the lesson, then retake the quiz.";
detail.textContent=Math.round(points/5*100)+"% correct · "+answered+" of 5 questions answered.";result.style.display="block";
});
retake.addEventListener("click",()=>{form.reset();form.querySelectorAll(".quiz-feedback").forEach(item=>{item.hidden=true;item.textContent="";item.className="quiz-feedback";});score.textContent="";message.textContent="";detail.textContent="";result.style.display="none";});
document.addEventListener("click",event=>{const button=event.target.closest("[data-print-worksheet]");if(button)window.print();});
})();