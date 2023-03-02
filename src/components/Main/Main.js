import UnityApp from '../UnityApp/UnityApp';
import './Main.css';
import image1 from './img-load-coupled-oscillations.png';
import image2 from './img-load-rotating-gun.png';

const app1data = {
  index: 1,
  name: 'Coupled Oscillations',
  loaderUrl: 'CoupledOscillations/Build/CoupledOscillations.loader.js',
  dataUrl: 'CoupledOscillations/Build/CoupledOscillations.data',
  frameworkUrl: 'CoupledOscillations/Build/CoupledOscillations.framework.js',
  codeUrl: 'CoupledOscillations/Build/CoupledOscillations.wasm',
  description: '[Coupled oscillations description]',
  image: image1,
  github: 'https://github.com/epfl-physics/coupled-oscillations.git',
};

const app2data = {
  index: 2,
  name: 'Rotating Gun',
  loaderUrl: 'RotatingGun/Build/RotatingGun.loader.js',
  dataUrl: 'RotatingGun/Build/RotatingGun.data',
  frameworkUrl: 'RotatingGun/Build/RotatingGun.framework.js',
  codeUrl: 'RotatingGun/Build/RotatingGun.wasm',
  description: '[Rotating gun description]',
  image: image2,
  github: 'https://github.com/epfl-physics/rotating-gun.git',
};

export default function Main() {
  return (
    <main className='content'>
      <UnityApp {...app1data} />
      <UnityApp {...app2data} />
    </main>
  );
}
