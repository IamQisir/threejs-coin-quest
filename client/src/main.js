import * as THREE from 'three';
import './style.css';

// The scene holds objects, the camera defines the view, and the renderer draws them.
const container = document.querySelector('#game');
const scene = new THREE.Scene();
scene.background = new THREE.Color('#172338');
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
camera.position.set(7, 8, 10);
camera.lookAt(0, 0, 0);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
container.appendChild(renderer.domElement);

scene.add(new THREE.HemisphereLight(0xffffff, 0x334455, 2));
const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(4, 8, 5);
scene.add(light);

const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshStandardMaterial({ color: '#405a54' }),
);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

const player = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: '#f4ba49' }),
);
player.position.y = 0.5;
scene.add(player);

// Update the canvas size and camera aspect ratio when the browser is resized.
function resize() {
  const width = container.clientWidth;
  const height = container.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}
window.addEventListener('resize', resize);
resize();
renderer.setAnimationLoop(() => renderer.render(scene, camera));

// Vite forwards /api requests to the local backend.
async function checkApi() {
  const status = document.querySelector('#api-status');
  try {
    const response = await fetch('/api/health');
    if (!response.ok) throw new Error('API request failed');
    const data = await response.json();
    status.textContent = data.status === 'ok' ? 'API connected' : 'Unexpected API status';
  } catch {
    status.textContent = 'API disconnected. Start the backend and refresh the page.';
  }
}
checkApi();
