const tellMeJokeBtn = document.querySelector('button');
let text = document.querySelector('p');
tellMeJokeBtn.addEventListener('click',function(){
    text.innerText = "Joke is On the Way 🤔"
    fetch('https://api.api-ninjas.com/v1/dadjokes',{
        method: "GET",
        headers: {
            "x-api-key": "W+CAjl0s4GHkoo+RCQ91eQ==Ulpm8vw9Mf5dVNV8"
        }
    })
    .then(response=>response.json())
    .then(data=>text.innerText = data[0].joke)
    .catch((errorMsg)=>text.innerText("I'm Tired now. So No Joke 🙄"))
});