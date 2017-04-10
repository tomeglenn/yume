import * as THREE from 'three';

export default class Object {
  setPosition(v) {
    if (v.x) this.mesh.position.x = v.x;
    if (v.y) this.mesh.position.y = v.y;
    if (v.z) this.mesh.position.z = v.z;
  }

  setRotation(v) {
    if (v.x) this.mesh.rotation.x = v.x;
    if (v.y) this.mesh.rotation.y = v.y;
    if (v.z) this.mesh.rotation.z = v.z;
  }

  setScale(v) {
    if (typeof(v) === 'number') {
      this.mesh.scale.x = this.mesh.scale.y = this.mesh.scale.z = v;
    }

    if (v.x) this.mesh.scale.x = v.x;
    if (v.y) this.mesh.scale.y = v.y;
    if (v.z) this.mesh.scale.z = v.z;
  }

  addToScene(scene) {
    scene.add(this.mesh);
  }
}
