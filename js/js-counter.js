var countdown = document.getElementById('count');
var bgimage = document.getElementById('image');





var initialCountdown = countdown.innerHTML;
console.log(initialCountdown);

var interval = setInterval(function(){
    initialCountdown = initialCountdown > 0 ? initialCountdown -= 1 : 0
    console.log(initialCountdown);
    countdown.innerHTML = initialCountdown;




    var imagepath = initialCountdown % 2 == 0 ? './images/image1.jpg' : './images/image2.jpg'
    bgimage.src = imagepath;
     console.log('inter is running');

     if(initialCountdown <=0){
        clearInterval(interval);
     }
},1000)