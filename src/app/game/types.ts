import * as THREE from "three";

export type Enemy = {
  root: THREE.Group;
  body: THREE.Mesh;
  head: THREE.Mesh;
  hp: number;
  alive: boolean;
  points: THREE.Vector3[];
  target: number;
  speed: number;
  nextShot: number;
  name: string;
};

export type HudState = { health: number; ammo: number; reserve: number; remaining: number };
export type GameStatus = "playing" | "won" | "dead";
export type GameCallbacks = {
  onHud: (hud: HudState) => void;
  onDamage: () => void;
  onKill: (label: string) => void;
  onStatus: (status: GameStatus) => void;
};

export type GameApi = {
  start: () => void;
  destroy: () => void;
  setJoystick: (x: number, y: number) => void;
  aimDelta: (dx: number, dy: number) => void;
  setFiring: (value: boolean) => void;
  reload: () => void;
  jump: () => void;
};
