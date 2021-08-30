const images = ["0.jpg", "1.jpg","2.jpg"]; //img 배열을 만든다. 이미지 명을 쓰면 된다.

const chosenImage = images[Math.floor(Math.random()*images.length)]; //난수를 발생하여 배열에 접근한다.

const bgImage = document.createElement("img"); //새로운 element를 생성한다. 여기서는 img tag

bgImage.src = `img/${chosenImage}`; //tag안에 요소를 추가한다.

//document.body.appendChild(bgImage); //appendChild() 함수를 통해 element를 가장 뒤에 추가한다.

document.body.style.backgroundImage = `url("./img/${chosenImage}")`;