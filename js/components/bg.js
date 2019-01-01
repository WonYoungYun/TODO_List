const tag = "[background]";

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `./img/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  document.body.appendChild(image);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
export default {
  init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
  }
};
