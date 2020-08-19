function loadAnimation() {
  TweenMax.from(".rainbowbutton", 3, {
    delay: 1,
    y: "100%",
    ease: Expo.easeInOut,
    opacity: 0,
  });

  TweenMax.from(".moon", 2, {
    delay: 1,
    ease: Expo.easeInOut,
    opacity: 0,
  });

  TweenMax.from(".forest", 3, {
    delay: 1,
    y: "100%",
    ease: Expo.easeInOut,
    opacity: 0,
  });

  TweenMax.from(".forest2", 3, {
    delay: 1.2,
    y: "100%",
    ease: Expo.easeInOut,
    opacity: 0,
  });

  TweenMax.from(".starcontainer", 2, {
    delay: 2.2,
    y: "100%",
    ease: Expo.easeInOut,
    opacity: 0,
  });

  TweenMax.from(".satellite", 17.5, {
    delay: 10,
    x: "150vw",
    y: "-5vh",
    rotation: -10,
    repeatDelay: 20,
    repeat: -1,
  });
}

loadAnimation();
