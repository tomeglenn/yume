import * as THREE from 'three';
import Cube from './cube';
import { randomBetween } from './utilities';

const VIEW_ANGLE = 70,
      NEAR = 0.1,
      FAR = 10000;

export default class Canvas {
  constructor(selector) {
    this.domElement = document.getElementById(selector);

    this.init();
    this.resize();
    this.setup();
    this.addToDom();
    this.registerDomEvents();
    this.render();
  }

  init() {
    this.renderer = new THREE.WebGLRenderer();
    this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, this.domElement.offsetWidth / this.domElement.offsetHeight, NEAR, FAR);
    this.scene = new THREE.Scene();

    this.scene.add(this.camera);

    this.scene.background = new THREE.Color(0x202a32);
    this.camera.position.z = 5;
  }

  setup() {
    this.cubes = [];
    for (var i = 0; i < 1000; i++) {
      var cube = new Cube();
      cube.setPosition({ x: randomBetween(-10, 10), y: randomBetween(-10, 10), z: 0 });
      cube.addToScene(this.scene);
      this.cubes.push(cube);
    }
  }

  update() {
    for (var i = 0; i < 1000; i++) {
      this.cubes[i].update();
    }
  }

  render() {
    requestAnimationFrame(this.render.bind(this));
    this.update();
    this.renderer.render(this.scene, this.camera);
  }

  resize() {
    var width = this.domElement.offsetWidth;
    var height = this.domElement.offsetHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  addToDom() {
    this.domElement.appendChild(this.renderer.domElement);
  }

  registerDomEvents() {
    window.addEventListener('resize', this.resize.bind(this), false);
  }
}
