const correctAnswers = ['B', 'A', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const answerCheck = document.querySelector('.show');
const trueAnswers = document.getElementsByClassName('answers');



form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
   
    //check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]){
            score += 25;         
        }
       
    });

   //show result
   scrollTo(0,0);

   result.classList.remove('d-none');


   let output = 0;
   const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`
    if(output === score){
        clearInterval(timer);
    } else {
        output++
    }
   }, 10);

});

answerCheck.addEventListener('click', e => {
    e.preventDefault();
    for (let i = 0; i < trueAnswers.length; i++) {
        trueAnswers[i];
        trueAnswers[i].style.border = '2px dotted #0d47a1';
        trueAnswers[i].style.borderRadius = '50px';
}
});
