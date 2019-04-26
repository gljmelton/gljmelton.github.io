$(document).ready(function(){
  var random_images_array = ["header1.jpg", "header2.jpg","header3.jpg","header4.jpg","header5.jpg"];
  var random = Math.floor((Math.random()*5))+1;

  function getRandomImage(imgAr, path) {
      document.body.style.backgroundImage = "linear-gradient(to right bottom, rgba(53, 52, 73, 0.95), rgba(66, 84, 107, 0.15)), url('images/header"+random+".jpg')";
  }
  getRandomImage();
  console.log(random);
});
