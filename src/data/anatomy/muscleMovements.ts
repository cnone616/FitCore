const muscleMovementImages = [
  '/src/assets/anatomy/muscle-movements/elbow-movement.png',
  '/src/assets/anatomy/muscle-movements/ankle-movement.png',
  '/src/assets/anatomy/muscle-movements/knee-movement.png',
  '/src/assets/anatomy/muscle-movements/hip-movement.png',
  '/src/assets/anatomy/muscle-movements/wrist-movement.png',
  '/src/assets/anatomy/muscle-movements/shoulder-movement.png',
  '/src/assets/anatomy/muscle-movements/spine-movement.png'
] as const;

export type MuscleMovementImage = typeof muscleMovementImages[number];

export default muscleMovementImages;
