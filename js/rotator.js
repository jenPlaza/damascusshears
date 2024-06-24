//rotator images
let imageArray = [
  {
    ImageSrc: './img/rotator/mainBanner6.jpeg',
    ImageId: 'mainImage',
    ImageAlt:
      'hairdressor cuttina mans hair using damascus shears. Image is focused on shears.',
  },
  {
    ImageSrc: './img/rotator/damascusScissos.png',
    ImageId: 'mainImage',
    ImageAlt: 'Close up of Damascus Thinner Shears',
  },
  {
    ImageSrc: './img/rotator/youtubeVideoScreenShot.png',
    ImageId: 'white',
    ImageAlt:
      'You tube video; Steven Smart from Kasho talks about Damascus Shears',
  },
];

let imageIndex = 0; //index starts at position 0
const imgId = document.getElementsByTagName('img')[0];

//testing
//console.log(imageArray);
//console.log(
// 'else_imageIndex(' + imageIndex + '), imageid(' + imgId.id + '): ',imageIndex,imgId.id);
//console.log('imageIndex ,ImageSrc: ', imageArray[imageIndex].ImageSrc);

//innerhtml replacement
let banner =
  '<img id="mainImage" src="img/rotator/mainBanner6.jpeg" alt="hairdressor cuttina mans hair using damascus shears. Image is focused on shears." width="100%" height="100%" />';
// '<iframe src="https://www.youtube.com/embed/toUv4740Mds?autoplay=1&mute=1"></iframe>';

//Previous button event listener click
var button = document
  .getElementsByClassName('pagination')[0]
  .querySelector('#prev');
document.body.appendChild(button);
button.addEventListener('click', prev);

//decrease index by one
function prev() {
  imageIndex--;
  //testing
  //console.log(
  // 'else_imageIndex(' + imageIndex + '), imageid(' + imgId.id + '): ',imageIndex,imgId.id);
  //console.log('imageIndex ,ImageSrc: ', imageArray[imageIndex].ImageSrc);

  let bannerImg =
    '<img id="' +
    imageArray[imageIndex].ImageId +
    '" src="' +
    imageArray[imageIndex].ImageSrc +
    '" alt="' +
    imageArray[imageIndex].ImageAlt +
    '" width="100%" height="100%" />';

  document.getElementById('rotator').innerHTML = bannerImg;
}

//Next button event listener click
var button2 = document
  .getElementsByClassName('pagination')[0]
  .querySelector('#nex');
document.body.appendChild(button2);
button2.addEventListener('click', next);

//increase index by one
function next() {
  const imgId = document.getElementsByTagName('img')[0];
  imageIndex++;
  //testing
  //console.log(
  // 'else_imageIndex(' + imageIndex + '), imageid(' + imgId.id + '): ',imageIndex,imgId.id);
  //console.log('imageIndex ,ImageSrc: ', imageArray[imageIndex].ImageSrc);

  //display bannerImages
  document.getElementById('mainImage').src = imageArray[imageIndex].ImageSrc;
  document.getElementById('mainImage').id = imageArray[imageIndex].ImageId;

  //display bannerVideo
  if (imgId.id === 'white') {
    //testing
    //console.log(
    //'if_imageIndex(' + imageIndex + '), imageid(' + imgId.id + '): ',imageIndex,imgId.id);
    let bannerVideo =
      '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/toUv4740Mds?autoplay=1&mute=1" alt="You tube video; Steven Smart from Kasho talks about Damascus Shears"></iframe>';
    document.getElementById('rotator').innerHTML = bannerVideo;
  }
}

document.getElementById('rotator').innerHTML = banner;
