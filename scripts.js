anime ({
    targets: '.par',
    translateX: 550,
    loop: true,
    duration: 7000,
  });

  anime({
    targets: '.btn',
    translateX: 250,
    scale: 2,
    rotate: '1turn',
    loop: true,
    duration: 8000,
  });
  anime({
    targets: '.anim',
    width: '100%', // -> from '28px' to '100%',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true
  });