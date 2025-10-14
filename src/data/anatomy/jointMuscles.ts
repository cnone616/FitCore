const jointMuscleImages = [
  '/src/assets/anatomy/joint-muscles/knee-joint-muscles-1.png',
  '/src/assets/anatomy/joint-muscles/shoulder-joint-muscles.png',
  '/src/assets/anatomy/joint-muscles/elbow-joint-muscles.png',
  '/src/assets/anatomy/joint-muscles/wrist-joint-muscles.png',
  '/src/assets/anatomy/joint-muscles/hip-joint-muscles.png',
  '/src/assets/anatomy/joint-muscles/ankle-joint-muscles.png',
  '/src/assets/anatomy/joint-muscles/ankle-joint-muscles-2.png',
  '/src/assets/anatomy/joint-muscles/spine-joint-muscles.png',
  '/src/assets/anatomy/joint-muscles/chest-muscles.png',
  '/src/assets/anatomy/joint-muscles/back-muscles.png',
  '/src/assets/anatomy/joint-muscles/abdomen-muscles.png',
  '/src/assets/anatomy/joint-muscles/arm-muscles.png',
  '/src/assets/anatomy/joint-muscles/leg-muscles.png'
] as const;

export type JointMuscleImage = typeof jointMuscleImages[number];

export default jointMuscleImages;
