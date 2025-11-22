import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js';

class Metaverse3D {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;

  constructor(canvaslData: string) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    // Project 2D affine CanvasL to 3D projective
    this.projectCanvasL(canvaslData);

    // AR/VR enablement with A-Frame
    this.renderer.xr.enabled = true;
    document.body.appendChild(ARButton.createButton(this.renderer));

    // Load device media
    this.loadMedia();

    this.animate();
  }

  projectCanvasL(data: string) {
    const strata = data.split('\n').map(line => {
      try { return JSON.parse(line); } catch { return null; }
    }).filter(Boolean);

    strata.forEach((obj: any) => {
      if (obj.type === 'node' || obj.id) {
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: obj.color || 0x00ff00 });
        const node = new THREE.Mesh(geometry, material);
        node.position.set((obj.x || 0) / 10, (obj.y || 0) / 10, 0);
        this.scene.add(node);
      } else if (obj.type === 'edge' || obj.from) {
        const points = [
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(5, 5, 10)
        ];
        const line = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(points),
          new THREE.LineBasicMaterial({color: 0xff0000})
        );
        this.scene.add(line);
      }
    });
  }

  loadMedia() {
    // SVG as texture on plane
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('example.svg', (texture) => {
      const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), material);
      plane.position.set(0, 0, -5);
      this.scene.add(plane);
    });

    // WEBM as video texture
    const video = document.createElement('video');
    video.src = 'example.webm';
    video.load();
    video.play();
    const videoTexture = new THREE.VideoTexture(video);
    const videoMaterial = new THREE.MeshBasicMaterial({ map: videoTexture });
    const videoPlane = new THREE.Mesh(new THREE.PlaneGeometry(16, 9), videoMaterial);
    videoPlane.position.set(10, 0, -5);
    this.scene.add(videoPlane);

    // GLB as 3D model
    const loader = new GLTFLoader();
    loader.load('example.glb', (gltf) => {
      gltf.scene.position.set(-10, 0, -5);
      this.scene.add(gltf.scene);
    });

    // Blob as dynamic texture
    const blob = new Blob(['Dynamic metaverse data'], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    textureLoader.load(url, (blobTexture) => {
      const blobMaterial = new THREE.MeshBasicMaterial({ map: blobTexture });
      const blobSphere = new THREE.Mesh(new THREE.SphereGeometry(2), blobMaterial);
      blobSphere.position.set(0, 10, -5);
      this.scene.add(blobSphere);
    });
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.renderer.render(this.scene, this.camera);
  }
}

// Boot with sample 2D CanvasL
const sampleCanvasL = `{"id":"use-cases","type":"subgraph","label":"Use Cases"}
{"id":"LIFE_TOKEN","type":"node","label":"LIFE_TOKEN","color":"#00ff00"}`;
new Metaverse3D(sampleCanvasL);

