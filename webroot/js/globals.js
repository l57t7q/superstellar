import { getCurrentWindowSize } from './utils';
import LeaderboardDialog from "./leaderboardDialog";
import AnnulusFilter from './annulusFilter';

const windowSize = getCurrentWindowSize();

export const renderer = new PIXI.WebGLRenderer(
  windowSize.width, windowSize.height, {autoResize: true}
);
export const stage = new PIXI.Container();

export const globalState = {
  clientId: null,
  clientIdToName: new Map(),
  nickname: null,
  spaceshipMap: new Map(),
  physicsFrameID: 0,
  projectilesMap: new Map(),
  dialog: null,
  killedBy: null,
  worldSizeFilter: new AnnulusFilter(),
  ping: null,
  firstPhysicsFrameTimestamp: null,
  physicsFrameRate: null,
};

export const leaderboardDialog = new LeaderboardDialog();
