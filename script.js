
let generateBtn = document.getElementById("generateBtn");
console.log(generateBtn)

generateBtn.addEventListener("click", (e) => {

    e.preventDefault();

    fetch('https://cat-fact.herokuapp.com/facts/')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        display(data);
    })
 const display = (data) => {
    let catfactdisplay = document.getElementById("catfact");
    let catArray = [0,1,2,3,4];
    let randomArray = catArray[Math.floor(Math.random() * catArray.length)];
    catfact1 = data[randomArray].text
    catfactdisplay.innerHTML = catfact1
    console.log(data[randomArray].text)
 }
    
    
    
    
    
})