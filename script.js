const btn = document.querySelector('.btn')
const img = document.querySelector('.meme')
const h1 = document.querySelector('h1')

const update = (url)=>{
    img.setAttribute("src", url)
}

const generateMeme = () =>{ fetch('https://meme-api.com/gimme')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    update(data.url)
})
.catch(()=>{
    console.log("sorry, can't get it.");
})
}
btn.addEventListener("click", generateMeme);
generateMeme()
