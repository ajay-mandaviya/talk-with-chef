let submitBtn = document.querySelector('.submit-btn');
let userInput = document.querySelector('#user-input');
let minionTranslate = document.querySelector('#minion-translate')

let url = 'https://api.funtranslations.com/translate/chef.json?text='

function generateUrl(text) {
        return url+text
}

submitBtn.addEventListener('click' , (e)=>{
    // console.log("click add");
    let textTotranslate =  userInput.value;
    let endpoint = generateUrl(textTotranslate);
    // console.log(endpoint);

    fetch(endpoint)
    .then(res => res.json())
    .then((json)=>{
        // console.log(json);
        minionTranslate.innerHTML =  json.contents.translated
    }).catch((err)=>{
        alert("please try again " , err)
    })
})