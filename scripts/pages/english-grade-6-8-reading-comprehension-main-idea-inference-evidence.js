(()=>{"use strict";
const answers={
q1:{correct:"b",label:"B. Students and a librarian worked together to make the library more welcoming.",why:"The whole passage describes how students and the librarian improved the library together."},
q2:{correct:"a",label:"A. The students suggested a weekly reading club.",why:"This is a detail stated directly in the passage and supports the main idea."},
q3:{correct:"c",label:"C. More students became interested in the club.",why:"The group grew so much that it needed a larger room, showing increased interest."},
q4:{correct:"b",label:"B. The group grew so much that it needed a larger room.",why:"This is a specific detail from the passage that can support an answer."},
q5:{correct:"c",label:"C. State the main idea and key details in your own words.",why:"A summary is concise and includes the central point and important details without adding unsupported opinions."}
};
const form=document.getElementById("quiz-form"),result=document.getElementById("quiz-result"),score=document.getElementById("score-number"),message=document.getElementById("score-message"),detail=document.getElementById("score-detail"),retake=document.getElementById("retake-quiz");
if(!form||!result||!score||!message||!detail||!retake){console.error("Quiz could not start: required element missing.");return;}
form.addEventListener("submit",event=>{event.preventDefault();let points=0,answered=0;
Object.entries(answers).forEach(([name,item])=>{const field=form.querySelector('[data-question="'+name+'"]'),selected=form.querySelector('input[name="'+name+'"]:checked'),feedback=field&&field.querySelector(".quiz-feedback");if(!feedback)return;feedback.hidden=false;feedback.className="quiz-feedback";
if(!selected){feedback.classList.add("unanswered");feedback.textContent="Not answered. Correct answer: "+item.label+". "+item.why;return;}
answered++;if(selected.value===item.correct){points++;feedback.classList.add("correct");feedback.textContent="Correct! "+item.why;}else{feedback.classList.add("incorrect");feedback.textContent="Not quite. Correct answer: "+item.label+". "+item.why;}
});
score.textContent=points+" / 5";message.textContent=points===5?"Excellent! Perfect score.":points>=4?"Great work. Review any feedback and keep practising.":points>=3?"Good effort. Revisit the passage and try again.":"Keep practising. Read the passage again, then retake the quiz.";
detail.textContent=Math.round(points/5*100)+"% correct · "+answered+" of 5 questions answered.";result.style.display="block";});
retake.addEventListener("click",()=>{form.reset();form.querySelectorAll(".quiz-feedback").forEach(item=>{item.hidden=true;item.textContent="";item.className="quiz-feedback";});score.textContent="";message.textContent="";detail.textContent="";result.style.display="none";});
document.addEventListener("click",event=>{const button=event.target.closest("[data-print-worksheet]");if(button)window.print();});
})();