const settingsBtn = document.querySelector('#setting-btn')
const settings = document.querySelector('.settings')
const difficultySelect = document.querySelector('#difficulty')
const inputText = document.querySelector('#input-text')
const word = document.querySelector('#word')
const scoreE1 = document.querySelector('#score')
const timeE1 = document.querySelector('#time')
const endgameE1 = document.querySelector('#end-game-container')



const words = ['good',
                'south', 
                'independent', 
                'steering', 
                'gold', 
                'home', 
                'artificial',
                 'intelligence',
                'nine',
                'fame', 'dismiss', 
                'drop', 'caring', 'sing', 
                'utensil', 'airplane', 
                'pilot', 'basket', 
                'juice', 'ukraine', 'captain', 
                'this', 'game', 'is', 'difficult', 
                'challenging', 'saturation', 'nerve-racking',
                'livid', 'hypocrite', 'aphrodisiac', 'intellect', 
                'towards', 'grow', 'guide', 'process', 'damnation', 
                'hole', 'whole', 'congregation', 'psychology', 'places', 
                'chemistry', 'cape', 'heroine', 'subject', 'universal', 'accompany', 
                'companion', 'superficial' ]


// focus on input 
inputText.focus();




// initialise random word variable
let randomWord;

// initialise the score variable
let score = 0;

// intialise the time variable
let time = 10;

const timeInterval = setInterval(updateTime, 1000)

// generate random word
function getRandomWord(){
    return words[Math.floor(Math.random()* words.length)]
}

// function update score
function updateScore(){
    score += 2
    scoreE1.innerHTML = score;
}

difficultySelect.addEventListener('change', (e) => {
    const difficulty = e.target.value
})

// update time function
function updateTime(){
    time --;
    timeE1.innerHTML = ` ${time}s`;

    if(time === 0){
        clearInterval(timeInterval)
        gameOver();
    }
}


// function to add word to DOM
function addWordToDom(){
    randomWord = getRandomWord();
    word.innerHTML= randomWord;
}

addWordToDom()
// listening for input events and matching words
inputText.addEventListener('input', (e) => {
    const typedWord = e.target.value;
    
    randomWord.toString();
    if(typedWord == randomWord){
        addWordToDom();

        // update score
        updateScore();

        // clear input field
        e.target.value = ''

        // time difficulty functionality
        if(difficulty === 'hard'){
            time++
        }else if(difficulty === 'medium'){
            time+=2
        }else{
            time+=4
        }

        updateTime();
    } 
})



function gameOver(){
    endgameE1.innerHTML = `
    <h1>Time ran out</h1>
    <p>Here is your final score:</p> ${score}
    <button onClick = "window.location.reload()">Reload</button>`;
    endgameE1.style.display = 'flex';
    


}



// Setting button functionality
settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('show');
})









