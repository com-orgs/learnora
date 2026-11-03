(function(){
const form=document.getElementById('quizForm'),result=document.getElementById('quizResult');
const bar=document.getElementById('progressBar'),progress=document.getElementById('progress'),progressText=document.getElementById('progressText');
const answers={"q1":{"correct":"b","correctText":"180°","explanation":"Angles on a straight line always add up to 180°."},"q2":{"correct":"b","correctText":"76°","explanation":"Vertically opposite angles are equal, so the answer is 76°."},"q3":{"correct":"b","correctText":"180°","explanation":"Co-interior angles between parallel lines add up to 180°."},"q4":{"correct":"b","correctText":"100 cm","explanation":"2 × 50 = 100 cm, which is 1 metre."},"q5":{"correct":"b","correctText":"4.5 cm","explanation":"9 × 0.5 = 4.5 cm."}};
const explanations={
q1:'Angles on a straight line always add up to 180°.',
q2:'Vertically opposite angles are equal, so the answer is 76°.',
q3:'Co-interior angles between parallel lines add up to 180°.',
q4:'2 × 50 = 100 cm, which is 1 metre.',
q5:'9 × 0.5 = 4.5 cm.'
};
function updateProgress(){const count=Object.keys(answers).filter(n=>form.querySelector('input[name="'+n+'"]:checked')).length;bar.style.width=(count/5*100)+'%';progress.setAttribute('aria-valuenow',String(count));progressText.textContent=count+' of 5 answered';}
form.addEventListener('change',updateProgress);
form.addEventListener('submit',function(event){
event.preventDefault();
let score=0;
const details=[];
Object.keys(answers).forEach(function(name,index){
const selected=form.querySelector('input[name="'+name+'"]:checked');
const correct=selected&&selected.value===answers[name].correct;
if(correct)score++;
details.push({index:index+1,correct:!!correct,explanation:explanations[name],correctText:answers[name].correctText});
});
const content=document.createDocumentFragment();
const heading=document.createElement('h3');
heading.textContent='Your score: '+score+' / 5 ('+(score*20)+'%)';
content.appendChild(heading);
details.forEach(function(item){
const paragraph=document.createElement('p');
const label=document.createElement('strong');
label.textContent='Question '+item.index+': '+(item.correct?'Correct':'Review. Correct answer: '+item.correctText)+'.';
paragraph.append(label,document.createTextNode(' '+item.explanation));
content.appendChild(paragraph);
});
const summary=document.createElement('p');
summary.textContent=score===5?'Excellent work.':score>=3?'Good effort. Review any missed explanations.':'Keep practising, then try the quiz again.';
content.appendChild(summary);
result.replaceChildren(content);
result.hidden=false;
});
document.getElementById('retake').addEventListener('click',function(){form.reset();result.hidden=true;result.textContent='';updateProgress();});
document.getElementById('printWorksheet').addEventListener('click',function(){window.print();});
updateProgress();
})();
