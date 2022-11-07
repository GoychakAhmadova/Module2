let mainBlock= document.querySelector('.main-block');
let input= document.querySelector('.input-area');
let ul= document.querySelector('.unordered-list');
let buttonAdd = document.querySelector('.button-add');
let buttonPlus = document.querySelector('.button-plus');
let photoX = document.querySelector('.photo-x');
let buttonDown= document.querySelector('.photo-down')
let items = document.querySelector('ul').children

//adding button
buttonAdd.addEventListener('click',()=>{

    let li = `<li class="list-item">
    
    <p>${input.value}</p>
    <img class="photo-x" src="./assests/img/whiteX.svg">
</li>`

  if(input.value=="" || input.value==" "){
    alert("Please add text")
  }
  else{
    ul.innerHTML+=li
    input.value=""
  }

})

ul.addEventListener('click',(e)=>{

   if(e.target.tagName.match("IMG")){
  e.target.parentElement.remove()
   }

})

let count=0
buttonDown.addEventListener("click", () => {
  console.log("ishledi")

  const itemsArray = [...items]

  const arrItems = [];

  itemsArray.forEach(item => {
      arrItems.push(item.firstElementChild.innerHTML)
  });

console.log(arrItems)
  if(count%2===0){
    buttonDown.setAttribute('src', './assests/img/up.svg')
        arrItems.sort(function (a, b){
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
            return 0;
        });
  }
  else if(count%2===1){
    buttonDown.setAttribute('src', './assests/img/down.svg')
    arrItems.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        return 0;
    }).reverse()
}
count+=1;
  
  ul.innerHTML = "";

  arrItems.forEach((item) => {
      let temp = `<li class="list-item">
   <p>${item}</p> <img class="photo-x" src="./assests/img/whiteX.svg">
</li>`
      ul.innerHTML += temp
  })


})
