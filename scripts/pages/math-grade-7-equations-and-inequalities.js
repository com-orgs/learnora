(function(){
const form=document.getElementById('quizForm');
const result=document.getElementById('quizResult');
const progress=document.getElementById('progress');
const bar=document.getElementById('progressBar');
const progressText=document.getElementById('progressText');
const answers={q1:'b',q2:'b',q3:'b',q4:'b',q5:'b'};
const explanations={
q1:'Subtract 3 to get 2x = 10, then divide by 2. x = 5.',
q2:'Subtract 2x to get 2x + 2 = 12. Subtract 2 and divide by 2. x = 5.',
q3:'Multiplying or dividing an inequality by a negative number reverses its sign.',
q4:'The symbol ≥ includes 6, so use a filled circle at 6 and shade to the right.',
q5:'Divide both sides by −3 and reverse < to >. Therefore x > −4.'
};
function updateProgress(){
const count=Object.keys(answers).filter(name=>form.querySelector('input[name="'+name+'"]:checked')).length;
bar.style.width=(count/5*100)+'%';
progress.setAttribute('aria-valuenow',String(count));
progressText.textContent=count+' of 5 answered';
}
form.addEventListener('change',updateProgress);
form.addEventListener('submit',function(event){
event.preventDefault();
let score=0;
const details=[];
Object.keys(answers).forEach(function(name,index){
const selected=form.querySelector('input[name="'+name+'"]:checked');
const correct=selected&&selected.value===answers[name];
if(correct)score++;
details.push({index:index+1,correct:!!correct,explanation:explanations[name]});
});
const content=document.createDocumentFragment();
const heading=document.createElement('h3');
heading.textContent='Your score: '+score+' / 5 ('+(score*20)+'%)';
content.appendChild(heading);
details.forEach(function(item){
const paragraph=document.createElement('p');
const label=document.createElement('strong');
label.textContent='Question '+item.index+': '+(item.correct?'Correct':'Review this one')+'.';
paragraph.append(label,document.createTextNode(' '+item.explanation));
content.appendChild(paragraph);
});
const summary=document.createElement('p');
summary.textContent=score===5?'Excellent work. You have understood the key rules.':score>=3?'Good effort. Review the explanations and try again.':'Keep practising. Revisit the worked examples, then retake the quiz.';
content.appendChild(summary);
result.replaceChildren(content);
result.hidden=false;
});
document.getElementById('retake').addEventListener('click',function(){
form.reset();result.hidden=true;result.textContent='';updateProgress();
});
document.getElementById('printWorksheet').addEventListener('click',function(){window.print();});
updateProgress();
})();
