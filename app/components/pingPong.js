export default class PingPong {
  constructor(min = 1, max = 2, speed = 0.01, direction = 1) {
    this.min = min;
    this.max = max;
    this.speed = speed;
    this.direction = direction;
    this.current = this.min;
  }

  update() {
    if (this.current >= this.max) {
      this.direction = -1;
    } else if(this.current <= this.min) {
      this.direction = 1;
    }

    this.current += (this.speed * this.direction);
  }

  getValue() {
    return this.current;
  }
}
