//Top Button
//function needed to call on scrollToTop(),, when window begins to scroll down
window.onscroll = function () {
  scrollToTop();
};

var topButton = document.querySelector('.sticky');

//onscroll function
function scrollToTop() {
  if (document.documentElement.scrollTop > 20) {
    topButton.style.display = 'block';
    //testing
    //console.log('documentElement: ', document.documentElement.scrollTop);
  } else {
    topButton.style.display = 'none';
    //testing
    //console.log('documentElement: ', document.documentElement.scrollTop);
  }
}

//onclick function
function toTheTop() {
  if (document.documentElement.scrollTop > 20) {
    document.documentElement.scrollTop = 0;
  }
}
