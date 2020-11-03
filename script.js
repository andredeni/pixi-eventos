const app = new PIXI.Application(
  {
    width: 480,
    height: 320,
    backgroundColor: 0x7799CC,
    antialias: true
  }
);

document.body.appendChild(app.view);

player = new PIXI.Sprite.from(
  'assets/player/idle.png'
);
player.anchor.set(0.5);
player.x = app.view.width / 2;
player.y = app.view.height / 2;

app.stage.addChild(player);

const keys = {};

window.addEventListener('keydown', event => {
  keys[event.keyCode] = true;
  console.log(keys);
});

window.addEventListener('keyup', event => {
  keys[event.keyCode] = false;
});

app.ticker.add(gameLoop);

function gameLoop() {
  if (keys['65']) {
    player.x -= 3;
  }
  if (keys['87']) {
    player.y -= 3;
  }
  if (keys['68']) {
    player.x += 3;
  }
  if (keys['83']) {
    player.y += 3;
  }
  if (keys['32']) {
    player.scale.x += 0.1;
    player.scale.y += 0.1;
  }
  if (keys['77']) {
    player.scale.x -= 0.1;
    player.scale.y -= 0.1;
  }
}