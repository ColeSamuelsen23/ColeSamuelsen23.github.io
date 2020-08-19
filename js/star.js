function stars() {
  let count = 250;
  if (window.innerWidth < 800 || window.innerHeight < 600) {
    count = 100;
  }
  let starcontainer = document.querySelector(".starcontainer");

  for (let i = 0; i < count; i++) {
    let star = document.createElement("star");
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = 0.9 * Math.floor(Math.random() * window.innerHeight);
    let duration = Math.random() * 10;
    let size = Math.floor(Math.random() * 3);

    //Distance variable and switch statement allow me to give the stars a parallax effect by having the larger stars closest to us move faster

    let distance;
    switch (size) {
      case (size = 0):
        distance = 10;
        break;
      case (size = 1):
        distance = 4;
        break;
      case (size = 2):
        distance = 2;
        break;
    }

    star.style.left = x + "px";
    star.style.top = y + "px";
    star.style.width = 1 + size + "px";
    star.style.height = 1 + size + "px";
    star.style.animationDuration = 15 * distance + duration + "s";
    star.style.animationDelay = duration + "s";

    starcontainer.appendChild(star);
  }
}

stars();
