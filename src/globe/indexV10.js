import { init as initScene } from './scene';
import { init as initSphere } from './sphere';
import { init as initPaths } from './paths';
import { init as initPathsRed } from './pathsred';
import { init as initPathsAmber } from './pathsamber';

export default function initGlobe(container) {
  initScene(container);
  initSphere();
  initPaths([
    [
      37.77397,
      -122.43129,
      22.54554,
      114.0683
    ],
    [
      47.77397,
      -110.43129,
      22.54554,
      114.0683
    ],
    [
      40.77397,
      -110.43129,
      20.54554,
      114.0683
    ]

  ]);

  initPathsRed([
    [
      32.77397,
      -122.43129,
      21.54554,
      117.0683
    ],
    [
      49.77397,
      -120.43129,
      26.54554,
      134.0683
    ],
    [
      44.77397,
      -140.43129,
      22.54554,
      124.0683
    ]

  ]);

  initPathsAmber([
    [
      31.77397,
      -112.43129,
      20.54554,
      127.0683
    ],
    [
      29.77397,
      -220.43129,
       266.54554,
      194.0683
    ],
    [
      49.77397,
      -110.43129,
      24.54554,
      114.0683
    ]

  ]);

}
