import * as THREE from 'three';
import Object from './object';
import PingPong from './pingPong';
import { randomBetween, randomFrom } from './utilities';

const colours = [
  0xfbf9f5,
  0xbdd0c7,
  0x778c86,
  0x4a636F
];

export default class Cube extends Object {
  constructor() {
    super();
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshBasicMaterial({ color: randomFrom(colours), wireframe: true });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.pingPongPositioner = new PingPong(0, 4, randomBetween(0.001, 0.005));

    this.mesh.rotation.x = THREE.Math.degToRad(randomBetween(0, 360));
    this.mesh.rotation.y = THREE.Math.degToRad(randomBetween(0, 360));
    this.mesh.rotation.z = THREE.Math.degToRad(randomBetween(0, 360));

    this.xRotationSpeed = randomBetween(0.02, 0.05);
    this.yRotationSpeed = randomBetween(0.02, 0.05);
    this.zRotationSpeed = randomBetween(0.02, 0.05);

    this.setScale(0.1);
  }

  update() {
    this.pingPongPositioner.update();

    this.mesh.position.z = this.pingPongPositioner.getValue();
    this.mesh.rotation.x += this.xRotationSpeed;
    this.mesh.rotation.y += this.yRotationSpeed;
    this.mesh.rotation.z += this.zRotationSpeed;
  }
}
