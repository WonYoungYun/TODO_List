const tag = "[background]";

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  const bg = `url(./img/${imgNumber + 1}.jpg) no-repeat center center fixed`;
  console.log(bg);
  document.body.style.background = `${bg}`;
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
