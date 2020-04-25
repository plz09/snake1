window.onload = function() {
  var stage = document.getElementById('stage');
  var ctx = stage.getContext("2d");

  document.addEventListener("keydown", keyPush);

  setInterval(game, 80);

  const vel = 1;

  let velX = velY = 0;
  let pointX = 10;
  let pointY = 15;
  let squareArea = 20;
  let squareQty = 20;
  let appleX = appleY = 15;

  let trail = [];
  tail = 5;

  function game() {
    pointX += velX;
    pointY += velY;

    if (pointX < 0) {
      pointX = squareQty - 1;
    }
    if (pointX > squareQty - 1) {
      pointX = 0;
    }
    if (pointY < 0 ) {
      pointY = squareQty - 1;
    }
    if (pointY > squareQty - 1) {
      pointY = 0;
    };

    ctx.fillStyle = "black";
    ctx.fillRect(0,0, stage.width, stage.height);

    ctx.fillStyle = "red";
    ctx.fillRect(appleX * squareArea, appleY * squareArea, squareArea, squareArea);

    ctx.fillStyle = 'green';

    for (let i = 0; i < trail.length; i++) {
      ctx.fillRect(trail[i].x * squareArea, trail[i].y * squareArea, squareArea - 1, squareArea - 1);

      if (trail[i].x === pointX && trail[i].y === pointY) {
        velX = velY = 0;
        tail = 5;
      }
    };

    trail.push({ x: pointX, y: pointY });
  while (trail.length > tail) {
    trail.shift();
  }

  if (appleX === pointX && appleY === pointY) {
    tail++;
    appleX = Math.floor(Math.random() * squareQty);
    appleY = Math.floor(Math.random() * squareQty)
  }

  };

  function keyPush(event) {
    switch (event.keyCode) {
      case 37: // Left
        velX = -vel;
        velY = 0;
        break;

      case 38: // Up
        velX = 0;
        velY = -vel;
        break;

      case 39: // Right
        velX = vel;
        velY = 0;
        break;

      case 40: // Down
        velX = 0;
        velY = vel;
        break;

      default:
        break;
    }
  }
  
};

