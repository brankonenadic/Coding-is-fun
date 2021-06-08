'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Corect Number!';
document.querySelector('.number').textContent = 14;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23; */
/* 
const x = function(){
    console.log(23);
}; */
/* let secretNumber = Math.trunc(Math.random() * 20) +1;

let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number( document.querySelector('.guess').value);
    console.log(guess ,typeof guess);
    if (!guess){
        if (score > 1){
            document.querySelector('.message').textContent = 'No number!';
        score --;
        document.querySelector('.score').textContent = score;
    }else{
            document.querySelector('.message').textContent = 'You lost game!';
            document.querySelector('.score').textContent = 0;
        }
        
    } else if (guess == secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = 'Corect Number!';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            if (score > highScore){
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }

    }else{
            document.querySelector('.message').textContent = 'You lost game!';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess > secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = 'Too high!';
        score --;
        document.querySelector('.score').textContent = score;
    }else{
            document.querySelector('.message').textContent = 'You lost game!';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = 'Too low!';
        score --;
        document.querySelector('.score').textContent = score;
    }else{
            document.querySelector('.message').textContent = 'You lost game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) +1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

}) */


let secretNumber = Math.trunc(Math.random() * 20) +1;
let score = 20;
let highScore = 0;

const displayMesage = function(mesage){
    document.querySelector('.message').textContent = mesage;
}


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number( document.querySelector('.guess').value);
    console.log(guess ,typeof guess);
    if (!guess){
        if (score > 1){
            /* document.querySelector('.message').textContent = 'No number!'; */
            displayMesage('No number!');
        score --;
        document.querySelector('.score').textContent = score;
    }else{
            /* document.querySelector('.message').textContent = 'You lost game!'; */
            displayMesage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
        
    } else if (guess == secretNumber){
        if (score > 1){
          
            displayMesage('🎉 Correct Number!');
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            if (score > highScore){
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }

    }else{
           
            displayMesage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess !== secretNumber){
        if (score > 1){
           /*  document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!'; */
           displayMesage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score --;
            document.querySelector('.score').textContent = score;
    }else{
          
            displayMesage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) +1;
    displayMesage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})