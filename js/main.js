$(document).ready(function(){
  var random_images_array = ["header1.jpg", "header2.jpg","header3.jpg","header4.jpg","header5.jpg"];
  var random = Math.floor((Math.random()*5))+1;

  function getRandomImage() {
      document.getElementById("header").style.backgroundImage = "linear-gradient(to right bottom, rgba(53, 52, 73, 0.95), rgba(66, 84, 107, 0.15)), url('images/header"+random+".jpg')";
  }
  getRandomImage();

  var gifs = ["anims/wallet.gif","anims/verified.gif","anims/graph.gif","anims/email.gif","anims/clock and compy.gif","anims/clock.gif","anims/brainstorm.gif","anims/actions.gif","anims/scrolling-phone.gif"];
  var index = 0;
  setInterval(function cycleGifs(){

    document.getElementById("gifCycle").src = gifs[index];
    index++;
    if(index>=gifs.length){
      index=0;
    }
  },7000);
});
