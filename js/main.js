$(document).ready(function(){
  var random_images_array = ["header1.jpg", "header2.jpg","header3.jpg","header4.jpg","header5.jpg"];
  var random = Math.floor((Math.random()*5))+1;

  function getRandomImage() {
      document.getElementById("header").style.backgroundImage = "linear-gradient(to right bottom, rgba(53, 52, 73, 0.95), rgba(66, 84, 107, 0.15)), url('images/header"+random+".jpg')";
  }
  getRandomImage();
  console.log(random);

  var svgContainer = document.getElementById('walletAnim');
  var animItem = lottie.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: true,
    path: 'anims/Wallet/wallet-data.json'
  });

  svgContainer = document.getElementById('verifiedAnim');
  animItem = lottie.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: true,
    path: 'anims/Verified Check/verified-data.json'
  });

  svgContainer = document.getElementById('graphAnim');
  animItem = lottie.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: true,
    path: 'anims/Graph/graph-data.json'
  });

  svgContainer = document.getElementById('scrollingAnim');
  animItem = lottie.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: true,
    path: 'anims/Scrolling Phone/scrolling-phone-data.json'
  });

  svgContainer = document.getElementById('shareAnim');
  animItem = lottie.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: true,
    path: 'anims/Share Post/share-post-data.json'
  });
});
