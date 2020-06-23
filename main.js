// var myProfil = document.querySelectorAll('.menu span');
// var myParentMenu = document.getElementsByClassName('menu')
// console.log(myParentMenu)
// var myMenu = document.getElementById('hid');

// myProfil.onclick = function(){
//     myMenu.classList.toggle('hidd')
// }
// for (let i = 0; i < myProfil.length; i++) {

//     myProfil[i].addEventListener("click", function() {
//        for(var i =0; i<myParentMenu.length; i++){
//         myMenu.classList.toggle('hidd')
//        }
        
   
        
        
//     });
// }


var mySlide = document.querySelector('.slide');
var myShow = document.querySelectorAll('.show');
var myText = document.querySelectorAll('.text');
var step = 0;
var textStep = 0;


console.log(myText)
    myArrayImg = ["background.jpg","sonasid.jpg",'production.jpg',"commerce.jpg", "background1.jpg"]
    

setInterval(()=> {
    myRandomArray = Math.floor(Math.random() * myArrayImg.length);
    mySlide.style.backgroundImage = 'url("img/' + myArrayImg[myRandomArray]+ '")';
    step++;
    for(var i = 0; i< myShow.length; i++){
        myShow[i].style.background = "white";
    }
    myShow[step].style.background = "rgb(88,101,111)";
    textStep++;
    for(var i = 0; i<myText.length; i++){
        myText[i].style.display = "none";
    }
    myText[textStep].style.display = "block";
  
},3000)
