const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click' , genereteJoke)

genereteJoke();

async function genereteJoke() {  
    const confing = {
        headers: {
            Accept : 'application/json'
        },
    }
    const res = await  fetch('https://icanhazdadjoke.com' , confing)

    const data = await res.json()
    jokeEl.innerHTML = data.joke
   
}

/* function genereteJoke() {  
    const confing = {
        headers: {
            'Accept' : 'application/json'
        }};
    

    fetch('https://icanhazdadjoke.com' , confing)
    .then(res => res.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke

    })
} */