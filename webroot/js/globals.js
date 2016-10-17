import { getCurrentWindowSize } from './utils';

const windowSize = getCurrentWindowSize();

export const renderer = new PIXI.WebGLRenderer(
  windowSize.width, windowSize.height, {autoResize: true}
);
export const stage = new PIXI.Container();

export const globalState = {
  clientId: null,
  spaceshipMap: new Map(),
  physicsFrameID: 0,
  projectiles: []
};

export const hudRightOffset = 150;
