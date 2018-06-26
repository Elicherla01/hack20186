import { init as initScene } from './scene';
import { init as initSphere } from './sphere';
import { init as initPaths } from './paths';
import { init as initPathsAmber } from './pathsamber';
import { init as initPathsRed } from './pathsred';

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

  ]),

  initPathsAmber([
    [
      35.77397,
      -122.43129,
      22.54554,
      134.0683
    ],
    [
      46.77397,
      -117.43129,
      26.54554,
      117.0683
    ],
    [
      75.77397,
      -150.43129,
      23.54554,
      164.0683
    ]),

    initPathsRed([
      [
        35.77397,
        -122.43129,
        26.54554,
        114.0683
      ],
      [
        47.77397,
        -117.43129,
        28.54554,
        117.0683
      ],
      [
        73.77397,
        -160.43129,
        29.54554,
        163.0683
      ]

  ]);
}
