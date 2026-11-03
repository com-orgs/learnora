(function(){
const form=document.getElementById('quizForm'),result=document.getElementById('quizResult');
const bar=document.getElementById('progressBar'),progress=document.getElementById('progress'),progressText=document.getElementById('progressText');
const answers={"q1":{"correct":"b","correctText":"36 cm²","explanation":"Area of a rectangle = length × width = 9 × 4 = 36 cm²."},"q2":{"correct":"b","correctText":"20 cm²","explanation":"Triangle area = ½ × base × height = ½ × 8 × 5 = 20 cm²."},"q3":{"correct":"c","correctText":"24 cm²","explanation":"A cube has six square faces. 6 × 2² = 24 cm²."},"q4":{"correct":"b","correctText":"30 cm³","explanation":"Volume = length × width × height = 5 × 3 × 2 = 30 cm³."},"q5":{"correct":"c","correctText":"10,000 cm²","explanation":"1 m² = 100 cm × 100 cm = 10,000 cm²."}};
const explanations={
q1:'Area of a rectangle = length × width = 9 × 4 = 36 cm².',
q2:'Triangle area = ½ × base × height = ½ × 8 × 5 = 20 cm².',
q3:'A cube has six square faces. 6 × 2² = 24 cm².',
q4:'Volume = length × width × height = 5 × 3 × 2 = 30 cm³.',
q5:'1 m² = 100 cm × 100 cm = 10,000 cm².'
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
summary.textContent=score===5?'Excellent work. You have mastered the key ideas.':score>=3?'Good effort. Review any missed explanations and try again.':'Keep practising. Revisit the worked examples before another attempt.';
content.appendChild(summary);
result.replaceChildren(content);
result.hidden=false;
});
document.getElementById('retake').addEventListener('click',function(){form.reset();result.hidden=true;result.textContent='';updateProgress();});
document.getElementById('printWorksheet').addEventListener('click',function(){window.print();});
updateProgress();
})();
