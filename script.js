//searchinput
//searchbutton

const dict= (word)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2bb727d47fmsh937e4f1752fe2d8p162fe0jsn384ff227aafc',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then((response) => 
            {
               // console.log(response)
                wordheading.innerHTML = response.word;
                definition.innerHTML = response.definition;
                //console.log(word, response)
            })
            
        .catch(err => console.error(err));
}


searchbutton.addEventListener("click", (e)=>
{
    e.preventDefault();
    dict(searchinput.value)
})