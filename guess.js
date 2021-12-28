'use strict';


const Numb = Math.trunc(Math.random()*20) + 1;
let score =20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function(){
    const guess =Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    ;

    //checking the validation
    if(!guess){
        document.querySelector('.message').textContent = 'You have to input something, u shit';

    }
    //if wins
    else if (guess == Numb){
        document.querySelector('.message').textContent = 'correct number';
        document.querySelector('.number').textContent = Numb;
        document.querySelector('body').style.backgroundColor ='#60b347';
        document.querySelector('.number').style.width ='30rem';

        //high score
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    //if looses
    else if (guess > Numb){
        if(score>1){
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = 'you lost the game';
            document.querySelector('.score').textContent = 0;
            document.querySelector('.number').textContent = Numb;
            document.querySelector('body').style.backgroundColor ='#EB3D28';
        }
        document.querySelector('.message').textContent = 'number ia tooo high';
    }else if(guess < Numb){
        document.querySelector('.message').textContent = 'number is too low';
        if(score>1){
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = 'you lost the game';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor ='#EB3D28';
        }
        document.querySelector('.score').textContent = score;
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    Numb = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });

