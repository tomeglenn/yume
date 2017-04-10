export default class PingPongScaler {
  constructor(mesh, minScale = 1, maxScale = 2, speed = 0.01, direction = 1) {
    this.mesh = mesh;
    this.minScale = minScale;
    this.maxScale = maxScale;
    this.speed = speed;
    this.direction = direction;
    this.setScale(minScale);
  }

  update() {
    if (this.mesh.scale.x >= this.maxScale) {
      this.direction = -1;
    } else if(this.mesh.scale.x <= this.minScale) {
      this.direction = 1;
    }

    this.setScale(this.mesh.scale.x += (this.speed * this.direction));
  }

  setScale(scale) {
    this.mesh.scale.x = this.mesh.scale.y = this.mesh.scale.z = scale;
  }
}
